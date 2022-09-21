function solve(arr) {

    let sumRow = 0;
    let sumCol = 0;
    let result = false;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {

            sumRow += arr[i][j];
            sumCol += arr[j][i];

        }

        if(sumRow === sumCol){
            result = true;
            sumRow = 0;
            sumCol = 0;
        }else if(sumRow != sumCol) {
            result = false;
            break;
        }

    }

    console.log(result);

}

solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
solve([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
solve([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);
solve([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);