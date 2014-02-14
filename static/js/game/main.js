var game = new Phaser.Game(800, 480, Phaser.AUTO, 'content', { preload: preload, create: create, update: update });
var platforms;

function preload() {
    game.load.image('sky', '/static/images/sky.png');
    game.load.image('ground', '/static/images/ground.png');
}

function create() {
    game.add.sprite(0, 0, 'sky');

    var ground = game.add.tileSprite(0, game.world.height-256, 800, 256, 'ground');
    ground.body.immovable = true;
}

function update() {
}
