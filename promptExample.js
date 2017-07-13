
var prompt = require('prompt-sync')();
function team()
{
    var team = prompt("choose ya team, 3 pokemon only")
    if  team.length ===3
    return team
}

console.log(team())