var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var listTemplate = require('../templates/listTemplate.hbs')

var heroes = [
  new models.PlayerChar(
    {name: 'Sora', health: 1200});
  new models.PlayerChar(
    {name: 'Roxas', health: 1150});
  new models.PlayerChar(
    {name: 'Riku', health: 1100});
  new models.PlayerChar(
    {name: 'Kairi', health: 950});
];

var enemyBank1 = [
  new models.EnemyChar(
    {name: 'HL Alpha', health: 500, strength-min: 40, strength-max:105});
  new models.EnemyChar(
    {name: 'HL Beta', health: 500, strength-min: 45, strength-max:110});
  new models.EnemyChar(
    {name: 'HL Gamma', health: 500, strength-min: 50, strength-max:115});
  new models.EnemyChar(
    {name: 'HL Delta', health: 500, strength-min: 55, strength-max:120});
];

var enemyBank2 = [
  new models.EnemyChar(
    {name: 'HL Epsilon', health: 750, strength-min: 75, strength-max:160});
  new models.EnemyChar(
    {name: 'HL Zeta', health: 750, strength-min: 80, strength-max:165});
  new models.EnemyChar(
    {name: 'HL Eta', health: 750, strength-min: 85, strength-max:170});
  new models.EnemyChar(
    {name: 'HL Theta', health: 750, strength-min: 90, strength-max:175});
];

var enemyBank3 = [
  new models.EnemyChar(
    {name: 'HL Iota', health: 1000, strength-min: 105, strength-max:185});
  new models.EnemyChar(
    {name: 'HL Kappa', health: 1000, strength-min: 110, strength-max:190});
  new models.EnemyChar(
    {name: 'HL Lambda', health: 1000, strength-min: 115, strength-max:195});
  new models.EnemyChar(
    {name: 'HL Mu', health: 1000, strength-min: 120, strength-max:200});
];

var enemyBank4 = [
  new models.EnemyChar(
    {name: 'HL Omega', health: 1850, strength-min: 170, strength-max:255});
];

var player = undefined; //selected by user at start of game
var firstEnemy = undefined; //random opponent from enemyBank1
var secondEnemy = undefined; //random opponent from enemyBank2
var thirdEnemy = undefined; //random opponent from enemyBank3
var finalBoss = enemyBank4[0];

var healthPotionCount = 3;
var shieldCount = 3;

var newGameBtn = $('.btn-default');
var healthBar;

function launchGame(){
  //display instructions -> HUD & gameplay
}

newGameBtn.addEventListener('click', launchGame());

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

healthBar.style.width = (playerHealth / 10) + '%'

$('.attack-btn').on('click', function(event){
  event.preventDefault();
  models.PlayerChar.prototype.attack();
});
