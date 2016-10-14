var $ = require('jquery');
var _ = require('underscore');
var models = require('models.js');
var listTemplate = require('../templates/listTemplate.hbs');

function launchGame(){
  //display message
()}

$('.attack-btn').on('click', function(event){
  event.preventDefault();
  models.PlayerCharacter.prototype.attack();
});
