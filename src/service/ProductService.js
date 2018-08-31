const products = [];

// just because I love pure javascript old fashion coding sometimes 😊
function ProductService({ id, title, price, category, description} = {}) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
    this.description = description;
}
ProductService.prototype = {
    constructor: ProductService,
    create : (product) => {
        if (!product){
            throw new Error(`❌ product is not properly sent`);
        }
        if (products.findIndex(x => x.id === product.id) > -1) {
            throw new Error(`❌ product with the id: ${product.id} is already posted`);
        }
        products.push(product);
        return product;
    },
    delete : (id) => {
        let index = products.findIndex(x => x.id === id);
        if (index === -1) {
            throw new Error(`❌ product with the id: ${id} not found`);
        }
        products.splice(index, 1);
    },
    get : (id = null) => {
        if (id) {
            let product = products.find(x => x.id === id);
            if (!product) {
                throw new Error(`❌ product with the id: ${id} not found`);
            }
            return product;
        }else{
            return products;
        }
    }
};

export default ProductService;