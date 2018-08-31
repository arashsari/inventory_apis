import ProductService from '../service/ProductService';

export async function getProduct(req, res) {
    const id = req.swagger.params.id.value;
    let service = new ProductService();
    try {
        let product = service.get(id);
        return res.json(product);
    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
}

export async function getProducts(req, res) {
    let service = new ProductService();
    try {
        let products = service.get();
        return res.json(products);
    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
}

export async function deleteProduct(req, res) {
    const id = req.swagger.params.id.value;
    let service = new ProductService();
    try {
        service.delete(id);
        return res.status(204).send();
    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
}

export async function postProduct(req, res) {
    let product = req.swagger.params.body.value;
    let service = new ProductService(product);
    try {
        let result = service.create(product);
        return res.status(201).json(result);
    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
}