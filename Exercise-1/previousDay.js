function myFunc(year, month, day) {

    let arr = [year, month, day];

    let d = new Date(arr);
    let x = 86400000;
    let result = new Date(d - x);

    console.log(`${result.getFullYear()}-${result.getMonth() + 1}-${result.getDate()}`);

}

myFunc(2016, 9, 30);
myFunc(2016, 10, 1);