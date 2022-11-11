async function getInfo() {

    const stopInfo = document.getElementById("stopId");
    const stopId = stopInfo.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    const stopName = document.getElementById("stopName");
    const busList = document.getElementById("buses");
    
    busList.innerHTML = "";
    stopId.value = "";

    try {
        const response = await fetch(url);
        const data = await response.json();

        stopName.textContent = data.name;
        Object.entries(data.buses).forEach(([key, value]) => {
            const li = document.createElement("li");
            li.textContent = `Bus ${key} arrives in ${value} minutes`;
            busList.appendChild(li);
        });
    }catch (error) {
        stopName.textContent = "Error";
    }
}