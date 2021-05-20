const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;

function preload(){
  
}

function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  //create the ground
  

  //create the boggies

  
  //create the rock
 

  //create the chains
  


}

function draw() {
  background(0);  
  Engine.update(myEngine);

  //display the objects
  

}

