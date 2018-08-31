const inventories = [];

// just because I love pure javascript old fashion coding sometimes 😊
function InventoryService({ id, product_id, quantity, inventory_associates, address, location, quantity_lessthan, quantity_morethan } = {}) {
    this.id = id;
    this.product_id = product_id;
    this.quantity = quantity;
    this.inventory_associates = inventory_associates;
    this.address = address;
    this.location = location;
    this.quantity_lessthan = quantity_lessthan;
    this.quantity_morethan = quantity_morethan;
}
InventoryService.prototype = {
    constructor: InventoryService,
    create : (inventory) => {
        if (!inventory){
            throw new Error(`❌ movie is not properly sent`);
        }
        if (inventories.findIndex(x => x.id === inventory.id) > -1) {
            throw new Error(`❌ movie with the id: ${inventory.id} is already posted`);
        }
        inventories.push(inventory);
        return inventory;
    },
    delete : (id) => {
        let index = inventories.findIndex(x => x.id === id);
        if (index === -1) {
            throw new Error(`❌ inventory with the id: ${id} not found`);
        }
        inventories.splice(index, 1);
    },
    get : (id = null) => {
        if (id) {
            let inventory = inventories.find(x => x.id === id);
            if (!inventory) {
                throw new Error(`❌ inventory with the id: ${id} not found`);
            }
            return inventory;
        }else{
            return inventories;
        }
    }
};

export default InventoryService;