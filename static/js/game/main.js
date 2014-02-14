var game = new Phaser.Game(800, 480, Phaser.AUTO, 'content', { preload: preload, create: create, update: update });
var platforms;
var player;
var cursors;

function preload() {
    game.load.image('sky', '/static/images/sky.png');
    game.load.image('ground', '/static/images/ground.png');
    game.load.image('char', '/static/images/ground.png');
}

function create() {
    game.add.sprite(0, 0, 'sky');

     platforms = game.add.group();
    for(var i = 0; i < (game.world.width/256)+1; i++) {
        var ground = platforms.create(i*256, game.world.height-256, 'ground');
        ground.body.immovable = true;
    }

    player = game.add.sprite(0, 0, 'char' );
    //player.body.bounce.y = 0.2;
    player.body.gravity.y = 10;
    //player.body.collideWorldBounds = true;
    player.scale.setTo(.2, .75);
    player.body.velocity.y = 50;

    cursors = game.input.keyboard.createCursorKeys();
}

function update() {
    game.physics.collide(player, platforms);
    player.body.velocity.x = 300;

    if(cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -200;
    }
    
    if (Math.round(player.x + player.width) >= game.world.width)
    {
        player.x = 0;
    }
}
