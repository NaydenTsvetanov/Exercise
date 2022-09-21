function myFunc(carOrder) {

    let sEngine = { power: 90, volume: 1800 };
    let mEngine = { power: 120, volume: 2400 };
    let lEngine = { power: 200, volume: 3500 };
    let size = carOrder.wheelsize;

    if(size % 2 === 0) {
        size--;
    }

    let finalCar = {
        model: carOrder.model,
        engine: undefined,
        carriage: {
            type: carOrder.carriage,
            color: carOrder.color
        },
        wheels: [ size, size, size, size ]

    }

    if(carOrder.power <= sEngine.power) {
        finalCar.engine = sEngine;
    }else if(carOrder.power <= mEngine.power) {
        finalCar.engine = mEngine;
    }else if(carOrder.power <= lEngine.power) {
        finalCar.engine = lEngine;
    }

    return finalCar;

}

myFunc({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 });
console.log('---------');
myFunc({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17 });

// { model: 'VW Golf II',
//  engine: { power: 90, volume: 1800 },
//   carriage: { type: 'hatchback', color: 'blue' },
//    wheels: [13, 13, 13, 13] }