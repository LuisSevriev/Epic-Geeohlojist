const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, stone, rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    rubber = new Rubber(900,400,50);
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(700,320,100,100);
    iron = new Iron(800,320,50,50);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    rubber.display();
    stone.display();
    iron.display();
    plane.display();
    hammer.display();
}