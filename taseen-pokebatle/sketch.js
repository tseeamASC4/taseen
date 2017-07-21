
// creating the foundations
var button;
var button1;
var a;
function mouseClicked(){
    console.log(mouseX+","+mouseY)
button.size(200,100);
  textSize(56);
  fill(0, 102, 153);
  text("HP: "+circle.hp,600.501953125,742.501953125);
  textSize(56);
  fill(0, 102, 153);
  a =text("HP: "+square.hp,660.001953125,110.251953125);
  redraw()
    //ayo();
}
function setup(){
createCanvas(windowWidth,windowHeight);
rect(0,0,1000,800);
rect(0,651.251953125,1000,150);
rect(592.001953125,30.251953125,350,150)
button = createButton('ATTACK');
  button.position(20.001953125,691.251953125);
  //button.position(windowWidth/10 - 100,windowHeight/2 +190);
  button.size(200,100);
  textSize(56);
  fill(0, 102, 153);
  text("HP: "+circle.hp,600.501953125,742.501953125);
  textSize(56);
  fill(0, 102, 153);
  a =text("HP: "+square.hp,660.001953125,110.251953125);
  button1 = createButton('REFRESH');
  button1.position(223.001953125,691.251953125);
  button1.size(200,100);

 

button.mouseClicked(ayo)
    button1.mouseClicked(refr)
}



//creating class pokemon

function Poke(name,hp,attack) {
this.name=name;
this.hp=hp;
this.attack=attack;

}


var square= new Poke("farheen",10,1);
var circle= new Poke("tahmidur",20,2);

function ayo(){
square.hp= square.hp - circle.attack;
console.log(square.hp)
//function draw()

    textSize(56);
  fill(0, 102, 153);
  text("HP: "+circle.hp,600.501953125,742.501953125);
  textSize(56);
  fill(0, 102, 153);
   a =text("HP: "+square.hp,660.001953125,110.251953125);
    clear();
fill('white')
rect(0,0,1000,800);
rect(0,651.251953125,1000,150);
rect(592.001953125,30.251953125,350,150)
if(square.hp <= 0){
    alert("you killed the guy!")}
    
}

function refr(){
    button1 = createButton('REFRESH');
  button1.position(223.001953125,691.251953125);
  button1.size(200,100);
location.reload();
noLoop();
}

