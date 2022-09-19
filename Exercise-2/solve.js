function solve(arr) {

    let result = arr.sort().sort((a, b) => a.length - b.length);

    result.forEach(e => console.log(e));

}

solve(['alpha', 'beta', 'gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
solve(['test', 'Deny', 'omen', 'Default']);