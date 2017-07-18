// function setup(){
// createCanvas(windowWidth,windowHeight)
// background('blue');
// var sentences = ["type me","you are doing good", "keep going!","yes","no","maybe"]
// var inp=createInput(sentences);
// inp.input(typethis);




// }

// function typethis(){
//     console.log('you are typing: ',this.value)
// }
// keyTyped()

function mousePressed() {
  console.log(mouseX + "," + mouseY)
}

var y= 165
function setup(){
    createCanvas(windowWidth,windowHeight)
    background('blue')
  var inp= createInput("");
  inp.position(30,300);
  inp.size(550,100);
  fill('pink');
  rect(634,80,400,600);
  textSize(40);
  fill(0, 102, 153);
  text("Sentences",663,120,);
  fill('blue')
  line(664,127.0625,859,127)
  
}

function draw(){

    var words = ["'type me'",
    "'you are doing good'",
     "'keep going!'",
     "'yes'",
     "'no'",
     "'maybe'"]
     noLoop();
    for(i=0;i<6;i++){
        y = y+ 40
         
    textSize(32);
    text(words[i],656,y,1000,1000);
    fill(0, 0, 0);}
    
}

function keyTyped(inp){
    
    if( inp.value ==="type me")
    {   textSize(50)
        fill('pink')
        text('GJ VRO',64,556)}
    else
{textSize(50)
        fill('pink')
        text('U SUCK MATE',64,556)}}




