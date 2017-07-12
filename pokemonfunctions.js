var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function randletter()
{
    var result = Math.floor(Math.random() * alphabet.length);
    return result;
}

console.log(alphabet[randletter()]) 



function randWord()
{
    var word = "";
    var wordl = Math.floor(Math.random()*25*Math.random())
    for(var i= wordl; i > 0; i--)
    {word === randletter() + word;}
    return word;
    
}

console.log(randWord())


