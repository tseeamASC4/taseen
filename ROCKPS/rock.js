//setting up the choices and asking for name

//const name= prompt("What is your name?")
 var choice;
var compchoice;
var player1 = ["Rock", "Paper","Scissors"];
var computer = ["Rock", "Paper", "Scissors"];
// setting up the computer choosing between the three at random
var randc = Math.floor(Math.random()*3);
var compchoice= computer[randc];
console.log(compchoice);
var points = 0


// setting up player choices(the functions)

function getRock(){
    
   var choice = document.getElementById("chooserock").innerHTML = player1[0];
console.log(choice)
console.log(choice + ","+ compchoice)
$('#choices').append(`<h1> You chose: ${choice} and the computer chose ${compchoice}</h1>`)
if(choice=== compchoice) {
    console.log("It's a tie!")
$('#choices').append(`<h1> OH! It's a tie!</h1>`) }
else if (choice=== "Rock" && compchoice=== "Scissors")
{console.log("You win!")
$('#choices').append(`<h1>Rock beats Scissors! You win!</h1>`)
}
else if(choice=== "Scissors" && compchoice=== "Rock")
{console.log("The computer beat you!")
$('#choices').append(`<h1>Rock beats Scissors! You lose! :( </h1>`)
}
else if (choice=== "Scissors" && compchoice=== "Paper")
{console.log("You win!")
$('#choices').append(`<h1> Scissors beats Paper! You win</h1>`)
}
else if (choice=== "Paper"&& compchoice==="Scissors")
{console.log("The computer beat you!")
$('#choices').append(`<h1> Scissors beats Paper! You lose! :( </h1>`)
}
else if (choice=== "Paper" && compchoice=== "Rock")
{console.log("You win!")
$('#choices').append(`<h1> Paper beats Rock! You win</h1>`)
}
else if (choice=== "Rock" && compchoice=== "Paper")
{console.log("The computer beat you!")
$('#choices').append(`<h1> Paper beats Rock! You lose! :( </h1>`)
}
//
var voteB =  document.getElementById("disable");
voteB.style.display='none';

$('body').append(`<h1>Points: ${points}</h1>`)
}
///////////////////
function getPaper(){
    
 var choice = document.getElementById("choosepaper").innerHTML = player1[1];
console.log(choice)
console.log(choice + ","+ compchoice)
$('#choices').append(`<h1> You chose: ${choice} and the computer chose ${compchoice}</h1>`)
if(choice=== compchoice) {
    console.log("It's a tie!")
$('#choices').append(`<h1> OH! It's a tie!</h1>`) }
else if (choice=== "Rock" && comphoice=== "Scissors")
{console.log("You win!");
$('#choices').append(`<h1>Rock beats Scissors! You win!</h1>`);
points=points + 1;
}
else if(choice=== "Scissors" && compchoice=== "Rock")
{console.log("The computer beat you!")
$('#choices').append(`<h1>Rock beats Scissors! You lose! :( </h1>`)
points=points -1
}
else if (choice=== "Scissors" && compchoice=== "Paper")
{console.log("You win!");
$('#choices').append(`<h1> Scissors beats Paper! You win</h1>`);
points=points + 1;
}
else if (choice=== "Paper"&& compchoice==="Scissors")
{console.log("The computer beat you!")
$('#choices').append(`<h1> Scissors beats Paper! You lose! :( </h1>`)
}
else if (choice=== "Paper" && compchoice=== "Rock")
{console.log("You win!");
$('#choices').append(`<h1> Paper beats Rock! You win</h1>`);
points=points + 1;
}
else if (choice=== "Rock" && compchoice=== "Paper")
{console.log("The computer beat you!")
$('#choices').append(`<h1> Paper beats Rock! You lose! :( </h1>`)

}
var voteB =  document.getElementById("disable");
voteB.style.display='none';

$('body').append(`<h1>Points: ${points}</h1>`)
}

///////////////////
function getScissors(){
    
   var choice = document.getElementById("choosescissors").innerHTML = player1[2];
console.log(choice)
console.log(choice + ","+ compchoice)
$('#choices').append(`<h1> You chose: ${choice} and the computer chose ${compchoice}</h1>`)

if(choice=== compchoice) {
    console.log("It's a tie!")
$('#choices').append(`<h1> OH! It's a tie!</h1>`) }
else if (choice=== "Rock" && comphoice=== "Scissors")
{console.log("You win!")
$('#choices').append(`<h1>Rock beats Scissors! You win!</h1>`)
}
else if(choice=== "Scissors" && compchoice=== "Rock")
{console.log("The computer beat you!")
$('#choices').append(`<h1>Rock beats Scissors! You lose! :( </h1>`)
}
else if (choice=== "Scissors" && compchoice=== "Paper")
{console.log("You win!")
$('#choices').append(`<h1> Scissors beats Paper! You win</h1>`)
}
else if (choice=== "Paper"&& compchoice==="Scissors")
{console.log("The computer beat you!")
$('#choices').append(`<h1> Scissors beats Paper! You lose! :( </h1>`)
}
else if (choice=== "Paper" && compchoice=== "Rock")
{console.log("You win!")
$('#choices').append(`<h1> Paper beats Rock! You win</h1>`)
}
else if (choice=== "Rock" && compchoice=== "Paper")
{console.log("The computer beat you!")
$('#choices').append(`<h1> Paper beats Rock! You lose! :( </h1>`)

}
var voteB =  document.getElementById("disable");
voteB.style.display='none';

$('body').append(`<h1>Points: ${points}</h1>`)
}





