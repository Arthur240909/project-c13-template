var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
rabbit.x=World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
var select_sprites=Math.round(random(1,3));

if (frameCount % 80 == 0){
  if (select_sprites == 1){
createApples();
  } else if (select_sprites == 2) {

    createOrange();
  }else {
    createRed();
  }

}
}

function createOrange() {
  orangeL = createSprite(random(50, 350),40, 10, 10);
  orangeL.addImage(orangeImg);
  orangeL.scale=0.08;
  orangeL.velocityY = 3;
  orangeL.lifetime=150;
}
function createOrange() {
  appleL = createSprite(random(50, 350),40, 10, 10);
  appleL.addImage(appleImg);
  appleL.scale=0.08;
  appleL.velocityY = 3;
  appleL.lifetime=150;
}
function createOrange() {
  redL = createSprite(random(50, 350),40, 10, 10);
  redL.addImage(orangeImg);
  redL.scale=0.08;
  redL.velocityY = 3;
  redL.lifetime=150;
}