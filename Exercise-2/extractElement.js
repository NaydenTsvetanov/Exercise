function myFunc(arr) {

    let currentBigNum = arr[0];
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(currentBigNum <= arr[i]) {
            newArr.push(arr[i]);
            currentBigNum = arr[i];
        }
    }

    return newArr;

}

myFunc([1, 3, 8, 4, 10, 12, 3, 2, 24]);
myFunc([1, 2, 3, 4]);
myFunc([20, 3, 2, 15, 6, 1]);