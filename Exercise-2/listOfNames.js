function myFunc(arr) {

    arr.sort();

    for(let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}.${arr[i]}`);
    }

}

myFunc(["John", "Bob", "Christina", "Ema"]);