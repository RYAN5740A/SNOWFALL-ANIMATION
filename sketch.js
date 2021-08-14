const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boy,boy_Img;

var snow=[];


function preload(){
  bg=loadImage("snow2.jpg")
  boyWalking=loadAnimation("boyWalking1.png","boyWalking2.png","boyWalking3.png","boyWalking4.png","boyWalking5.png","boyWalking6.png","boyWalking7.png","boyWalking8.png",)
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  boy=createSprite(750, 400, 20, 20);
  boy.addAnimation("boy",boyWalking);
  boy.scale=0.5;
  wall1=createSprite(800,200,10,400)
  wall1.visible=false;
  wall2=createSprite(0,200,10,400)
  wall2.visible=false;
  wall3=createSprite(400,400,800,10)
  wall3.visible=false;
  wall4=createSprite(400,0,800,10)
  wall4.visible=false;
  snow1=new Snow(450,800,50,50)
  snow2=new Snow(350,200,50,50)
  snow3=new Snow(320,300,50,50)
  snow4=new Snow(390,700,50,50)
  snow5=new Snow(360,0,50,50)
  snow6=new Snow(200,200,50,50)
  snow7=new Snow(100,2000,50,50)
  snow8=new Snow(30,3000,700,50)
  snow9= new Snow(300,100,50,50)
  snow10= new Snow(100,1000,50,50)

  


  
}

function draw() {
  
  background(bg);  

  
  if(keyDown("space")&& boy.y >= 100) {
    boy.velocityY = -12;
}
if(keyCode===39){
 boy.velocityX = 2;
  boy.velocityY = 0;
}
if(keyCode===37){
 boy.velocityX = -2;
    boy.velocityY = 0;
}
 boy.velocityY = boy.velocityY + 0.8
boy.collide(wall1);
boy.collide(wall2);
boy.collide(wall3);
boy.collide(wall4);


  snow1.display()
  snow2.display()
  snow3.display()
  snow4.display()
  snow5.display()
  snow6.display()
  snow7.display()
  snow8.display()
  snow9.display()
  snow10.display()




  drawSprites();
}