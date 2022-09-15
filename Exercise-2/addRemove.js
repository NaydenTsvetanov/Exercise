function myFunc(arr) {

    let finalArr = [];
    let num = 1;

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] === 'add') {
            finalArr.push(num);
        }else if(arr[i] === 'remove') {
            finalArr.pop();
        }

        num++;

    }

    if(finalArr.length === 0) {
        console.log('Empty');
    }else {
        finalArr.forEach(
            e => console.log(e)
        );
    }

} 

myFunc(['add', 'add', 'add', 'add']);
myFunc(['add', 'add', 'remove', 'add', 'add']);
myFunc(['remove', 'remove', 'remove']);