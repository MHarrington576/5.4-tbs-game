var $ = require('jquery');

var enemyHealth = EnemyChar.health;
var playerHealth = PlayerChar.health;

function Player(config){
  config = config || {};
  $.extend(this, config);
  this.health = 1000;
  this.playable = true;
}

function PlayerChar(){
  Player.call(this, config);
}

function Enemy(config){
  config = config || {};
  $.extend(this, config);
  this.playable = false;
}

function EnemyChar(){
  Enemy.call(this, config);
  this.health = 500;
}

PlayerChar.prototype = new Player();
Player.prototype.attack = function(enemyHealth){
  //play sound
  var damageDealt = //semi-random number
  enemyHealth = enemyHealth - damageDealt;
  if(enemyHealth > 0){
    function endTurn(){
      window.setTimeout;
    }
  } if else(enemyHealth <= 0) {
    function endMatch(){
      //switch screen to display victory message
    }
  }
};

Enemy.prototype.attack = function(playerHealth){
  //play sound
  var damageReceived = //semi-random number
  playerHealth = playerHealth - damageReceived;
  if(playerHealth > 0){
    //allow player to attack again
  } if else(playerHealth <= 0){
    function endGame(){
      //notify player of his/her utter failure
    }
  }
}

module.exports = {
  Player: Player,
  PlayerChar: PlayerChar,
  Enemy: Enemy,
  EnemyChar: EnemyChar
};
