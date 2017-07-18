function setup(){
createCanvas(750,750);
background(Math.floor(Math.random() *100));
}
var random = (Math.floor(Math.random()*100))
var random1 = (Math.floor(Math.random()*100))
var random2 = (Math.floor(Math.random()*100))
var random3 = (Math.floor(Math.random()*100))

function RandDrawer(x,y){
    var shapes =[[rect(x,y,random(500),random(500))],[ellipse( x,y,random(500),random(500))]]
fill(random(1000))
shapes[random(shapes)]


   // shapes[Math.floor(Math.random()*2)]}
    // shapes[0]}
// }


function mouseDragged(){
    draw();
    
}

/*
// function setup(){
//     createCanvas(1000, 1000);
//     background(225);
// }

// function mouseDragged(){
//     fill(random(255), random(255), random(255));
//     ellipse(random(1000), random(1000), 50, 50);
//     fill(random(255), random(255), random(255));
//     //line(random(1000), random(1000), random(1000), random(1000));
//     fill(random(255), random(255), random(255));
//     rect(random(1000), random(1000), 50, 50);
//     noStroke() */

