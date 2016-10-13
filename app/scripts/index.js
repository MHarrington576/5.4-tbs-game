var $ = require('jquery');
var models = require('models.js');

function launchGame(){
  //display message
()}

$('.attack-btn').on('click', function(event){
  event.preventDefault();
  models.PlayerCharacter.prototype.attack();
});
