var fixedRect, movingRect;

function setup() {
  createCanvas(600,600);
  gameobject1 = createSprite(400, 100, 50, 80);
  gameobject1.shapeColor = "green";
  gameobject1.debug = true;

  fixedRect = createSprite(300, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  gameobject2 = createSprite(200, 100, 100, 30);
  gameobject2.shapeColor = "green";
  gameobject2.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1.velocityX=-2;
  gameobject2.velocityX=+2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(gameobject1,movingRect)) {
    movingRect.shapeColor = "red";
    gameobject1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameobject1.shapeColor = "green";
  }

  bounceOff(gameobject1,gameobject2);

  drawSprites();
}