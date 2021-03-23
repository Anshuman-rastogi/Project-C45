var gameState = "start";

var player1, anim1, img1, anim2, anim3, anim4, anim5, anim6, anim7, anim8;

var bgImg;

var rect1, rect2, rect3;

var maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8, maze9, maze10, maze11, maze12, maze13;

var enemy1, enemy2, enemy3, enemy4, enemyimg;

var inj, inj2, inj3, inj4, injImg;

var strtscrn, strtscrnImg;

function preload() {
  anim1 = loadAnimation("../ASSETS/m1.png", "../ASSETS/m2.png", "../ASSETS/m1.png", "../ASSETS/m3.png");
  img1 = loadImage("../ASSETS/m1.png");
  anim2 = loadAnimation("../ASSETS/m1.png", "../ASSETS/m1.png");
  anim3 = loadAnimation("../ASSETS/m1 (2).png", "../ASSETS/m2 (2).png", "../ASSETS/m1 (2).png", "../ASSETS/m3 (2).png");
  anim4 = loadAnimation("../ASSETS/m1 (2).png", "../ASSETS/m4 (2).png");
  anim5 = loadAnimation("../ASSETS/m1 (3).png", "../ASSETS/m2 (3).png", "../ASSETS/m1 (3).png", "../ASSETS/m3 (3).png");
  anim6 = loadAnimation("../ASSETS/m1 (3).png", "../ASSETS/m4 (3).png");
  anim7 = loadAnimation("../ASSETS/m1 (4).png", "../ASSETS/m2 (4).png", "../ASSETS/m1 (4).png", "../ASSETS/m3 (4).png");
  anim8 = loadAnimation("../ASSETS/m1 (4).png", "../ASSETS/m4 (4).png");
  bgImg = loadImage("../ASSETS/bgimg.png");
  enemyimg = loadImage("../ASSETS/corona1.png");
  injImg = loadImage("../ASSETS/vaccine.png");
  strtscrnImg = loadImage("../ASSETS/startscrn.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  inj = createSprite(140, windowHeight - 630);
  inj.addImage(injImg);
  inj.scale = 0.09;

  inj2 = createSprite(140, windowHeight - 650);
  inj2.addImage(injImg);
  inj2.scale = 0.09;

  inj3 = createSprite(50, windowHeight - 630);
  inj3.addImage(injImg);
  inj3.scale = 0.09;

  inj4 = createSprite(50, windowHeight - 650);
  inj4.addImage(injImg);
  inj4.scale = 0.09;

  player1 = createSprite(windowWidth - 1440, windowHeight - 65);
  player1.addImage(img1);

  player1.addAnimation("forward", anim1);
  player1.addAnimation("stop", anim2);
  player1.addAnimation("reverse", anim3);
  player1.addAnimation("stop2", anim4);
  player1.addAnimation("left", anim5);
  player1.addAnimation("stop3", anim6);
  player1.addAnimation("right", anim7);
  player1.addAnimation("stop4", anim8);
  player1.frameDelay = 5;

  rect1 = createSprite(windowWidth - 1301, windowHeight - 110, 10, 230);
  //rect1.visible = false;

  rect2 = createSprite(windowWidth - 1302, windowHeight - 650, 10, 170);
  //rect2.visible = false;

  rect3 = createSprite(windowWidth - 228, windowHeight - 610, 10, 230);
  //rect3.visible = false;

  enemy1 = createSprite(windowWidth - 50, windowHeight - 610);
  enemy1.addImage(enemyimg);
  enemy1.scale = 0.05;

  enemy2 = createSprite(windowWidth - 50, windowHeight - 680);
  enemy2.addImage(enemyimg);
  enemy2.scale = 0.05;

  enemy3 = createSprite(windowWidth - 140, windowHeight - 610);
  enemy3.addImage(enemyimg);
  enemy3.scale = 0.05;

  enemy4 = createSprite(windowWidth - 140, windowHeight - 680);
  enemy4.addImage(enemyimg);
  enemy4.scale = 0.05;

  maze1 = createSprite(510, windowHeight-560, 10, 330);

  maze2 = createSprite(353, windowHeight-100, 230, 10);

  maze3 = createSprite(353, windowHeight-220, 10, 250);

  maze4 = createSprite(600, windowHeight-110, 10, 230);

  maze5 = createSprite(740, windowHeight-190, 10, 380);

  maze6 = createSprite(740, windowHeight-625, 10, 200);
  
  maze7 = createSprite(windowWidth-228, windowHeight-60, 10, 230);

  maze8 = createSprite(windowWidth-380, windowHeight-170, 300, 10);

  // strtscrn = createSprite(windowWidth / 2, windowHeight / 2);
  // strtscrn.addImage(strtscrnImg);
  // strtscrn.scale = 0.8;

}

function draw() {

  
  background(255);

  if (gameState === "start") {

    if (keyDown("s")) {
      //strtscrn.visible = false;
      gameState = "play";
    }
  }

  if (gameState === "play") {

    player1.collide(rect1);
    player1.collide(rect2);
    player1.collide(rect3);

    if (keyWentDown(UP_ARROW)) {
      player1.changeAnimation("forward", anim1);
      player1.velocityY = -5;
    }
    else if (keyWentUp(UP_ARROW)) {
      player1.changeAnimation("stop", anim2);
      player1.velocityY = 0;
    }

    if (keyWentDown(DOWN_ARROW)) {
      player1.changeAnimation("reverse", anim3);
      player1.velocityY = 5;
    }
    else if (keyWentUp(DOWN_ARROW)) {
      player1.changeAnimation("stop2", anim4);
      player1.velocityY = 0;
    }

    if (keyWentDown(LEFT_ARROW)) {
      player1.changeAnimation("left", anim5);
      player1.velocityX = -5;
    }
    else if (keyWentUp(LEFT_ARROW)) {
      player1.changeAnimation("stop3", anim6);
      player1.velocityX = 0;
    }

    if (keyWentDown(RIGHT_ARROW)) {
      player1.changeAnimation("right", anim7);
      player1.velocityX = 5;
    }
    else if (keyWentUp(RIGHT_ARROW)) {
      player1.changeAnimation("stop4", anim8);
      player1.velocityX = 0;
    }
  }


  drawSprites();
  text(mouseX + "," + mouseY, windowWidth/2, 100);
}