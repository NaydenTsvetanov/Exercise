function myFunc(input) {

    let result = [];

    for(let iter of input) {
        let [name, level, items] = iter.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({ name, level, items });
    }

    console.log(JSON.stringify(result));
    
}

myFunc(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
myFunc(['Jake / 1000 / Gauss, HolidayGrenade']);