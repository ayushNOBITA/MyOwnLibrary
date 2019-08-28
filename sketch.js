var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(500, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //movingRect.velocityX = -5;
  //fixedRect.velocityX = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
//bounceOff(movingRect,fixedRect);
  if(isTouching(movingRect,fixedRect))
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";

  }
  drawSprites();
}
