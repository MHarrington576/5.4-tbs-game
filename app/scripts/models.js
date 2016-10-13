var $ = require('jquery');

var enemyHealth = Enemy.health;

function PlayerCharacter(config){
  config = config || {};
  $.extend(this, config);
  this.health = 1000;
  this.playable = true;
}

function PlayerChar1(){
  PlayerCharacter.call(this, config);
}

PlayerChar1.prototype = new PlayerCharacter();
PlayerCharacter.prototype.attack = function(Enemy.health){
  //play sound
  var damage = //semi-random number
  enemyHealth = enemyHealth - damage;
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
