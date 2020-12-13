
//NameSpacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();   //creates a variable engine that we can control/manipulate
  world = engine.world;

  var ground_options = {isStatic: true};
  //passing options to the object --> changing properties of the object
  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);
  

  var ball_options = {restitution: 0.9};
  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world,ball);

  
  console.log(ball);

}

function draw() {
  background(0);  
  Engine.update(engine);


  rectMode(CENTER);   //instructs the computer to take the x & y as the centre of the shape
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  
}

/*
ellipse - oval shape --> two radii
r1=r2 -==> circle

Physics Engine - Objects follow the laws of physics

Matter.js

1. Engine -- Universe -- All the laws of physics are followed
    Matter.Engine
2. World -- Physical objects are added here
    Matter.World
3. Bodies -- Objects
    Matter.Bodies

  NameSpacing - nicknames to bigger variables/functions  
*/