function myFunc(num, act1, act2, act3, act4, act5) {

    let result = parseInt(num);
    let arr = [act1, act2, act3, act4, act5];

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] === 'chop') {

            result /= 2;
            console.log(result);

        }else if(arr[i] === 'dice') {

            result = Math.sqrt(result);
            console.log(result);

        }else if(arr[i] === 'spice') {

            result += 1;
            console.log(result);

        }else if(arr[i] === 'bake') {

            result *= 3;
            console.log(result);

        }else if(arr[i] === 'fillet') {

            result *= 1 - 0.20;
            console.log(result.toFixed(1));

        }

    }

}

myFunc('32', 'chop', 'chop', 'chop', 'chop', 'chop');
myFunc('9', 'dice', 'spice', 'chop', 'bake', 'fillet');