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
//  var words = ["'type me'",
//     "'you are doing good'",
//      "'keep going!'",
//      "'yes'",
//      "'no'",
//      "'maybe'"]
var words = ["lol","ayo"]
var inp;
var points=0
function mousePressed() {
  console.log(mouseX + "," + mouseY)
}
var x= 0
var y= 165
function setup(){
    createCanvas(windowWidth,windowHeight)
    background('blue')
    inp= createInput("") 
      
  inp.position(30,300);
  inp.size(550,100);
  fill('pink');
  rect(634,80,400,600);
  textSize(40);
  fill(0, 102, 153);
  text("Words",663,120,);
  fill('blue')
  line(664,127.0625,777,127)
  
}

function draw(){


     noLoop();
    for(i=0;i<6;i++){
        y = y+ 50
         
    textSize(32);
    text(words[i],656,y,1000,1000);
    fill(0, 0, 0);}
    
}

// function keyTyped(){
//     var inp
//    if (keyCode=== ENTER){
//      if (inp.value === words){
//      textSize(50);
//         fill('pink');
//         text('GJ VRO',64,556);}
//         else {textSize(50)
//         fill('pink')
//         text('U SUCK MATE',64,556)}}}
function keyTyped(){
       if(keyCode === ENTER){
           if(inp.value() === words){
               points+=10;
               console.log(points)
               textSize(50);
     fill('pink');
      text(points,64,556);}
               
            
           }
           else{
               points-=10;
                  textSize(50);
     fill('pink');
     noLoop()
      text(points,64,556);}
              
          }
       