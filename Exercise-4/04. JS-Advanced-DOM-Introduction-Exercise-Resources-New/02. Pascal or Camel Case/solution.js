function solve() {
  let input = document.getElementById("text").value;
  let currCase = document.getElementById("naming-convention").value;
  let splitText = input.split(" ");
  let result = "";

  if(currCase === "Camel Case") {

    splitText.forEach((e, i) => {
      if(i === 0){

        return result += e.toLowerCase();

      }else {

        return result += e[0].toUpperCase() + e.substring(1).toLowerCase(); 

      }
    });

  }else if(currCase === "Pascal Case") {
    splitText.forEach(e => {

      return result += e[0].toUpperCase() + e.substring(1).toLowerCase();

    });

  }else {

    result = "Error!";

  }

  document.getElementById("result").innerHTML = result;

}