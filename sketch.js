const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var ball;
var slingshot;
var x,y;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


  


    ball1 = new BallClass(70,60,90,90);
    //slingshot = new SlingShot(ball1.body,{x:80,y:70});


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);


   ball1.display()
   //slingshot.display()

  
    }
    function mouseDragged(){
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
    }
    
    
    function mouseReleased(){
        slingshot.fly();
    }
    
    function keyPressed(){
        if(keyCode === 32){
            slingshot.attach(ball1.body);
}
    }