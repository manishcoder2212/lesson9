const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;





function setup(){
createCanvas(1200,600)
engine=Engine.create();
world=engine.world
  box1=new Box(600,400); 
  box2=new Box(600,270);
  box3=new Box(800,400);
  box4=new Box (800,270);
  pig3=new Pig(700,225,50,50)
  bird1=new Bird(50,100,50,50)    
  box5=new Box(335,460,100,100)
  box6=new Box(335,410,100,100)
  box7=new Box(235,410,100,100)
 

 // box6=new Ground (200,370 ,500,250)
 //box7=new Ground (250,100,70,100)
  
  pig1=new Pig(700,450,80,50)
  pig2=new Pig(700,340,80,50)
  ground=new Ground(600,500,1200,30)

  log1=new Log (700,370,400);
  log2=new Log (700,250,400);
  log3=new Log(335,400,100);
  


  chain1=new Chain(bird1.body,{x:300, y:100 })

}

function draw(){
  background("lightblue");
  Engine.update(engine)

  text(mouseX+"    "+mouseY,mouseX,mouseY)

box1.display();
box2.display();
log1.display();
box3.display();
box4.display();
pig3.display();
log2.display();
ground.display();
pig1.display();
pig2.display();
bird1.display();
box5.display();
box6.display();
log3.display();
box7.display();




chain1.display();
  
}

function mouseDragged(){
Matter.Body.setPosition(bird1.body,{x:mouseX  , y:mouseY })

}

function mouseReleased(){
chain1.disconectBird();
}