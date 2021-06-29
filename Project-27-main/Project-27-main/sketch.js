
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1,rope2,rope3,rope4,rope5,roof,bob1,bob2,bob3,bob4,bob5;



function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
	
	roof=new Roof(500,100,600,20)
	
	//create the bobs here
	bob1=new Bob(100,300,20,20);
	bob2=new Bob(150,300,20,20);
	bob3=new Bob(200,300,20,20);
	bob4=new Bob(250,300,20,20);
	bob5=new Bob(300,300,20,20);
	
	
	
	
	
	rope1=new Rope(bob1.body,roof.body,100)
	rope2=new Rope(bob2.body,roof.body,150)
	rope3=new Rope(bob3.body,roof.body,200)
	rope4=new Rope(bob4.body,roof.body,250)
	rope5=new Rope(bob5.body,roof.body,300)


	

	Engine.run(engine);
  
}


function draw() {
  background("pink");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
	
	
	
	
	
	
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
  
  
 

}



