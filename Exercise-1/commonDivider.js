function myFunc(numOne, numTwo) {

    while(numTwo) {
        var check = numTwo;
        numTwo = numOne % numTwo;
        numOne = check;
    }

    console.log(numOne);

}

myFunc(15, 5);
myFunc(2154, 458);