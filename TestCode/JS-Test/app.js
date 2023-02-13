const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "images/character_0008.png";

function animate() {

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEGHT);
    ctx.fillRect(50, 50, 100, 100);
    ctx.drawImage(playerImage, 0, 0, 64, 64);
    requestAnimationFrame(animate);

}
animate();
