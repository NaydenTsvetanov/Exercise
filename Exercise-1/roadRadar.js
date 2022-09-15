function myFunc(speed, area) {

    const motorway = 130;
    const interstate = 90;
    const city = 50;
    const residential = 20;

    if(area === 'motorway') {

       if(speed <= motorway) {
            console.log(`Driving ${speed} km/h in a ${motorway} zone`);
        }else if(speed > motorway && speed <= motorway + 20) {
            console.log(`The speed is ${speed - motorway} km/h faster than the allowed speed of ${motorway} - speeding`);
        }else if(speed > motorway + 20 && speed <= motorway + 40) {
            console.log(`The speed is ${speed - motorway} km/h faster than the allowed speed of ${motorway} - excessive speeding`);
        }else {
            console.log(`The speed is ${speed - motorway} km/h faster than the allowed speed of ${motorway} - reckless driving`);
        }

    }else if(area === 'interstate') {

        if(speed <= interstate) {
            console.log(`Driving ${speed} km/h in a ${interstate} zone`);
        }else if(speed > interstate && speed <= interstate + 20) {
            console.log(`The speed is ${speed - interstate} km/h faster than the allowed speed of ${interstate} - speeding`);
        }else if(speed > interstate + 20 && speed <= interstate + 40) {
            console.log(`The speed is ${speed - interstate} km/h faster than the allowed speed of ${interstate} - excessive speeding`);
        }else {
            console.log(`The speed is ${speed - interstate} km/h faster than the allowed speed of ${interstate} - reckless driving`);
        }

    }else if(area == 'city') {

        if(speed <= city) {
            console.log(`Driving ${speed} km/h in a ${city} zone`);
        }else if(speed > city && speed <= city + 20) {
            console.log(`The speed is ${speed - city} km/h faster than the allowed speed of ${city} - speeding`);
        }else if(speed > city + 20 && speed <= city + 40) {
            console.log(`The speed is ${speed - city} km/h faster than the allowed speed of ${city} - excessive speeding`);
        }else {
            console.log(`The speed is ${speed - city} km/h faster than the allowed speed of ${city} - reckless driving`);
        }

    }else if(area === 'residential') {

        if(speed <= residential) {
            console.log(`Driving ${speed} km/h in a ${residential} zone`);
        }else if(speed > residential && speed <= residential + 20) {
            console.log(`The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - speeding`);
        }else if(speed > residential + 20 && speed <= residential + 40) {
            console.log(`The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - excessive speeding`);
        }else {
            console.log(`The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - reckless driving`);
        }

    }



}

myFunc(40, 'city');
myFunc(21, 'residential');
myFunc(120, 'interstate');
myFunc(200, 'motorway');

//· On the motorway, the limit is 130 km/h

//· On the interstate, the limit is 90 km/h

//· In the city, the limit is 50 km/h

//· Within a residential area, the limit is 20 km/h