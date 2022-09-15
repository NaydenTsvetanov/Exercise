function myFunc(arr) {

    let result = [];
    let fullArr = arr.sort(function(a, b){return a-b});
    let half = Math.ceil(fullArr.length / 2);

    let firstHalf = arr.slice(0, half);
    let secondHalf = arr.slice(half);
    secondHalf.reverse();

    for(let i = 0; i < firstHalf.length; i++) {
        result.push(firstHalf[i]);
        result.push(secondHalf[i]);
    }

    // console.log(fullArr);
    // console.log('-----------');
    // console.log(firstHalf);
    // console.log('-----------');
    // console.log(secondHalf);
    // console.log('-----------');
    // console.log(result);

    return result;

}

myFunc([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);