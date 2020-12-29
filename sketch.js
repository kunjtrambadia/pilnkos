var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

    var particles = [];
    var plinkos = [];
    var divisions = [];
    var divisionsHeight = [];
    var score = [];

function setup() {
  createCanvas(700,700);
  engine = Engine.create();
  World = engine.World;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k=k + 80){
    divisions.push(new divisions(k,height-divisionsHeight/2, 10, ))
  }


for (var j = 75;j<width;j=j +50){
  plinkos.push(new Plinkos(j,75))
}

for (var j = 50;j<width;j=j +50){
  plinkos.push(new Plinkos(j,175))
}

for (var j = 75;j<width;j=j +50){
  plinkos.push(new Plinkos(j,275))
}

for (var j = 50;j<width;j=j +50){
  plinkos.push(new Plinkos(j,375))
}


}
function draw() {
  background("black");  
  textSize(20)
  Engine.update(engine);
  ground.display();

  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display();

  }
    
if (frameCount%60 === 0){
  particles.push(new particles(random(100,700),10,10));
}


  for (var j = 0; j < particles.length; j++){
    particles[j].display();

  }

  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();

  }
  drawSprites();
}