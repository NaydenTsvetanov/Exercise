function myFunc(arr) {

    result = [];

    for(let elem of arr) {

        let [ townName, productName, price ] = elem.split(' | ');

        let obj = {
            town: townName,
            product: productName,
            price: price
        };

        result.push(obj);

    }

    result.sort((a, b) => a.price - b.price);

    result.forEach(e => console.log(e));

}

myFunc(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2', 'New York | Sample Product | 1000.1', 'New York | Burger | 10']);