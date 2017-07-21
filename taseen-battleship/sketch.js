
// function setup(){
    
//   createCanvas(windowWidth,windowHeight);
  

//     var grid = [
//     [rect(100,100,50,50),
//     rect(100,150,50,50),
//     rect(100,200,50,50),
//     rect(100,250,50,50),],
//     // ^ column 1 
//     [rect(150,100,50,50),
//     rect(150,150,50,50),
//     rect(150,200,50,50),
//     rect(150,250,50,50),],
//     // ^ column 2
//       [rect(200,100,50,50),
//     rect(200,150,50,50),
//     rect(200,200,50,50),
//     rect(200,250,50,50),],
//     //^ column 3
//     [rect(250,100,50,50),
//     rect(250,150,50,50),
//     rect(250,200,50,50),
//     rect(250,250,50,50),]] ;

  
     
    
//     var rand = Math.floor(Math.random()*4)
// var battleshipplacement = grid[rand][rand]
// console.log( battleshipplacement)



// function mouseClicked() {
//     var varchoice= (mouseX+"," +mouseY)
//     return varchoice}
    
// grid.mouseClicked=(mouseX,mouseY)
// console.log(grid.mouseClicked)
//     if  ( grid.mouseClicked === battleshipplacement)
//     {
// alert("You sunk the ship!")
//     }
//     else
//     {  alert("Try again!")}

// }

var x=100
var y=100
function setup(){
  createCanvas(windowWidth,windowHeight);
   for(x=100;x<=200;x=x+50)
  {

    rect(x,y,50,50);
    if(x== 200){
   for(y=100;y<=200;y=y+50){
   rect(x,y,50,50)

    
  
}}}}
