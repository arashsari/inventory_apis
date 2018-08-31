import InventoryService from '../service/InventoryService';

export async function getInventory(req, res) {
    const id = req.swagger.params.id.value;
    let service = new InventoryService();
    try {
        let inventory = service.get(id);
        return res.json(inventory);
    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
}

export async function getInventories(req, res) {
    let service = new InventoryService();
    try {
        let inventories = service.get();
        return res.json(inventories);
    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
}

export async function deleteInventory(req, res) {
    const id = req.swagger.params.id.value;
    let service = new InventoryService();
    try {
        service.delete(id);
        return res.status(204).send();
    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
}

export async function postInventory(req, res) {
    let inventory = req.swagger.params.body.value;
    let service = new InventoryService(inventory);
    try {
        let result = service.create(inventory);
        return res.status(201).json(result);
    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
}