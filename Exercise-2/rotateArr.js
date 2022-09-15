function myFunc(arr, steps) {

    let str = '';

    for(let i = 1; i <= steps; i++) {
        arr.unshift(arr.pop());
    }

    arr.forEach(
        e =>  str += e + ' '
    ); 

    console.log(str);

}

myFunc(['1','2','3','4'],2);
myFunc(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
