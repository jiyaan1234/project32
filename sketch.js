var score = 0;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  obj1 = new Ground (40,660,100,10);
  obj2 = new Ground (100,660,100,10);

  box1 = new Box();
  box2 = new Box();
  box3 = new Box();
  box4 = new Box();
  box5 = new Box();
  box6 = new Box();
  box7 = new Box();
  box8 = new Box();
  box9= new Box();
  box10 = new Box();
  box11 = new Box();
  box12 = new Box();
  box13 = new Box();
  box14 = new Box();
  box15= new Box();
  box16= new Box();

  polygon = bodies.cirle();
  World.add(world,polygon);

  slingshot = Slingshot(this.polygon,{});

}


function draw() {
  background(255,255,255);  
  drawSprites();
  Text("score :"+score,750,40);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed () {
 if (keyCode === 32) {
   Slingshot.attach(this.polygon)
 }
}