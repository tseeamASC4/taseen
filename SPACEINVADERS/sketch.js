var sbutton;
var canvas;
function setup(){
canvas = createCanvas(800,600);
background('black');
textSize(60);
fill('white');
text("S P A C E - I N V A D E R S",20,73)
sbutton = createButton('START');
sbutton.position(350,450)
sbutton.size(100,50)
}
sbutton.mousePressed() {
    clear()
}






var ship;
var x;
var y;
function setup(){
createCanvas(800,600)
background('black')
}

function draw(){
    ship()

function ship(){
x=400;
y=550;
ship= rect(x,y,90,90);

    }
}

function keyPressed(){
    if(keyCode == LEFT_ARROW)
    {ship.x = x+ 10}
    else if(keyCode== RIGHT_ARROW)
    {ship.x = x-10}}
