// let nums = [ 74, 18, 10, 5, 84, 24, 105 ];

// function sumOfDigit(n) {
//     let sum = 0;
//     while (n > 0) {
//         sum += n % 10;
//         n = Math.floor(n / 10);
//     }
//     return sum;
// }

// function sortArr(arr) {
//     let sortedArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         sortedArr.push([sumOfDigit(arr[i]), arr[i]]);
//     }

//     return sortedArr.sort((a, b) => {
//         if (a[0] === b[0]) {
//             return 0;
//         }
//         else {
//             return (a[0] < b[0]) ? -1 : 1;
//         }
//     });

// }

// for(let el of sortArr(nums)) {
//     console.log(el[1]);

// }


// function sortArrayByDigits(arr) {

//     function sumOfDigit(n) {
//         let sum = 0;
//         while (n > 0) {
//             sum += n % 10;
//             n = Math.floor(n / 10);
//         }
//         return sum;
//     }

//     function sortArr(arr) {
//         let sortedArr = [];
    
//         for (let i = 0; i < arr.length; i++) {
//             sortedArr.push([sumOfDigit(arr[i]), arr[i]]);
//         }
    
//         return sortedArr.sort((a, b) => {
//             if (a[0] === b[0]) {
//                 return 0;
//             }
//             else {
//                 return (a[0] < b[0]) ? -1 : 1;
//             }
//         });
    
//     }

//     let test = sortArr(arr);

//     let result = [];

//     for(let el of test) {
//         result.push(el[1]);
//     }

//     return result;

// }

// function solve(arr) {

//     for(let i = 0; i < arr.length; i++) {

//         let sum = 0; 

//         while(arr[i] > 0) {
//             sum += arr[i] % 10;
//             arr[i] = Math.floor(arr[i] / 10);
//         }

//         console.log(sum);

//     }

// }

// console.log(solve([ 21, 2, 45, 74, 85, 5, 105 ]));
// console.log("----------------------------------------------------------------");
// console.log(solve([ 74, 18, 10, 5, 84, 24, 105 ]));