const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;

var myEngine, myWorld;

var tower, towerImg, ground, cannon;
var backgroundImg;


function preload()
{
  towerImg = loadImage("assets/tower.png");
  backgroundImg = loadImage('assets/background.gif');

    
}

function setup(){
    createCanvas(1200,600);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    tower = new Tower(150, 380, 190, 330);

    ground = new Ground(600, height-1, width*2,1);
    angle = -PI/4
    cannon = new Cannon(185, 140, 90, 56,angle);
    
}

function draw(){
    background(backgroundImg);
    Engine.update(myEngine);

    tower.display();
    ground.display();
    cannon.display();
   
}
