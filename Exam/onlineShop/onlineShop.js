class OnlineShop {

    constructor(warehouseSpace) {

        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];

    }

    loadingStore(product, quantity, spaceRequired) {

        if(spaceRequired > this.warehouseSpace) {
            throw Error("Not enough space in the warehouse.");
        }

        this.products.push({ product, quantity });

        this.warehouseSpace -= spaceRequired;

        return `The ${product} has been successfully delivered in the warehouse.`

    }

    quantityCheck(product, minimalQuantity) {

        let checkItem = this.products.find(p => p.product === product);

        if(checkItem === undefined) {
            throw Error(`There is no ${product} in the warehouse.`);
        }

        if(minimalQuantity <= 0) {
            throw Error(`The quantity cannot be zero or negative.`);
        }

        if(checkItem.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`;
        }else {
            let diff = minimalQuantity - checkItem.quantity;
            checkItem.quantity = minimalQuantity;
            return `You added ${diff} more from the ${product} products.`
        }

    }

    sellProduct(product) {

        let checkItem = this.products.find(p => p.product === product);

        if(checkItem === undefined) {
            throw Error(`There is no ${product} in the warehouse.`);
        }

        checkItem.quantity--;

        this.sales.push({ product, quantity:1 });

        return `The ${product} has been successfully sold.`;

    }

    revision() {

        if(this.sales.length === 0) {
            throw Error("There are no sales today!");
        }

        let buff = "";

        buff += `You sold ${this.sales.length} products today!\n`;

        buff += "Products in the warehouse:\n";

        for(let el of this.products) {
            buff += `${el.product}-${el.quantity} more left\n`;
        }

        return buff;

    }

}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());