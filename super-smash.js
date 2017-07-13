var prompt = require('prompt-sync')();

var mashArray = ["Mountain", "Times Square", "River", "JFK airport"]
var firstQuestion = [1, 2]
var secondQuestion = ["Tahmidur", "Farheen"]

function choices()
{
   var strike =prompt("how many times will you strike, 1 or 2?");
   var fighterChoice= prompt("Who will you choose, Tahmidur or Farheen");
   return [strike, fighterChoice]
   
}
console.log(choices())

function prtchoices(){
var firstQuestion
var secondQuestion
var mashArray
console.log( firstQuestion)
console.log(secondQuestion)
console.log(mashArray)
console.log("You fought" + " " + secondQuestion[Math.floor(Math.random*2)] +" in the"+" " +mashArray[Math.floor(Math.random*5)]+ " and hit them" +" " +firstQuestion[Math.floor(Math.random*2)]+ " times. Oh! too bad Mewtwo wins!" )

}
console.log(prtchoices())



// UNFINISHED
