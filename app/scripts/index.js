var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var listTemplate = require('../templates/listTemplate.hbs');

/////////////////////////////////// Variables //////////////////////////////////
var $titleScreen = $(".title-screen");
var $instructionsScreen = $(".instructions-screen");
var $charSelectScreen = $(".character-select-screen");
var $heartlessBattle1 = $(".level-one");
var $heartlessBattle2 = $(".level-two");
var $heartlessBattle3 = $(".level-three");
var $heartlessBossBattle = $(".final-level");
var $victoryScreen = $(".winner-screen");

var heroes = [
  new models.PlayerChar(
    {name: 'Sora', image:'images/fighting-sora.png', health: 1200});
  new models.PlayerChar(
    {name: 'Roxas', image:'images/fighting-roxas.png', health: 1150});
  new models.PlayerChar(
    {name: 'Riku', image:'images/fighting-riku.png', health: 1100});
  new models.PlayerChar(
    {name: 'Kairi', image:'images/fighting-kairi.png', health: 950});
];

var enemyBank1 = [
  new models.EnemyChar(
    {name: 'HL Shadow One', image:'../images/shadow-one.png',
    health: 500, strength-min: 40, strength-max:105});
  new models.EnemyChar(
    {name: 'HL Shadow Two', image:'../images/shadow-two.png',
    health: 500, strength-min: 45, strength-max:110});
  new models.EnemyChar(
    {name: 'HL Shadow Three', image:'../images/shadow-three.png',
    health: 500, strength-min: 50, strength-max:115});
  new models.EnemyChar(
    {name: 'HL Red Nocturne', image:'../images/red-nocturne.png',
    health: 500, strength-min: 55, strength-max:120});
];

var enemyBank2 = [
  new models.EnemyChar(
    {name: 'HL Fire Plant', image:'../images/fire-plant.png',
    health: 750, strength-min: 75, strength-max:160});
  new models.EnemyChar(
    {name: 'HL Blue Rhapsody', image:'../images/blue-rhapsody.png',
    health: 750, strength-min: 80, strength-max:165});
  new models.EnemyChar(
    {name: 'HL Powerwild', image:'../images/powerwild.png',
    health: 750, strength-min: 85, strength-max:170});
  new models.EnemyChar(
    {name: 'HL Soldier', image:'../images/soldier.png',
    health: 750, strength-min: 90, strength-max:175});
];

var enemyBank3 = [
  new models.EnemyChar(
    {name: 'HL Armored Knight', image:'../images/armored-knight.png',
    health: 1000, strength-min: 105, strength-max:185});
  new models.EnemyChar(
    {name: 'HL Gargoyle', image:'../images/gargoyle.png',
    health: 1000, strength-min: 110, strength-max:190});
  new models.EnemyChar(
    {name: 'HL Large Body', image:'../images/large-body.png',
    health: 1000, strength-min: 115, strength-max:195});
  new models.EnemyChar(
    {name: 'HL Armored Guard', image:'../images/armored-guard.png',
    health: 1000, strength-min: 120, strength-max:200});
];

var finalBoss = new models.EnemyChar(
    {name: 'HL Boss', image:'../images/boss.png',
    health: 1850, strength-min: 170, strength-max:255});

var player = undefined; //selected by user at start of game
var firstEnemy = undefined; //random opponent from enemyBank1
var secondEnemy = undefined; //random opponent from enemyBank2
var thirdEnemy = undefined; //random opponent from enemyBank3

////////////////////////////////// Title Screen ////////////////////////////////
var newGameBtn = $('#start-button');
var instructionsBtn = $('#instructions-button');

function launchGame(){
  $titleScreen.removeClass("active");
  $titleScreen.addClass("dormant");
  $charSelectScreen.removeClass("dormant");
  $charSelectScreen.addClass("active");
}

function displayInstructions(){
  $titleScreen.removeClass("active");
  $titleScreen.addClass("dormant");
  $instructionsScreen.removeClass("dormant");
  $instructionsScreen.addClass("active");
}

newGameBtn.addEventListener('click', launchGame());
instructionsBtn.addEventListener('click', displayInstructions());

///////////////////////////////// Instructions /////////////////////////////////
var exitInstructionsBtn = $("#exit-instructions-button");

function returnToTitleFromInstructions(){
  $instructionsScreen.removeClass("active");
  $instructionsScreen.addClass("dormant");
  $titleScreen.removeClass("dormant");
  $titleScreen.addClass("active");
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
  $charSelectScreen.removeClass("active");
  $charSelectScreen.addClass("dormant");
  $heartlessBattle1.removeClass("dormant");
  $heartlessBattle1.addClass("active");
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
  if($heartlessBattle1.hasClass("active")) {
    $heartlessBattle1.removeClass("active");
    $heartlessBattle1.addClass("dormant");
  } if else($heartlessBattle2.hasClass("active")) {
      $heartlessBattle2.removeClass("active");
      $heartlessBattle2.addClass("dormant");
  } if else($heartlessBattle3.hasClass("active")) {
      $heartlessBattle3.removeClass("active");
      $heartlessBattle3.addClass("dormant");
  } if else($heartlessBossBattle.hasClass("active")) {
      $heartlessBossBattle.removeClass("active");
      $heartlessBossBattle.addClass("dormant");
  }
  $titleScreen.removeClass("dormant");
  $titleScreen.addClass("active");
}

function advanceToBattle2(){
  $heartlessBattle1.removeClass("active");
  $heartlessBattle1.addClass("dormant");
  $heartlessBattle2.removeClass("dormant");
  $heartlessBattle2.addClass("active");
}

function advanceToBattle3(){
  $heartlessBattle2.removeClass("active");
  $heartlessBattle2.addClass("dormant");
  $heartlessBattle3.removeClass("dormant");
  $heartlessBattle3.addClass("active");
}

function advanceToBossBattle(){
  $heartlessBattle3.removeClass("active");
  $heartlessBattle3.addClass("dormant");
  $heartlessBossBattle.removeClass("dormant");
  $heartlessBossBattle.addClass("active");
}

function toVictoryScreen(){
  $heartlessBossBattle.removeClass("active");
  $heartlessBossBattle.addClass("dormant");
  $victoryScreen.removeClass("dormant");
  $victoryScreen.addClass("active");
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
  $victoryScreen.removeClass("active");
  $victoryScreen.addClass("dormant");
  $titleScreen.removeClass("dormant");
  $titleScreen.addClass("active");
}

endGameBtn.on('click', function(event){
  event.preventDefault();
  returnToTitleFromVictory();
});
