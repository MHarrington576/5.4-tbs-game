var $ = require('jquery');
var models = require('./models');
var listTemplate = require('../templates/listTemplate.hbs')

var Sora;
var Roxas;
var Riku;
var Kairi;

var player = undefined;
>>>>>>> Character selection begins

function launchGame(){
  //display message
()}

$('.character-select-photo').on('click', function(event){
  if(this.id == '#select-sora') {
    player = 'Sora';
  } if else(this.id == '#select-roxas') {
    player = 'Roxas';
  } if else(this.id == '#select-riku') {
    player = 'Riku';
  } if else(this.id == '#select-kairi') {
    player = 'Kairi';
  }
  return player;
});

$('.attack-btn').on('click', function(event){
  event.preventDefault();
  models.PlayerCharacter.prototype.attack();
});
