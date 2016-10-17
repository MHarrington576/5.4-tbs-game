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
    {name: 'Sora', image:'images/fighting-sora.png',
    health: 1000, strength_min: 160, strength_max: 300});
  new models.PlayerChar(
    {name: 'Roxas', image:'images/fighting-roxas.png',
    health: 1000, strength_min: 150, strength_max: 310});
  new models.PlayerChar(
    {name: 'Riku', image:'images/fighting-riku.png',
    health: 1000, strength_min: 175, strength_max: 285});
  new models.PlayerChar(
    {name: 'Kairi', image:'images/fighting-kairi.png',
    health: 1000, strength_min: 170, strength_max: 295});
];

var enemyBank1 = [
  new models.EnemyChar(
    {name: 'HL Shadow One', image:'../images/shadow-one.png',
    health: 500, strength_min: 55, strength_max:110});
  new models.EnemyChar(
    {name: 'HL Shadow Two', image:'../images/shadow-two.png',
    health: 500, strength_min: 55, strength_max:110});
  new models.EnemyChar(
    {name: 'HL Shadow Three', image:'../images/shadow-three.png',
    health: 500, strength_min: 55, strength_max:110});
  new models.EnemyChar(
    {name: 'HL Red Nocturne', image:'../images/red-nocturne.png',
    health: 500, strength_min: 55, strength_max:110});
];

var enemyBank2 = [
  new models.EnemyChar(
    {name: 'HL Fire Plant', image:'../images/fire-plant.png',
    health: 750, strength_min: 90, strength_max:175});
  new models.EnemyChar(
    {name: 'HL Blue Rhapsody', image:'../images/blue-rhapsody.png',
    health: 750, strength_min: 90, strength_max:175});
  new models.EnemyChar(
    {name: 'HL Powerwild', image:'../images/powerwild.png',
    health: 750, strength_min: 90, strength_max:175});
  new models.EnemyChar(
    {name: 'HL Soldier', image:'../images/soldier.png',
    health: 750, strength_min: 90, strength_max:175});
];

var enemyBank3 = [
  new models.EnemyChar(
    {name: 'HL Armored Knight', image:'../images/armored-knight.png',
    health: 1000, strength_min: 120, strength_max:200});
  new models.EnemyChar(
    {name: 'HL Gargoyle', image:'../images/gargoyle.png',
    health: 1000, strength_min: 120, strength_max:200});
  new models.EnemyChar(
    {name: 'HL Large Body', image:'../images/large-body.png',
    health: 1000, strength_min: 120, strength_max:200});
  new models.EnemyChar(
    {name: 'HL Armored Guard', image:'../images/armored-guard.png',
    health: 1000, strength_min: 120, strength_max:200});
];

var finalBoss = new models.EnemyChar(
    {name: 'HL Boss', image:'../images/boss.png',
    health: 1850, strength_min: 145, strength_max:255});

var player = undefined; //selected by user at start of game
var firstEnemy = _.sample(enemyBank1);
var secondEnemy = _.sample(enemyBank2);
var thirdEnemy = _.sample(enemyBank3);

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
$('.select-your-character').html(listTemplate(context));

$('.selected-char').on('click', function(event){
  event.preventDefault();
  var selectedCharacter = $(this);
  var characterName = selectedCharacter.data("character-name");

  if(this.id == '#select-sora') {
    player = (_.filter(heroes, {'name': characterName})[0]);
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

var healthPotionCount = 5;
var shieldCount = 5;

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
