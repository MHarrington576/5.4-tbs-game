var $ = require('jquery');

function launchGame(){
  //display message
()}

$('.attack-btn').on('click', function(event){
  event.preventDefault();
  PlayerCharacter.prototype.attack();
});
