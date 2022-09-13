function myFunc(xOne, yOne, xTwo, yTwo) {

    //let result = Math.sqrt(((xTwo - xOne) * (xTwo - xOne)) + ((yTwo - yOne) * (yTwo - yOne)));

    if(xOne >= 0 && yOne >= 0){
        console.log(`{${xOne}, ${yOne}} to {0, 0} is valid`);
    }

}

myFunc(3, 0, 0, 4);
myFunc(2, 1, 1, 1);