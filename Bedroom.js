img="";
function preload()
{
    img = loadImage('Bedroom.jpg');
}
function setup()
{
canvas = createCanvas(640, 420);
canvas.center();
}
function draw()
{
image(img, 0, 0, 640, 420); 
fill("#FF0000"); 
text("Bed", 100, 300); 
noFill();
stroke("#FF0000"); 
rect(50, 250, 400, 150 );

fill("#FF0000"); 
text("Lamp", 430, 200); 
noFill();
stroke("#FF0000"); 
rect(410, 170, 150, 150 );

fill("#FF0000"); 
text("Lights", 250, 100); 
noFill();
stroke("#FF0000"); 
rect(150, 0, 150, 150 );
}
