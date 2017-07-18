var x= 0;
var y=0;


// just called once and done

function setup() {

    createCanvas(windowWidth,windowHeight);
    background('purple');
   
}

//draws run overand over
function draw() {
background('purple');
fill(200,120,30)
ellipse(x,y,x,y)
x= x+100;
y= y+20;


}

if(x>windowWidth)
{
    x=0;
}


