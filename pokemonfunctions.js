var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function randletter()
{
    var result = Math.floor(Math.random() * alphabet.length);
    return (alphabet[result]);
}

console.log(randletter()) 



function randWord()
{
    var word = "";
    var wordl = Math.floor(Math.random()*25)
    for(var i = wordl; i > 0; i--)
    word = randletter() + word;
    return word;
    
}

console.log(randWord())



function randSentence()
{
    var sentence = "";
    var sentencel = Math.floor(Math.random()* 30)
    for(var i=sentencel; i>0; i--)
    sentence= randWord() +  + sentence + ' ' + sentence;
    sentence+='.';
    return sentence.charAt(0).toUpperCase() + sentence.slice(1)
} 

console.log(randSentence())


var firstPoke= ["Mudkip", 10, 50]
var secondPoke= ["Torchic", 13, 45 ]
var x = firstPoke
var y = secondPoke
function pokeAttack(x,y) 
{
var x = firstPoke
var y = secondPoke

if (firstPoke ==x);
{
secondPoke[2] = secondPoke[2]- firstPoke[1]
}
return secondPoke
}
console.log(pokeAttack(x,y))


