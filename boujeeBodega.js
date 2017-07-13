/* Welcome to FARHEEN BROWNIE's boujee BODEGA 
WE DO NOT SYMPATHIZE WITH THEIFS WATCH YOUR BACK AND KNOW THAT BIG BROTHER IS ALWAYS 
WATCHING HEHEHEHEHH */

var prompt = require('prompt-sync')();

var cat = "CoolCat247";
var money = 1000;
var name = prompt("What's ya name bruv? ");

// var i =0
// while(i < 1000) {
//     console.log(i);
//     i++
// }
while (money>0) 
{
    var item = prompt("what do you want to buy")
    console.log("you purchesed the " + item)
    money = money-100
}