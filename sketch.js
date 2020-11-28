var player,playerImage;

function preload(){
  playerImage=loadAnimation("image1.png","image2.png","image3.png","image4.png","image5.png","image6.png")
}

function setup() {
  createCanvas(400, 400);
  player=createSprite(200,250,20,20)
  player.addAnimation("running",playerImage)
  //player.scale=0.5
}

function draw() {
  background(220);
  drawSprites();
}