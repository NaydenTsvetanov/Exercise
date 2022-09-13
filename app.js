function myFunc(fruit, grams, price) { 

    let pricePerKg = grams / 1000;

    let result = price * pricePerKg;

    return `I need $${result.toFixed(2)} to buy ${pricePerKg.toFixed(2)} kilograms ${fruit}.`;

}

myFunc('orange', 2500, 1.80);
myFunc('apple', 1563, 2.35);