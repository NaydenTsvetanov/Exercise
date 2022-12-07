window.addEventListener('load', solve);

function solve() {

    document.getElementById("next-btn").addEventListener("click", test);

    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let checkIn = document.getElementById("date-in");
    let checkOut = document.getElementById("date-out");
    let numberGuest = document.getElementById("people-count");
    let infoList = document.getElementsByClassName("info-list")[0];
    let confirmInfo = document.getElementsByClassName("confirm-list")[0];
    let verification = document.getElementById("verification");

    function test() {
     
        let firstNameValue = firstName.value;
        let lastNameValue = lastName.value;
        let checkInValue = checkIn.value;
        let checkOutValue = checkOut.value;
        let numberGuestValue = numberGuest.value;

        if(firstNameValue == "" || lastNameValue == "" || checkInValue == "" || checkOutValue == "" || numberGuestValue == "") {
            return;
        }

        makePost(firstNameValue, lastNameValue, checkIn, checkOut, numberGuest);
        
    }

    function makePost(firstName, lastName, checkIn, checkOut, numberGuest) {

        let li = document.createElement("li");
        li.classList.add("reservation-content");

        let article = createArticle(firstName, lastName, checkIn, checkOut, numberGuest);

        let editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", editBtnF);

        let continueBtn = document.createElement("button");
        continueBtn.classList.add("continue-btn");
        continueBtn.textContent = "Continue";
        continueBtn.addEventListener("click", confirmList);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        infoList.appendChild(li);

        firstName.value = "";
        lastName.value = "";
        checkIn.value = "";
        checkOut.value = "";
        numberGuest.value = "";

    }

    function editBtnF(e) {

        let current = e.target.parentElement;
        let articleCount = current.getElementByTagName("article")[0].children;

        let fullName = articleCount[0].textContent;

        let fName = fullName.split(" ")[1];
        let lName = fullName.split(" ")[2];
        let checkInA = articleCount[1];
        let checkOutA = articleCount[2];
        let numGuest = articleCount[3];

        firstName.value = fName;
        lastName.value = lName;
        checkIn.value = checkInA;
        checkOut.value = checkOutA;
        numberGuest.value = numGuest;

        current.remove();

    }

    function confirmList(e) {

        let current = e.target.parentElement;
        let articleCount = current.getElementByTagName("article")[0].children;

        let fullName = articleCount[0].textContent;

        let fName = fullName.split(" ")[1];
        let lName = fullName.split(" ")[2];
        let checkInA = articleCount[1];
        let checkOutA = articleCount[2];
        let numGuest = articleCount[3];

        let article = createArticle(fName, lName, checkInA, checkOutA, numGuest);

        let confirmBtn = document.createElement("button");
        confirmBtn.classList.add("confirm-btn");
        confirmBtn.textContent = "Confirm";
        confirmBtn.addEventListener("click", confirmFunc);

        let cancleBtn = document.createElement("button");
        cancleBtn.classList.add("cancle-btn");
        cancleBtn.textContent = "Cancel";

        li.appendChild(article);
        li.appendChild(confirmBtn);
        li.appendChild(cancleBtn);

        confirmInfo.appendChild(li);

        current.remove();

    }

    function confirmFunc(e) {

        let curr = e.target.parentElement;
        curr.remove();

        

    }

    function createArticle(firstName, lastName, checkIn, checkOut, numberGuest) {

        let article = document.createElement("article");

        let h = document.createElement("h3");
        h.innerHTML = `Name: ${firstName} ${lastName}`;

        let dataInP = document.createElement("p");
        dataInP.innerHTML = `From data: ${checkIn}`;

        let dataOutP = document.createElement("p");
        dataOutP.innerHTML = `To data: ${checkOut}`;

        let p = document.createElement("P");
        p.innerHTML = `For ${numberGuest} people`;

        article.appendChild(h);
        article.appendChild(dataInP);
        article.appendChild(dataOutP);
        article.appendChild(p);

        return article;

    }

}



    
    
