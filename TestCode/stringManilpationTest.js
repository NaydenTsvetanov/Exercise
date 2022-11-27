function changeLetters(str) {

    let arr = str.split("");

    for(let i = 0; i < arr.length; i++) {

        arr[i] = "A";

    }

    return arr.join("");

}

console.log(changeLetters("I have two doctors, my left leg and my right. When my body and mind are out of gear (and this twin parts of me live at such close quarters that one always catches meloncholy from the other) I know that I have only to call my doctors and I shall be well again. - George Macaulay Trevelyan,  1913"));