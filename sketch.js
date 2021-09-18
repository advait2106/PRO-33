var snow, snow1, snow2, snow3, snow4, snow5 ;

function preload() {
loadImage. snow1.jpg 
thisImage= loadImage("snow1.jpg"); 
loadImage. snow2.jpg
thisImage= loadImage("snow2.jpg");
loadImage. snow3.jpg
thisImage= loadImage("snow3.jpg");
loadImage. snow4.jpg
thisImage=loadImage("snow4.jpg");
loadImage. snow5.jpg
thisImage=loadImage("snow5.jpg");

loadAnimation = snow1
loadAnimation = snow2
loadAnimation = snow3
loadAnimation = snow4
loadAnimation = snow5

thisAnimation = loadAnimation("snow1.jpg")
thisAnimation = loadAnimation("snow2.jpg")
thisAnimation = loadAnimation("snow3.jpg")
thisAnimation = loadAnimation("snow4.jpg")
thisAnimation = loadAnimation("snow5.jpg")

}

)
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}