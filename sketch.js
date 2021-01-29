var canvas;
var music;
var ball;
var surface1,surface2,surface3,surface4;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     surface1 = createSprite(100,590,150,20);
     surface1.shapeColor = "red";
     surface2 = createSprite(300,590,150,20);
     surface2.shapeColor = "blue";
     surface3 = createSprite(500,590,150,20);
     surface3.shapeColor = "green";
     surface4 = createSprite(700,590,150,20);
     surface4.shapeColor = "yellow";

     edges = createEdgeSprites();


    //create box sprite and give velocity
     ball = createSprite(400,300,30,30);
     ball.shapeColor = "white";
     ball.velocityY = 2;
     ball.velocityX = 5;
     
}

function draw() {
    background("pink");
    //create edgeSprite
    ball.bounceOff(edges); 
  
    
   


    //add condition to check if box touching surface and make it box
        if(ball.isTouching(surface1)){
        ball.shapeColor = "red";
        ball.bounceOff(surface1);
        music.play();
        }
        if(ball.isTouching(surface2)){
            ball.shapeColor = "blue";
            ball.velocityY = 0;
            ball.velocityX = 0;
            ball.bounceOff(surface2);
            music.stop();
        }
        if(ball.isTouching(surface3)){
            ball.shapeColor = "green";
            ball.bounceOff(surface3);
            music.play();
        }
        if(ball.isTouching(surface4)){
            ball.shapeColor = "yellow";
            ball.bounceOff(surface4);
            music.stop();
        }
    drawSprites();
}
