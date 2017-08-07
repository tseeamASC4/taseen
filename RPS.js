var player1 = ["Rock", "Paper","Scissors"]
var player2 = ["Rock", "Paper", "Scissors"]


// SPACE


var rand2 = Math.floor(Math.random()*3)
var rand1 =Math.floor(Math.random()*3) 
var p1Choice = player1[rand1];
var p2Choice = player2[rand2];
console.log(p1Choice + ","+ p2Choice)
if(p1Choice=== p2Choice) {
    console.log("It's a tie!") }
else if (p1Choice=== "Rock" && p2Choice=== "Scissors")
{console.log("player1 wins")}
else if(p1Choice=== "Scissors" && p2Choice=== "Rock")
{console.log("player 2 wins")}
else if (p1Choice=== "Scissors" && p2Choice=== "Paper")
{console.log("player2 wins")}
else if (p1Choice=== "Paper"&& p2Choice==="Scissors")
{console.log("player 2 wins")}
else if (p1Choice=== "Paper" && p2Choice=== "Rock")
{console.log("player1 wins")}
else if (p1Choice=== "Rock" && p2Choice=== "Paper")
{console.log("player 2 wins")}



