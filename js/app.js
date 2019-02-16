// Enemies our player must avoid

//https://www.youtube.com/watch?time_continue=1&amp=&v=oLSu3zc2jSA // watch Later

var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    this.x += this.speed * dt; // the moviment for enemies
    console.log(this.x);
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x > 510){
        this.x = -50;
        this.speed = 100 + Math.floor(Math.random() * 222); // ramdomize the enemies
    }
    if(player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 60 && 60 + player.y > this.y){ //check the collisions
        player.x = 202; // reset the position of player to the beginning
        player.y = 405;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x,y) {
    // Variables applied to each of our instances go here,
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//movement for Player with keyboard
Player.prototype.handleInput = function(keyPress){ //I can check if the sprite arrive in the limit of canvas
    if(keyPress == 'left' && this.x > 0){
        this.x -=102;
    }
    if(keyPress == 'right' && this.x < 405){
        this.x +=102;
    }
    if(keyPress == 'up' && this.y > 0){
        this.y -=83;
    }
    if(keyPress == 'down' && this.y < 405){
        this.y +=83;
    }
    if(this.y < 0){ //if I arrive in water so... I have to start the game again
        setTimeout(function(){
            player.x = 202;
            player.y = 405;
        },600);
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const allEnemies = [];
var enemyLoc = [63,147,230];//initial position for enemies

enemyLoc.forEach(function(yLoc){ 
    enemy = new Enemy(0,yLoc,200);
    allEnemies.push(enemy); // push all enemies in array
})
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

const player = new Player(202,405);//object player