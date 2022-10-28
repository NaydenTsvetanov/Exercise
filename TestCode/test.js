function sortArr(arr) {
    let sortedArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        sortedArr.push([sumOfDigit(arr[i]), arr[i]]);
    }
    
    let res = solve(sortedArr);

    return res;
    
}

function sumOfDigit(n) {
    let sum = 0;

    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return sum;

}

function solve(arr) {

    let done = false;
    let res = [];
    while (!done) {
        done = true;

        for (let i = 1; i < arr.length; i++) {

            let elem1 = arr[i - 1][1];
            let elem2 = arr[i][1];
             
            if (arr[i - 1][0] > arr[i][0]) {
                done = false;
                let temp = elem1;
                let temp2 = arr[i - 1][0];

                arr[i - 1][1] = arr[i][1];
                arr[i][1] = temp;
                arr[i - 1][0] = arr[i][0];
                arr[i][0] = temp2;
            }
        }
    }

    for(let i = 0; i < arr.length; i++) {
        res.push(arr[i][1]);
    }

    return res;

}

console.table(sortArr([ 21, 2, 45, 74, 85, 5, 105 ]));
console.log("----------------------------------------------------------------");
console.table(sortArr([ 74, 18, 10, 5, 84, 24, 105 ]));
