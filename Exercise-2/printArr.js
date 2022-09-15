function myFunc(arr, text) {

    let result = "";

    for(let i = 0; i < arr.length; i++) {
        result += arr[i];
        if(i < arr.length - 1) {
            result += text;
        }
    }

    console.log(result);

}

myFunc(['One','Two','Three','Four','Five'],'-');
myFunc(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');