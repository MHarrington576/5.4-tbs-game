var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var listTemplate = require('../templates/listTemplate.hbs')

var heroes = [
  new models.PlayerChar({name: 'Sora'});
  new models.PlayerChar({name: 'Roxas'});
  new models.PlayerChar({name: 'Riku'});
  new models.PlayerChar({name: 'Kairi'});
];

var enemiesRound1 = [
  new models.EnemyCharBank1({name: 'HL Alpha'});
  new models.EnemyCharBank1({name: 'HL Beta'});
  new models.EnemyCharBank1({name: 'HL Gamma'});
  new models.EnemyCharBank1({name: 'HL Delta'});
];

var enemiesRound2 = [
  new models.EnemyCharBank2({name: 'HL Epsilon'});
  new models.EnemyCharBank2({name: 'HL Zeta'});
  new models.EnemyCharBank2({name: 'HL Eta'});
  new models.EnemyCharBank2({name: 'HL Theta'});
];

var enemiesRound3 = [
  new models.EnemyCharBank3({name: 'HL Iota'});
  new models.EnemyCharBank3({name: 'HL Kappa'});
  new models.EnemyCharBank3({name: 'HL Lambda'});
  new models.EnemyCharBank3({name: 'HL Mu'});
];

var enemiesRound4 = [
  new models.Boss({name: 'HL Omega'});
];

var player = undefined; //selected by user at start of game
var firstEnemy = undefined; //random opponent from EnemyCharBank1
var secondEnemy = undefined; //random opponent from EnemyCharBank2
var thirdEnemy = undefined; //random opponent from EnemyCharBank3
var finalBoss = enemiesRound4[0];

var healthPotionCount = 3;
var shieldCount = 3;

function launchGame(){
  //display message
()}

function takeHealthPotion(){
  if(healthPotionCount > 0) {
    healthPotionCount = healthPotionCount - 1;
    player.health = 1000;
  } if else(healthPotionCount <=0) {
      //display message: "You've run out of health potions!"
  }
}

function useShield(){
  if(shieldCount > 0) {
    shieldCount = shieldCount - 1;
    damageReceived = 0;
  } if else(shieldCount <= 0) {
    //display message: "You've run out of shields!"
  }
}

$('.character-select-photo').on('click', function(event){
  if(this.id == '#select-sora') {
    player = (_.filter(heroes, {name: 'Sora'})[0]);
  } if else(this.id == '#select-roxas') {
      player = (_.filter(heroes, {name: 'Roxas'})[1]);
  } if else(this.id == '#select-riku') {
      player = (_.filter(heroes, {name: 'Riku'})[2]);
  } if else(this.id == '#select-kairi') {
      player = (_.filter(heroes, {name: 'Kairi'})[3]);
  }
  return player;
});

$('.attack-btn').on('click', function(event){
  event.preventDefault();
  models.PlayerChar.prototype.attack();
});
