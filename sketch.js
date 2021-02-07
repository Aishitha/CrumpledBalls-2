
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var paperImg;
var dustbinImg;

function preload(){
  dustbinImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,680,800,20);
paper=new Paper(200,20,80);
dustbin=new Dustbin(600,630,10,100);
dustbin2=new Dustbin(400,630,10,100);
dustbin3=new Dustbin(500,680,200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background("lightblue");


  ground.display();
  paper.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
 paper.display();
 dustbin.display();

 image(dustbinImg,380,500,240,200 )
}

function keyPressed(){
  if (keyCode===32){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-190});
  }
}

