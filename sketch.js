var backgroundImg, canvas;
var tom, tom_sitting, tom_moving, tom_teased;
var jerry, jerry_teasing, jerry_standing, jerry_chesse;

function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png");

    tom_sitting = loadImage("images/cat1.png");
    tom_moving = loadAnimation("images/cat2.png", "images/cat3.png");
    tom_teased = loadImage("images/cat4.png");

    jerry_teasing = loadAnimation("images/mouse2.png", "images/mouse3.png");
    jerry_chesse = loadImage("images/mouse1.png");
    jerry_standing = loadAnimation("images/mouse4.png");
}

function setup(){

   canvas = createCanvas(1000,800);

   tom = createSprite(870,600);
   tom.addImage(tom_sitting);
   tom.scale = 0.2;

   jerry = createSprite(200,600);
   jerry.addImage(jerry_chesse);
   jerry.scale = 0.2;
}

function draw() {

    background(backgroundImg);
    
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width) / 2){
        
        tom.velocityX = 0;

        tom.addAnimation("teased", tom_teased);
        tom.scale = 0.2;
        tom.x = 300;

        tom.changeAnimation("teased");

        jerry.addAnimation("standing", jerry_standing);
        jerry.scale = 0.2;
        jerry.changeAnimation("standing");
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
     
    tom.velocityX = -5;
    tom.addAnimation("moving", tom_moving);
    tom.changeAnimation("moving");
    
    jerry.addAnimation("teasing", jerry_teasing);
    //jerry.frameDelay = 25;
    jerry.changeAnimation("teasing");



      
  }

}
