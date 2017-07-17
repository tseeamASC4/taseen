var x = 0;
function setup() {
  createCanvas(1500, 1500);
  
}
var value = 0;
// function draw() {
//   background(51)
//fill(265);
//   rect(25, 25, 1000, 1000);
// }

//var shapes= [rect(value,value,10,20),ellipse(value,value,100,20)]

function drawRect(){
    rect(value,value,value,value)
}
function drawEllipse(){
ellipse(value,value,value,value)

}

function random(yu){
   yu= Math.floor(Math.random * yu.length)
}

function mouseDragged() {
     for(value=0;value<=256;value++)
    {
      rect(10,value,value,20)
     
        
    }
 
}

// function setup()
// {
// createCanvas(1000,1000)

// }

// function mouseDragged()
// {
// {
    
//     function draw(){}
//     ellipse(10,10,30,30)
// }
// }