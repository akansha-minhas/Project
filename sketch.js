var garden,rabbit;
var gardenImg,rabbitImg;
var apples,leaves;
var appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}


function draw() {
  background(0);
  
  

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}


var select_sprite = Math.round(random(1,2));

if (frameCount % 80 === 0) {
  if (select_sprite == 1) {
    function createApples() {
      apples = createSprite(random(50, 350),40, 10, 10);
      apples.addImage(appleImg);
      apples.scale = 0.8;
      apples.velocityY = -3; 

    }
  } else {
    function createLeaves() {
      leaves = createSprite(random(50, 350,),40, 10, 10);
      leaves.addImage(leafImg);
      apples.scale = 0.8;
      apples.velocityY = -3;
  
   }
  }
}





































