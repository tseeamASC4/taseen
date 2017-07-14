var charzard = {
    "HP": 266,
    "level": 32
}


var blastoise = { 
    "HP": 150,
    "level": 55
}


function Pokemon(hp, level)

{


    this.hp =hp;
    this.level=level;
}


var squirtle = new Pokemon(30,10)

console.log(squirtle.hp);
console.log(squirtle.level); 

function Computer(brand, cost, gaming)
{
    this.brand= brand
    this.cost= cost
    this.gaming= gaming
}

var optiplex=new Computer("Dell",400,false)

console.log(optiplex.brand);
console.log(optiplex.cost);
console.log(optiplex.gaming);