function myFunc(input) {

    let result = [];

    for(let iterator of input) {
        let [ name, price ] = iterator.split(' : ');
        
        let obj = {
            id: name[0],
            name: name,
            price: price,
        };

        result.push(obj);

    }

    result.sort((a, b) => {

        const nameA = a.name.toUpperCase(); 
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {

          return - 1;

        }
        if (nameA > nameB) {

          return 1;

        }
      
        return 0;

      });

      let curentId = result[0].id;
      console.log(curentId);
      for(let i = 0; i < result.length; i++) {

        if(curentId !== result[i].id) {
            curentId = result[i].id;
            console.log(curentId);
            console.log(`  ${result[i].name}: ${result[i].price}`);
        }else {
            console.log(`  ${result[i].name}: ${result[i].price}`);
        }

      }

}

myFunc(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
console.log('\n================================')
myFunc(['Banana : 2', "Rubic's Cube : 5", 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10']);