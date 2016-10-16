var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var listTemplate = require('../templates/listTemplate.hbs');


/////////////////////////////////// Variables //////////////////////////////////
var $titleScreen = $(".title-screen");
  $titleScreen.addClass("show");
var $charSelectScreen = $(".character-select-screen");
  $charSelectScreen.addClass("hide");
var $instructionsScreen = $(".instructions-screen");
  $instructionsScreen.addClass("hide");
var $heartlessBattle1 = $(".level-one");
  $heartlessBattle1.addClass("hide");
var $heartlessBattle2 = $(".level-two");
  $heartlessBattle2.addClass("hide");
var $heartlessBattle3 = $(".level-three");
  $heartlessBattle3.addClass("hide");
var $heartlessBossBattle = $(".final-level");
  $heartlessBossBattle.addClass("hide");
var $victoryScreen = $(".winner-screen");
  $victoryScreen.addClass("hide");

var heroes = [
  new models.PlayerChar(
    {name: 'Sora', health: 1000});
  new models.PlayerChar(
    {name: 'Roxas', health: 1000});
  new models.PlayerChar(
    {name: 'Riku', health: 1000});
  new models.PlayerChar(
    {name: 'Kairi', health: 1000});
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

var finalBoss = new models.EnemyChar(
    {name: 'HL Omega', health: 1850, strength-min: 170, strength-max:255});

var player = undefined; //selected by user at start of game
var firstEnemy = undefined; //random opponent from enemyBank1
var secondEnemy = undefined; //random opponent from enemyBank2
var thirdEnemy = undefined; //random opponent from enemyBank3


////////////////////////////////// Title Screen ////////////////////////////////
var newGameBtn = $('#start-button');
var instructionsBtn = $('#instructions-button');

function launchGame(){
  $titleScreen.removeClass("show");
  $titleScreen.addClass("hide");
  $charSelectScreen.removeClass("hide");
  $charSelectScreen.addClass("show");
}

function displayInstructions(){
  $titleScreen.removeClass("show");
  $titleScreen.addClass("hide");
  $instructionsScreen.removeClass("hide");
  $instructionsScreen.addClass("show");
}

newGameBtn.addEventListener('click', launchGame());
instructionsBtn.addEventListener('click', displayInstructions());


///////////////////////////////// Instructions /////////////////////////////////
var exitInstructionsBtn = $("#exit-instructions-button");

function returnToTitleFromInstructions(){
  $instructionsScreen.removeClass("show");
  $instructionsScreen.addClass("hide");
  $titleScreen.removeClass("hide");
  $titleScreen.addClass("show");
}

exitInstructionsBtn.addEventListener('click', returnToTitleFromInstructions());


/////////////////////////////// Character Select ///////////////////////////////
var toBattleBtn = $("#to-battle-button");

$('.character-select-photo').on('click', function(event){
  event.preventDefault();
  if(this.id == '#select-sora') {
    player = (_.filter(heroes)[0]);
  } if else(this.id == '#select-roxas') {
      player = (_.filter(heroes)[1]);
  } if else(this.id == '#select-riku') {
      player = (_.filter(heroes)[2]);
  } if else(this.id == '#select-kairi') {
      player = (_.filter(heroes)[3]);
  }
  return player;
});

function beginBattle(){
  $charSelectScreen.removeClass("show");
  $charSelectScreen.addClass("hide");
  $heartlessBattle1.removeClass("hide");
  $heartlessBattle1.addClass("show");
}

toBattleBtn.on('click', function(event){
  event.preventDefault();
  if(player !== undefined) {
  beginBattle();
  } else {
    alert("Please select a character.");
  }
});


//////////////////////////////////// Battle ////////////////////////////////////
var attackBtn = $(".attack-button");
var healBtn = $(".healing-potion-button");
var shieldBtn = $(".shield-button");

var playerHealthBar = $(".player-health-bar");
var enemyHealthBar = $(".enemy-health-bar");

var healthPotionCount = 3;
var shieldCount = 3;

function takeHealthPotion(){
  if(healthPotionCount > 0) {
    healthPotionCount = healthPotionCount - 1;
    player.health = 1000;
  } if else(healthPotionCount <=0) {
      alert("You've run out of health potions!");
  }
}

function useShield(){
  if(shieldCount > 0) {
    shieldCount = shieldCount - 1;
    damageReceived = 0;
  } if else(shieldCount <= 0) {
      alert("You've run out of shields!");
  }
}

function returnToTitleFromBattle(){
  if($heartlessBattle1.hasClass("show")) {
    $heartlessBattle1.removeClass("show");
    $heartlessBattle1.addClass("hide");
  } if else($heartlessBattle2.hasClass("show")) {
      $heartlessBattle2.removeClass("show");
      $heartlessBattle2.addClass("hide");
  } if else($heartlessBattle3.hasClass("show")) {
      $heartlessBattle3.removeClass("show");
      $heartlessBattle3.addClass("hide");
  } if else($heartlessBossBattle.hasClass("show")) {
      $heartlessBossBattle.removeClass("show");
      $heartlessBossBattle.addClass("hide");
  }
  $titleScreen.removeClass("hide");
  $titleScreen.addClass("show");
}

function advanceToBattle2(){
  $heartlessBattle1.removeClass("show");
  $heartlessBattle1.addClass("hide");
  $heartlessBattle2.removeClass("hide");
  $heartlessBattle2.addClass("show");
}

function advanceToBattle3(){
  $heartlessBattle2.removeClass("show");
  $heartlessBattle2.addClass("hide");
  $heartlessBattle3.removeClass("hide");
  $heartlessBattle3.addClass("show");
}

function advanceToBossBattle(){
  $heartlessBattle3.removeClass("show");
  $heartlessBattle3.addClass("hide");
  $heartlessBossBattle.removeClass("hide");
  $heartlessBossBattle.addClass("show");
}

function toVictoryScreen(){
  $heartlessBossBattle.removeClass("show");
  $heartlessBossBattle.addClass("hide");
  $victoryScreen.removeClass("hide");
  $victoryScreen.addClass("show");
}

attackBtn.on('click', function(event){
  event.preventDefault();
  models.PlayerChar.prototype.attack();
});

healBtn.on('click', function(event){
  event.preventDefault();
  takeHealthPotion();
});

shieldBtn.on('click', function(event){
  event.preventDefault();
  useShield();
});

playerHealthBar.style.width = (player.health / 10) + '%';
enemyHealthBar.style.width = (enemy.health / 10) + '%';

if(player.health <= 0){
  alert("Game over! You failed to kill all the enemies.");
  returnToTitleFromBattle();
}

if(firstEnemy.health <= 0){
  alert("Level 1 complete! Press OK to continue on to Level 2.")
  advanceToBattle2();
}

if(secondEnemy.health <= 0){
  alert("Level 2 complete! Press OK to continue on to Level 3.")
  advanceToBattle3();
}

if(thirdEnemy.health <= 0){
  alert("Level 3 complete! Press OK to continue on to the final battle!")
  advanceToBossBattle();
}

if(finalBoss.health <= 0){
  alert("Congratulations! You did it!")
  toVictoryScreen();
}


/////////////////////////////////// Victory ////////////////////////////////////
var endGameBtn = $("#end-game-btn");

function returnToTitleFromVictory(){
  $victoryScreen.removeClass("show");
  $victoryScreen.addClass("hide");
  $titleScreen.removeClass("hide");
  $titleScreen.addClass("show");
}

endGameBtn.on('click', function(event){
  event.preventDefault();
  returnToTitleFromVictory();
});
