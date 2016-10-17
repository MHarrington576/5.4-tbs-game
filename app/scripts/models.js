var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var listTemplate = require('../templates/listTemplate.hbs')

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
  this.name = undefined;
}

function Enemy(config){
  config = config || {};
  $.extend(this, config);
  this.playable = false;
}

function EnemyChar(){
  Enemy.call(this, config);
  this.name = undefined;
  this.strength = undefined; //random 55-110, 90-175, 120-200, 170-250 player hp decrease
}

PlayerChar.prototype = new Player();
EnemyChar.prototype = new Enemy();

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
