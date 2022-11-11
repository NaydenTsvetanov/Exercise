function solve() {

    function depart() {
        console.log('Depart TODO...');
        const buttonInfo = document.getElementById("depart");
        const button = buttonInfo.value;
        const url = `http://localhost:3030/jsonstore/bus/schedule/${button}`;
        debugger
    }

    function arrive() {
        console.log('Arrive TODO...');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();