
var groundImage,path
var boy,runner_running,runner_collieded;





  //pre-load images
function preload(){
runner_running = loadAnimation("runner-1.png","runner-2.png");
runner_collieded = loadAnimation("bomb.png","coin.png","energyDrink.png");
groundImage = loadImage("path.png");







}


function setup(){
  createCanvas(400,400);
  //create sprites here
//Moving background
path=createSprite(200,200);
path.addImage("ground",groundImage);
path.velocityY =4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.addAnimation("running",runner_running);
boy.scale =0.08
}





function draw() {
  background(0);
  boy.x =World.mouseX;
//code to reset the background
if(path.y > 400){
  path.y = height/2;
}
drawSprites()
}
