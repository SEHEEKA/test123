var trex, trex_runner, edges;

function preload(){
  trex_runner = loadAnimation("trex1.png","trex3.png","trex4.png")
}


function setup() {
  createCanvas(600, 200);
  trex = createSprite(50,160,50,50)
  trex.addAnimation("trex running", trex_runner)
  trex.scale = 0.8

  edges = createEdgeSprites()
}

function draw() {
  background(220);

  if (keyDown("space")){
    trex.velocityY = -10
  }

  trex.velocityY = trex.velocityY + 1
  trex.collide(edges[3])

  drawSprites();
}