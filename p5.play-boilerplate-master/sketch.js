var FixedRect,MovingRect;

function setup() {
  var canvas = createCanvas(800,400);
  FixedRect = createSprite(400, 200, 50, 50);
  FixedRect.shapeColor = "green";
  MovingRect = createSprite(600, 200, 50, 50);
  MovingRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  MovingRect.x = World.mouseX;
  MovingRect.y = World.mouseY;

  if(FixedRect.x - MovingRect.x < FixedRect.width / 2 + MovingRect.width / 2 && 
    MovingRect.x - FixedRect.x < FixedRect.width / 2 + MovingRect.width / 2 &&
    FixedRect.y - MovingRect.y < FixedRect.height / 2 + MovingRect.height / 2 &&
    MovingRect.y - FixedRect.y < FixedRect.height / 2 + MovingRect.height / 2 ) {
      FixedRect.shapeColor = "red";
      MovingRect.shapeColor = "red";
    }

    else{
      FixedRect.shapeColor = "green";
      MovingRect.shapeColor = "green";
    }

  drawSprites();
}