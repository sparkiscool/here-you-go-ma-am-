
var wall
var speed
var weight
var bullet
var thickness


function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  speed = random(223,321)
  weight = random(30,52)
  wall = createSprite(1200,200,thickness,height/2)
  bullet = createSprite(50,200,100,50)
  bullet.velocityX = speed
  bullet.shapeColor = "gray"
}

function draw() {
  background("black");  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX = 0
    var deformation = 0.5 * weight * speed *speed/22509
    if(deformation>180){
      bullet.shapeColor = "red"
    }
    if(deformation<180 && deformation > 100){
      bullet.shapeColor = "yellow"
    }
    if(deformation<100){
      bullet.shapeColor = "green"
    }
  }

  drawSprites()
}