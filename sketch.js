var starImg, fairyImg, bgImg;
var fairy , fairyVoice,fairyVoice2;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	 

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.20;
	fairy.velocityX = 0;
	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
	
}


function draw() {
  background(bgImg);
  Engine.update(engine);
  star.x = starBody.position.x;
	star.y = starBody.position.y;
  ellipseMode(RADIUS);
  ellipse (starBody.position.x,starBody.position.y,2,2)
 if (starBody.position.y > 470) {
	 Matter.Body.setStatic (starBody,true)
 }

  keyPressed();
  drawSprites();

}

function keyPressed() {
	//write code here
	if (keyIsDown(LEFT_ARROW)) {
		fairy.x=fairy.x-5;
	}
	
	if (keyIsDown(RIGHT_ARROW)) {
		fairy.x = fairy.x+5;
		
	}
	
	if (keyIsDown (DOWN_ARROW)) {
		Matter.Body.setStatic(starBody,false)
	}
	if (keyIsDown (UP_ARROW)) {
		fairyVoice.play();
	}
}
