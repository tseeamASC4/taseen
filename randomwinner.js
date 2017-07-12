// declaring an array with two cool nick arrays to increase his arrays
var people = ["chris", "will", "edgar", "faisal", "cool nick"];
// function to get random number
function getWinner(index) {
    var randomIndex= Math.random() * index
    var result= Math.floor(randomIndex)
    // returns a random number
    return result;
}
// prints out the result of when the function is called
console.log(people[getWinner(people.length)])


