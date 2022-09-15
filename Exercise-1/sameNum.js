function sameNums(num) {

    let check = num.toString();
    let result;
    let sumNums = 0;

    for(let i = 0; i < check.length; i++) {
        if(check[0] === check[i]) {
            result = true;
        }else {
            result = false;
        }

        sumNums += parseInt(check[i]);

    }

    console.log(result);
    console.log(sumNums);

}

sameNums(2222222);
sameNums(1234);