function attachEvents() {
    console.log("TODO...");
    document.getElementById("submit").addEventListener("click", getWeather);
}

async function getWeather() {
    
    const url = "http://localhost:3030/jsonstore/forecaster/locations";
    const townName = document.getElementById("location").value;

    const response = await fetch(url);
    const data = await response.json();
    
    const info = data.find(x => x.name === townName);
    
    createForcast(info.code);

}

async function createForcast(code) {

    const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
    const urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

    const responseToday = await fetch(urlToday);
    const responseUpcoming = await fetch(urlUpcoming);

}

attachEvents();