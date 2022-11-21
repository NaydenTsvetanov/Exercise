PIXI.utils.sayHello();

let renderer = PIXI.autoDetectRenderer(512, 512, {
    transparent: true,
    resolution: 1
});

document.getElementById("display").appendChild(renderer.view);

let stage = new PIXI.Container();

PIXI.loader.add("ship", "img/ship_0000.png").load(setup);

let ship;

function setup() {

    ship = new PIXI.Sprite(
        PIXI.loader.resources["ship"].texture
    );

    stage.addChild(ship);
    renderer.render(stage);

}