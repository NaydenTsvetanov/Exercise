// function changeLetters(str) {

//     let arr = str.split("");

//     for(let i = 0; i < arr.length; i++) {

//         arr[i] = "A";

//     }

//     return arr.join("");

// }

function solve() {

    let hero = {
        "Cow" : [100, 100],
        "Kyr" : [100, 100],
        "Dog" : [100, 100]
    }

    let key = "Kyr";

   delete hero[key];

    console.log(`${hero["Dog"]} is Dead`);

}

solve();