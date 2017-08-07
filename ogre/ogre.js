var HP = 100;
var gold = 0;
varogresDefeated = 0; 
var ogres= true;
function displayStats() {
    $('#stats').text('it works!'); 
}

function attack(){
    alert("yu just killed an ogre boi");
}
function setup(){
$('body').append("<h1><center>Welcome to OGRE FIGHT</center></h1>");
$('body').append("<div><h3>Stats</h3><p id = 'stats'></p></div>");
$('body').append
('<button onclick ="displayStats()">Attack</button>');
$('body').append('<div id = "ogre"></div>')

}


$(document).ready(setup);
