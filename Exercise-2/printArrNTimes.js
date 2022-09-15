function myFunc(arr, step) {

    let newArr = [];

    for(let i = 0; i < arr.length; i += step) {
        newArr.push(arr[i]);
    }

    return newArr;

}

myFunc(['5','20','31','4','20'],2);
myFunc(['dsa', 'asd', 'test', 'tset'], 2);
myFunc(['1', '2', '3', '4', '5'], 6);