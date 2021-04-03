var Runner,img
var coin,img1
var bad,img2
var car,img3
var bus,img4

function preload(){
img=loadImage("Runner.png");
img1=loadImage("Coin.png");
img2=loadImage("bad.png");
img3=loadImage("car.png");
img4=loadImage("Bus.png");
}

function setup() {
    createCanvas(1000,800)
//Sprites moving
    bad=createSprite(500,200,10,10);
  bad.addImage(img2);
  bad.scale=2
  bad.velocityX=-1
  
  coin=createSprite(100,150,10,10);
  coin.addImage(img1);
  coin.scale=0.3
  coin.velocityX=1


  Runner=createSprite(100,150,10,10);
  Runner.addImage(img)
  Runner.scale=0.3



  car=createSprite(100,250,10,10);
  car.addImage(img3);
  car.scale=0.1

  bus=createSprite(100,300,10,10);
  bus.addImage(img4);
  bus.scale=0.1



}

function draw() {
 background("red")
 //Background Moving 
if(bad.x<500){
  bad.x=600
}
 
   // Movement of the Runner 

if(keyDown("RIGHT_ARROW")){
  Runner.x=Runner.x+5
}

if(keyDown("LEFT_ARROW")){
  Runner.x=Runner.x-6
}

if(keyDown("UP_ARROW")){
  Runner.y=Runner.y-5
}

if(keyDown("DOWN_ARROW")){
  Runner.y=Runner.y+6
}
if(coin.isTouching(Runner)){
  coin.velocityX==0
}




 

    drawSprites();


}



