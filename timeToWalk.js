function myFunc(steps, meterPerStep, speed) {

    let distMeters = steps * meterPerStep;
    let speedMeters = speed / 3.6;
    let time = distMeters / speedMeters;
    let rest = Math.floor(distMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);
    timeMin += rest;
    timeHr += Math.floor(timeMin / 60);
    timeMin = timeMin % 60;

    let formattedHr = timeHr < 10 ? `0${timeHr}` : `${timeHr}`;
    let formattedMin = timeMin < 10 ? `0${timeMin}` : `${timeMin}`;
    let formattedSec = timeSec < 10 ? `0${timeSec}` : `${timeSec}`;


    console.log(`${formattedHr}:${formattedMin}:${formattedSec}`);

}

myFunc(9000, 0.60, 5);
myFunc(2564, 0.70, 5.5);