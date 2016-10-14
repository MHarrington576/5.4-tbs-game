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

function EnemyCharBank1(){
  Enemy.call(this, config);
  this.name = undefined;
  this.health = 500;
  this.strength = undefined; //random number from 55 -> 110 = hp decrease
}

function EnemyCharBank2(){
  Enemy.call(this, config);
  this.name = undefined;
  this.health = 750;
  this.strength = undefined; //random number from 90 -> 175 = hp decrease
}

function EnemyCharBank3(){
  Enemy.call(this, config);
  this.name = undefined;
  this.health = 1000;
  this.strength = undefined; //random number from 120 -> 200 = hp decrease
}

function Boss(){
  Enemy.call(this, config);
  this.name = undefined;
  this.health = 2250;
  this.strength = undefined; //random number from 170 -> 250 = hp decrease
}

PlayerChar.prototype = new Player();
EnemyCharBank1.prototype = new Enemy();
EnemyCharBank2.prototype = new Enemy();
EnemyCharBank3.prototype = new Enemy();
Boss.prototype = new Enemy();

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
  EnemyCharBank1: EnemyCharBank1,
  EnemyCharBank2: EnemyCharBank2,
  EnemyCharBank3: EnemyCharBank3,
  Boss: Boss
};
