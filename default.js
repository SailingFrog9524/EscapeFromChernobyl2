//bugs:
//pause button slightly delays the next projectile shot by the enemies
//some transitions in the lose screen are very messed up
//matrix level can be really messed up sometimes
//if you dont reload the page it can bug out

//random stuff: screen is 400,480
//https://codehs.com/uploads/d21e0718037b54fdae969a97e9dd2c57

//This game will be a figure of lego indiana yoda escaping Chernobyl with a few different levels. This is a sequel to last years game, but instead of a story game it has movement

var level = 0;
var SPEED = -1;
var loseTimer = -170;
var winTimer = 0;
var loseCounter = 0;
var enemyKillCounter = 0;
var projectileCounter = 0;
var levelFinish = 0;
var pauseCounter = 0;
var oceanManCounter = 0;
var winCounter = 0;
var creditCounter = 0;
var shrekCounter = 0;
var chungusLife = 10;
var chungusDeathCounter = 0;

var levelOneDelay = 6000;
var levelTwoDelay = 5000;
var levelThreeDelay = 3000;
var levelFourDelay = 4000;
var levelFiveDelay = 99999999;
var levelSixDelay = 5000;
var levelSevenDelay = 1500;
var levelEightDelay = 1000;

var creditText2;
var creditText;
var winText;
var chungus;
var funeral;
var tutorial;
var pause;
var pauseText;
var pauseText2;
var pauseText3;
var blankArray;
var obama;
var speechBubble;
var enemyProjectile;
var enemy;
var projectile;
var startSound;
var exit;
var fakeExit;
var yoda;
var startButton;
var background;
var coffinDance;

var enemyProjectileArray = [];
var projectileArray = [];
var enemyArray = [];


function start(){
    var rectangle = new Rectangle(getWidth(),getHeight());
    rectangle.setPosition(0,0);
    add(rectangle);
    
    startScreen();
    
    keyDownMethod(controls);
    
    yoda = new WebImage("https://codehs.com/uploads/618ea6a061380467883ea3035af1366e");
    yoda.setSize(50, 50);
    yoda.setPosition(0,0);
    
    blankArray = new Circle(1);
    blankArray.setPosition(getWidth()*5,getHeight()*5);
    
    setTimer(physics,1);
    setTimer(enemyProjectilePhysics,100);
    
}
//start screen

function startScreen(){
    
    mouseClickMethod(clickToStart);
    
    drawImage(0,0,getWidth(),getHeight(),"https://i.pinimg.com/originals/56/6f/1d/566f1d75ccebeee72294308fe01666ec.jpg");
    drawText(10,50,Color.black,"Escape From Chernobyl:","30pt Impact");
    drawText(105,95,Color.black,"The Sequel","30pt Impact");
    
    startButton = new WebImage("https://codehs.com/uploads/e16a0d9c67b66afa85b9da385eac4ed1");
    startButton.setSize(150, 75);
    startButton.setPosition(120, getHeight()/2);
    add(startButton);
    drawText(155,290,Color.black,"Start","30pt Impact");
}
function clickToStart(e){
    if(e.getX() > startButton.getX() && e.getX() < startButton.getX()+startButton.getWidth() && e.getY() > startButton.getY() && e.getY() < startButton.getY()+startButton.getHeight()){
    startButton.setPosition(getWidth()*getWidth(),getHeight()*getHeight());
    level = 1;
    tutorial = new Audio("https://codehs.com/uploads/7e9ccdf88f86cea341bcc4410b58557d");
    tutorial.play();
    levelOne();
    
    return;
    }
}
//code for the levels
function levelOne(){
    //background
    background = new WebImage("https://codehs.com/uploads/b950f2c2931adce22e0a3663fa8ae232");
    background.setPosition(0,0);
    background.setSize(getWidth(),getHeight());
    background.setColor(Color.white);
    add(background);
    
    //platforms
    drawRectangle(0,420,100,5,Color.black);
    drawRectangle(150,420,100,5,Color.black);
    drawRectangle(300,420,100,5,Color.black);
    
    drawRectangle(66.66,320,100,5,Color.black);
    drawRectangle(232,320,100,5,Color.black);
    
    drawRectangle(0,220,100,5,Color.black);
    drawRectangle(150,220,100,5,Color.black);
    drawRectangle(300,220,100,5,Color.black);
    
    drawRectangle(66.66,120,100,5,Color.black);
    drawRectangle(232,120,100,5,Color.black);
    
    //bottom
    drawRectangle(0,getHeight()-5,getWidth(),5,Color.black);
    
    //tutorial
    speechBubble = new WebImage("https://codehs.com/uploads/e03a76a76216a16516098f25b4871fd3");
    speechBubble.setPosition(50,-18);
    speechBubble.setSize(120,120);
    add(speechBubble);
    
    obama = new WebImage("https://codehs.com/uploads/7f6e624ee9afb57d9a397ae86ca768ce");
    obama.setPosition(0,30);
    obama.setSize(50,50);
    add(obama);
    
    drawText(60,15,Color.black,"I am Obama. I will be guiding you.","5pt Comic Sans");
    drawText(60,20,Color.black,"You, lego yoda, work at Chernobyl.","5pt Comic Sans");
    drawText(60,25,Color.black,"Shrek is trying to blow up the reactor","5pt Comic Sans");
    drawText(60,30,Color.black,"to create a swamp. You must stop him.","5pt Comic Sans");
    drawText(60,35,Color.black,"First, kill this dumb baby and go","5pt Comic Sans");
    drawText(60,40,Color.black,"through the door. Use WASD to move,","5pt Comic Sans");
    drawText(60,45,Color.black,"Q to shoot and SPACE to pause. Good","5pt Comic Sans");
    drawText(60,50,Color.black,"luck, comrade.","5pt Comic Sans");
    //enemies
    for(var i = 0; i < enemyArray.length; i++){
    enemyArray.remove(i);
    }
    for(var i = 0; i < 3; i++){
    enemy = new WebImage("https://codehs.com/uploads/1f36a6e05378270e301c4600227edfaa");
    enemy.setSize(60,60);
    if(i == 0){
    enemy.setPosition(300+Randomizer.nextInt(1,40),360-i*100);
    enemyArray[0] = enemy;
    }
    if(i == 1){
    enemy.setPosition(232+Randomizer.nextInt(1,40),360-i*100);
    enemyArray[1] = enemy;
    }
    if(i == 2){
    enemy.setPosition(300+Randomizer.nextInt(1,10),360-i*100);
    enemyArray[2] = enemy;
    }
    add(enemy);
    }
    
    //character
    yoda.setPosition(0, getHeight()-75);
    add(yoda);
    
    //door
    exit = new WebImage("https://codehs.com/uploads/ca66dc6fc02fa2bae8a730d153d81914");
    exit.setPosition(350,160);
    exit.setSize(70,60);
    add(exit);
    
    //timers
    setTimer(enemyPhysics,levelOneDelay);
    setTimer(nextLevelOne,1);
}
function nextLevelOne(){
    if(yoda.getX()+yoda.getWidth()/2 > exit.getX() && yoda.getX()+yoda.getWidth()/2 < exit.getX()+exit.getWidth() && yoda.getY()+yoda.getHeight()/2 > exit.getY() && yoda.getY()+yoda.getHeight()/2 < exit.getY()+exit.getHeight() && levelFinish == 3){
    level = 2;
    levelFinish = 0;
    tutorial.pause();
    tutorial = new Audio("https://codehs.com/uploads/a73a57446946c3878c916fd33718ed49");
    tutorial.play();
    levelTwo();
    return;
    }
}
function levelTwo(){
    //background
    background = new WebImage("https://codehs.com/uploads/8ac5d837de4cfd0fcf36ebe266070489");
    background.setPosition(0,0);
    background.setSize(getWidth(),getHeight());
    background.setColor(Color.white);
    add(background);
    
    //platforms
    drawRectangle(66.66,420,100,5,Color.black);
    drawRectangle(232,420,100,5,Color.black);
    
    drawRectangle(0,320,100,5,Color.black);
    drawRectangle(150,320,100,5,Color.black);
    drawRectangle(300,320,100,5,Color.black);

    drawRectangle(66.66,220,100,5,Color.black);
    drawRectangle(232,220,100,5,Color.black);
    
    drawRectangle(0,120,100,5,Color.black);
    drawRectangle(150,120,100,5,Color.black);
    drawRectangle(300,120,100,5,Color.black);
    
    //bottom
    drawRectangle(0,getHeight()-5,getWidth(),5,Color.black);
    
    //tutorial
    speechBubble = new WebImage("https://codehs.com/uploads/e03a76a76216a16516098f25b4871fd3");
    speechBubble.setPosition(50,-18);
    speechBubble.setSize(120,120);
    add(speechBubble);
    
    obama = new WebImage("https://codehs.com/uploads/7f6e624ee9afb57d9a397ae86ca768ce");
    obama.setPosition(0,30);
    obama.setSize(50,50);
    add(obama);
    
    drawText(60,15,Color.black,"Oh no,we must be at the 1789","5pt Comic Sans");
    drawText(60,20,Color.black,"Tennis Court Oath. Sesame Street","5pt Comic Sans");
    drawText(60,25,Color.black,"is attempting a violent coup against","5pt Comic Sans");
    drawText(60,30,Color.black,"the French Government. Leave","5pt Comic Sans");
    drawText(60,35,Color.black,"quickly or you will die.","5pt Comic Sans");
    
    //enemies
    for(var i = 0; i < enemyArray.length; i++){
    enemyArray.remove(i);
    }
    for(var i = 0; i < 3; i++){
    enemy = new WebImage("https://codehs.com/uploads/5197a157f7c2ea047d38a86cf89f239c");
    enemy.setSize(80,60);
    if(i == 0){
    enemy.setPosition(232+Randomizer.nextInt(1,40),360-i*100);
    enemyArray[0] = enemy;
    }
    if(i == 1){
    enemy.setPosition(300+Randomizer.nextInt(1,40),360-i*100);
    enemyArray[1] = enemy;
    }
    if(i == 2){
    enemy.setPosition(232+Randomizer.nextInt(1,10),360-i*100);
    enemyArray[2] = enemy;
    }
    add(enemy);
    }
    
    //character
    yoda.setPosition(0,getHeight()-75);
    add(yoda);
    
    //door
    exit = new WebImage("https://codehs.com/uploads/ca66dc6fc02fa2bae8a730d153d81914");
    exit.setPosition(-20,60);
    exit.setSize(70,60);
    add(exit);
    
    fakeExit = new WebImage("https://codehs.com/uploads/ca66dc6fc02fa2bae8a730d153d81914");
    fakeExit.setPosition(350,60);
    fakeExit.setSize(70,60);
    add(fakeExit);
    
    //timers
    stopTimer(enemyPhysics);
    stopTimer(nextLevelOne);
    setTimer(nextLevelTwo,1);
    setTimer(enemyPhysics,levelTwoDelay);
    }
function nextLevelTwo(){
    if(yoda.getX()+yoda.getWidth()/2 > exit.getX() && yoda.getX()+yoda.getWidth()/2 < exit.getX()+exit.getWidth() && yoda.getY()+yoda.getHeight()/2 > exit.getY() && yoda.getY()+yoda.getHeight()/2 < exit.getY()+exit.getHeight() && levelFinish == 3){
    level = 3;
    levelFinish = 0;
    tutorial.pause();
    tutorial = new Audio("https://codehs.com/uploads/b304c3910550851b3da79b950c32e495");
    tutorial.play();
    levelThree();
    return;
    }
    if(yoda.getX()+yoda.getWidth()/2 > fakeExit.getX() && yoda.getX()+yoda.getWidth()/2 < fakeExit.getX()+fakeExit.getWidth() && yoda.getY()+yoda.getHeight()/2 > fakeExit.getY() && yoda.getY()+yoda.getHeight()/2 < fakeExit.getY()+fakeExit.getHeight() && levelFinish == 3){
    lose();
    }
}
function levelThree(){
    //background
    background = new WebImage("https://codehs.com/uploads/cf8d2a06da42a79ee79a6b1a0dfba4e1");
    background.setPosition(0,0);
    background.setSize(getWidth(),getHeight());
    background.setColor(Color.white);
    add(background);
    
    //platforms
    drawRectangle(0,420,100,5,Color.black);
    drawRectangle(150,420,100,5,Color.black);
    drawRectangle(300,420,100,5,Color.black);
    
    drawRectangle(66.66,320,100,5,Color.black);
    drawRectangle(232,320,100,5,Color.black);
    
    drawRectangle(0,220,100,5,Color.black);
    drawRectangle(150,220,100,5,Color.black);
    drawRectangle(300,220,100,5,Color.black);
    
    drawRectangle(66.66,120,100,5,Color.black);
    drawRectangle(232,120,100,5,Color.black);
    
    //bottom
    drawRectangle(0,getHeight()-5,getWidth(),5,Color.black);
    
    //tutorial
    speechBubble = new WebImage("https://codehs.com/uploads/e03a76a76216a16516098f25b4871fd3");
    speechBubble.setPosition(50,-18);
    speechBubble.setSize(100,100);
    add(speechBubble);
    
    obama = new WebImage("https://codehs.com/uploads/7f6e624ee9afb57d9a397ae86ca768ce");
    obama.setPosition(0,30);
    obama.setSize(50,50);
    add(obama);
    
    drawText(60,10,Color.black,"Looks like Shrek hired John","5pt Comic Sans");
    drawText(60,15,Color.black,"Wick's dog. Do not kill it!","5pt Comic Sans");
    drawText(60,15,Color.black,"or you will die.","5pt Comic Sans");
    
    //enemies
    for(var i = 0; i < enemyArray.length; i++){
    enemyArray.remove(i);
    }
    for(var i = 0; i < 3; i++){
    enemy = new WebImage("https://codehs.com/uploads/c86927a7b334a9f044bdd2bcf82c1702");
    enemy.setSize(50,50);
    if(i == 0){
    enemy.setPosition(300+Randomizer.nextInt(1,40),170);
    enemyArray[0] = enemy;
    }
    if(i == 1){
    enemy.setPosition(232+Randomizer.nextInt(1,40),270);
    enemyArray[1] = enemy;
    }
    if(i == 2){
    enemy.setPosition(300+Randomizer.nextInt(1,10),370);
    enemyArray[2] = enemy;
    }
    add(enemy);
    }
    
    //character
    yoda.setPosition(0,getHeight()-75);
    add(yoda);
    
    //door
    exit = new WebImage("https://codehs.com/uploads/ca66dc6fc02fa2bae8a730d153d81914");
    exit.setPosition(275,60);
    exit.setSize(70,60);
    add(exit);
    
    //timers
    stopTimer(enemyPhysics);
    stopTimer(nextLevelTwo);
    setTimer(nextLevelThree,1);
    setTimer(enemyPhysics,levelThreeDelay);
    }
function nextLevelThree(){
    if(yoda.getX()+yoda.getWidth()/2 > exit.getX() && yoda.getX()+yoda.getWidth()/2 < exit.getX()+exit.getWidth() && yoda.getY()+yoda.getHeight()/2 > exit.getY() && yoda.getY()+yoda.getHeight()/2 < exit.getY()+exit.getHeight()){
    level = 4;
    levelFinish = 0;
    tutorial.pause();
    tutorial = new Audio("https://codehs.com/uploads/99a7baa3b3f983adae405e769a92bdfc");
    tutorial.play();
    levelFour();
    return;
    }
    if(levelFinish == 1){
    soundFile("https://codehs.com/uploads/c69048426abb1afd77282e3789716e8c");
    drawImage(0,0,getWidth(),getHeight(),"https://codehs.com/uploads/05182e2eb24a4efdef117d36d8dba7d7");
    setTimer(nextLevelThreeTwo,500);
    setTimer(nextLevelThreeThree,2000);
    stopTimer(nextLevelThree);
    stopTimer(enemyProjectilePhysics)
    }
}
function nextLevelThreeTwo(){
    soundFile("https://codehs.com/uploads/c69048426abb1afd77282e3789716e8c");
}
function nextLevelThreeThree(){
    lose();
    stopTimer(nextLevelThreeTwo);
    stopTimer(nextLevelThreeThree);
}
function levelFour(){
    //background
    background = new WebImage("https://codehs.com/uploads/451d43b9e1620b8ca4d8fed38f127c5a");
    background.setPosition(0,0);
    background.setSize(getWidth(),getHeight());
    background.setColor(Color.white);
    add(background);
    
    //platforms
    drawRectangle(66.66,420,100,5,Color.black);
    drawRectangle(232,420,100,5,Color.black);
    
    drawRectangle(0,320,100,5,Color.black);
    drawRectangle(150,320,100,5,Color.black);
    drawRectangle(300,320,100,5,Color.black);

    drawRectangle(66.66,220,100,5,Color.black);
    drawRectangle(232,220,100,5,Color.black);
    
    drawRectangle(0,120,100,5,Color.black);
    drawRectangle(150,120,100,5,Color.black);
    drawRectangle(300,120,100,5,Color.black);
    
    //bottom
    drawRectangle(0,getHeight()-5,getWidth(),5,Color.black);
    
    //tutorial
    speechBubble = new WebImage("https://codehs.com/uploads/e03a76a76216a16516098f25b4871fd3");
    speechBubble.setPosition(50,-18);
    speechBubble.setSize(100,100);
    add(speechBubble);
    obama = new WebImage("https://codehs.com/uploads/7f6e624ee9afb57d9a397ae86ca768ce");
    obama.setPosition(0,30);
    obama.setSize(50,50);
    add(obama);
    
    drawText(60,15,Color.black,"Be vewy vewy quiet, he's","5pt Comic Sans");
    drawText(60,20,Color.black,"hunting wabbits.","5pt Comic Sans");
    
    //enemies
    for(var i = 0; i < enemyArray.length; i++){
    enemyArray.remove(i);
    }
    for(var i = 0; i < 3; i++){
    enemy = new WebImage("https://codehs.com/uploads/c019be68af8ee87ba048cedef7f9f127");
    enemy.setSize(80,65);
    if(i == 0){
    enemy.setPosition(232+Randomizer.nextInt(1,40),360-i*100);
    enemyArray[0] = enemy;
    }
    if(i == 1){
    enemy.setPosition(300+Randomizer.nextInt(1,40),360-i*100);
    enemyArray[1] = enemy;
    }
    if(i == 2){
    enemy.setPosition(232+Randomizer.nextInt(1,10),360-i*100);
    enemyArray[2] = enemy;
    }
    add(enemy);
    }
    
    //character
    yoda.setPosition(0,getHeight()-75);
    add(yoda);
    
    //door
    exit = new WebImage("https://codehs.com/uploads/ca66dc6fc02fa2bae8a730d153d81914");
    exit.setPosition(350,60);
    exit.setSize(70,60);
    add(exit);
    
    //timers
    stopTimer(enemyPhysics);
    stopTimer(nextLevelThree);
    setTimer(nextLevelFour,1);
    setTimer(enemyPhysics,levelFourDelay);
    }
function nextLevelFour(){
    if(yoda.getX()+yoda.getWidth()/2 > exit.getX() && yoda.getX()+yoda.getWidth()/2 < exit.getX()+exit.getWidth() && yoda.getY()+yoda.getHeight()/2 > exit.getY() && yoda.getY()+yoda.getHeight()/2 < exit.getY()+exit.getHeight() && levelFinish == 3){
    level = 5;
    levelFinish = 0;
    tutorial.pause();
    tutorial = new Audio("https://codehs.com/uploads/a914af9d72a776a2cfdaa6d7ca08d787");
    tutorial.play();
    levelFive();
    return;
    }
}
function levelFive(){
    //background
    background = new WebImage("https://lumiere-a.akamaihd.net/v1/images/image_61e929ee.jpeg?height=354&region=0%2C0%2C629%2C354&width=630");
    background.setPosition(0,0);
    background.setSize(getWidth(),getHeight());
    background.setColor(Color.white);
    add(background);
    
    //platforms
    drawRectangle(0,420,100,5,Color.black);
    drawRectangle(150,420,100,5,Color.black);
    drawRectangle(300,420,100,5,Color.black);
    
    drawRectangle(66.66,320,100,5,Color.black);
    drawRectangle(232,320,100,5,Color.black);
    
    drawRectangle(0,220,100,5,Color.black);
    drawRectangle(150,220,100,5,Color.black);
    drawRectangle(300,220,100,5,Color.black);
    
    drawRectangle(66.66,120,100,5,Color.black);
    drawRectangle(232,120,100,5,Color.black);
    
    //bottom
    drawRectangle(0,getHeight()-5,getWidth(),5,Color.black);
    
    //tutorial
    speechBubble = new WebImage("https://codehs.com/uploads/e03a76a76216a16516098f25b4871fd3");
    speechBubble.setPosition(50,-18);
    speechBubble.setSize(100,100);
    add(speechBubble);
    
    obama = new WebImage("https://codehs.com/uploads/7f6e624ee9afb57d9a397ae86ca768ce");
    obama.setPosition(0,30);
    obama.setSize(50,50);
    add(obama);
    
    drawText(60,15,Color.black,"It's the younglings. Kill them.","5pt Comic Sans");
    drawText(60,20,Color.black,"Kill them all. Don't worry,","5pt Comic Sans");
    drawText(60,25,Color.black,"they won't fight back","5pt Comic Sans");
    //enemies
    for(var i = 0; i < enemyArray.length; i++){
    enemyArray.remove(i);
    }
    for(var i = 0; i < 3; i++){
    enemy = new WebImage("https://codehs.com/uploads/c1228ff32c04cc044a07b898aa6502a1");
    enemy.setSize(50,40);
    if(i == 0){
    enemy.setPosition(300+Randomizer.nextInt(1,40),380);
    enemyArray[0] = enemy;
    }
    if(i == 1){
    enemy.setPosition(232+Randomizer.nextInt(1,40),280);
    enemyArray[1] = enemy;
    }
    if(i == 2){
    enemy.setPosition(300+Randomizer.nextInt(1,10),180);
    enemyArray[2] = enemy;
    }
    add(enemy);
    }
    
    //character
    yoda.setPosition(0,getHeight()-75);
    add(yoda);
    
    //door
    exit = new WebImage("https://codehs.com/uploads/ca66dc6fc02fa2bae8a730d153d81914");
    exit.setPosition(350,160);
    exit.setSize(70,60);
    add(exit);
    
    //timers
    stopTimer(enemyPhysics);
    stopTimer(nextLevelFour);
    setTimer(nextLevelFive,1);
    setTimer(enemyPhysics,levelFiveDelay);
}
function nextLevelFive(){
    if(yoda.getX()+yoda.getWidth()/2 > exit.getX() && yoda.getX()+yoda.getWidth()/2 < exit.getX()+exit.getWidth() && yoda.getY()+yoda.getHeight()/2 > exit.getY() && yoda.getY()+yoda.getHeight()/2 < exit.getY()+exit.getHeight() && levelFinish == 3){
    level = 6;
    levelFinish = 0;
    tutorial.pause();
    tutorial = new Audio("https://codehs.com/uploads/970de5995da530ee6eb95cd88f7d0682");
    tutorial.play();
    levelSix();
    return;
    }
}

function levelSix(){
    level = 6;
    //background
    background = new WebImage("https://codehs.com/uploads/1c3699dcf5f4110e60721e551d50cca5");
    background.setPosition(0,0);
    background.setSize(getWidth(),getHeight());
    background.setColor(Color.white);
    add(background);
    
    //platforms
    drawRectangle(66.66,420,100,5,Color.black);
    drawRectangle(232,420,100,5,Color.black);
    
    drawRectangle(0,320,100,5,Color.black);
    drawRectangle(150,320,100,5,Color.black);
    drawRectangle(300,320,100,5,Color.black);

    drawRectangle(66.66,220,100,5,Color.black);
    drawRectangle(232,220,100,5,Color.black);
    
    drawRectangle(0,120,100,5,Color.black);
    drawRectangle(150,120,100,5,Color.black);
    drawRectangle(300,120,100,5,Color.black);
    
    //bottom
    drawRectangle(0,getHeight()-5,getWidth(),5,Color.black);
    
    //tutorial
    speechBubble = new WebImage("https://codehs.com/uploads/e03a76a76216a16516098f25b4871fd3");
    speechBubble.setPosition(50,-18);
    speechBubble.setSize(100,100);
    add(speechBubble);
    
    obama = new WebImage("https://codehs.com/uploads/7f6e624ee9afb57d9a397ae86ca768ce");
    obama.setPosition(0,30);
    obama.setSize(50,50);
    add(obama);
    
    drawText(60,15,Color.black,"That's Neo from the Matrix.","5pt Comic Sans");
    drawText(60,20,Color.black,"He can dodge bullets, but","5pt Comic Sans");
    drawText(60,25,Color.black,"you can kill him by spamming.","5pt Comic Sans");

    //enemies
    for(var i = 0; i < enemyArray.length; i++){
    enemyArray.remove(i);
    }
    for(var i = 0; i < 3; i++){
    enemy = new WebImage("https://codehs.com/uploads/1d6939d72c4e6a9fdce8a7f30b9d07b7");
    enemy.setSize(80,60);
    if(i == 0){
    enemy.setPosition(232+Randomizer.nextInt(1,40),360-i*100);
    enemyArray[0] = enemy;
    }
    if(i == 1){
    enemy.setPosition(300+Randomizer.nextInt(1,40),360-i*100);
    enemyArray[1] = enemy;
    }
    if(i == 2){
    enemy.setPosition(232+Randomizer.nextInt(1,10),360-i*100);
    enemyArray[2] = enemy;
    }
    add(enemy);
    }
    
    //character
    yoda.setPosition(0,getHeight()-75);
    add(yoda);
    
    //door
    exit = new WebImage("https://codehs.com/uploads/ca66dc6fc02fa2bae8a730d153d81914");
    exit.setPosition(350,60);
    exit.setSize(70,60);
    add(exit);
    
    //timers
    stopTimer(enemyPhysics);
    stopTimer(nextLevelFive);
    setTimer(nextLevelSix,1);
    setTimer(enemyPhysics,levelSixDelay);
}
function nextLevelSix(){
    if(yoda.getX()+yoda.getWidth()/2 > exit.getX() && yoda.getX()+yoda.getWidth()/2 < exit.getX()+exit.getWidth() && yoda.getY()+yoda.getHeight()/2 > exit.getY() && yoda.getY()+yoda.getHeight()/2 < exit.getY()+exit.getHeight() && levelFinish > 1){
    level = 7;
    levelFinish = 0;
    tutorial.pause();
    tutorial = new Audio("https://codehs.com/uploads/8788343034f5efc37daef549d389ccce");
    tutorial.play();
    levelSeven();
    return;
    }
}
function levelSeven(){
    //background
    background = new Rectangle(getWidth(),getHeight());
    background.setPosition(0,0);
    background.setColor(Color.white);
    add(background);
    
    //platforms
    drawRectangle(0,420,100,5,Color.black);
    drawRectangle(150,420,100,5,Color.black);
    drawRectangle(300,420,100,5,Color.black);
    
    drawRectangle(66.66,320,100,5,Color.black);
    drawRectangle(232,320,100,5,Color.black);
    
    drawRectangle(0,220,100,5,Color.black);
    drawRectangle(150,220,100,5,Color.black);
    drawRectangle(300,220,100,5,Color.black);
    
    drawRectangle(66.66,120,100,5,Color.black);
    drawRectangle(232,120,100,5,Color.black);
    
    //bottom
    drawRectangle(0,getHeight()-5,getWidth(),5,Color.black);
    
    //tutorial
    speechBubble = new WebImage("https://codehs.com/uploads/e03a76a76216a16516098f25b4871fd3");
    speechBubble.setPosition(50,-18);
    speechBubble.setSize(100,100);
    add(speechBubble);
    
    obama = new WebImage("https://codehs.com/uploads/7f6e624ee9afb57d9a397ae86ca768ce");
    obama.setPosition(0,30);
    obama.setSize(50,50);
    add(obama);
    
    drawText(60,15,Color.black,"777777777777777777777777","5pt Comic Sans");
    drawText(60,20,Color.black,"777777777777777777777777","5pt Comic Sans");
    drawText(60,25,Color.black,"777777777777777777777777","5pt Comic Sans");
    drawText(60,30,Color.black,"777777777777777777777777","5pt Comic Sans");
    drawText(60,35,Color.black,"777777777777777777777777","5pt Comic Sans");
    drawText(60,40,Color.black,"777777777777777777777777","5pt Comic Sans");
    //enemies
    for(var i = 0; i < enemyArray.length; i++){
    enemyArray.remove(i);
    }
    for(var i = 0; i < 3; i++){
    enemy = new Rectangle(40,60);
    enemy.setColor(Color.black);
    if(i == 0){
    enemy.setPosition(300+Randomizer.nextInt(1,40),360-i*100);
    enemyArray[0] = enemy;
    }
    if(i == 1){
    enemy.setPosition(232+Randomizer.nextInt(1,40),360-i*100);
    enemyArray[1] = enemy;
    }
    if(i == 2){
    enemy.setPosition(300+Randomizer.nextInt(1,10),360-i*100);
    enemyArray[2] = enemy;
    }
    add(enemy);
    }
    
    //character
    yoda.setPosition(0,getHeight()-75);
    add(yoda);
    
    //door
    exit = new WebImage("https://codehs.com/uploads/ca66dc6fc02fa2bae8a730d153d81914");
    exit.setPosition(350,160);
    exit.setSize(70,60);
    add(exit);
    
    //timers
    stopTimer(enemyPhysics);
    stopTimer(nextLevelSix);
    setTimer(nextLevelSeven,1);
    setTimer(enemyPhysics,levelSevenDelay);
}
function nextLevelSeven(){
    if(yoda.getX()+yoda.getWidth()/2 > exit.getX() && yoda.getX()+yoda.getWidth()/2 < exit.getX()+exit.getWidth() && yoda.getY()+yoda.getHeight()/2 > exit.getY() && yoda.getY()+yoda.getHeight()/2 < exit.getY()+exit.getHeight() && levelFinish == 3){
    level = 8;
    levelFinish = 0;
    tutorial.pause();
    tutorial = new Audio("https://codehs.com/uploads/39a6e57ad8d80a0ce63e1e4c877a39ea");
    tutorial.play();
    levelEight();
    return;
    }
}
function levelEight(){
    //background
    background = new WebImage("https://codehs.com/uploads/5ae2d7ab628b0b07b5fa0444b1c3b435");
    background.setPosition(0,0);
    background.setSize(getWidth(),getHeight());
    background.setColor(Color.white);
    add(background);
    
    //platforms
    drawRectangle(66.66,420,100,5,Color.black);
    drawRectangle(232,420,100,5,Color.black);
    
    drawRectangle(0,320,100,5,Color.black);
    drawRectangle(150,320,100,5,Color.black);
    drawRectangle(300,320,100,5,Color.black);

    drawRectangle(66.66,220,100,5,Color.black);
    drawRectangle(232,220,100,5,Color.black);
    
    drawRectangle(0,120,100,5,Color.black);
    drawRectangle(150,120,100,5,Color.black);
    drawRectangle(300,120,100,5,Color.black);
    
    //bottom
    drawRectangle(0,getHeight()-5,getWidth(),5,Color.black);
    
    //tutorial
    speechBubble = new WebImage("https://codehs.com/uploads/e03a76a76216a16516098f25b4871fd3");
    speechBubble.setPosition(50,-18);
    speechBubble.setSize(100,100);
    add(speechBubble);
    
    obama = new WebImage("https://codehs.com/uploads/7f6e624ee9afb57d9a397ae86ca768ce");
    obama.setPosition(0,30);
    obama.setSize(50,50);
    add(obama);
    
    drawText(60,15,Color.black,"It's Shrek. he can respawn a","5pt Comic Sans");
    drawText(60,20,Color.black,"few times, but he is not immor-","5pt Comic Sans");
    drawText(60,25,Color.black,"tal. This is your chance to save","5pt Comic Sans");
    drawText(60,30,Color.black,"Chernobyl. Dont mess it up","5pt Comic Sans");

    
    //enemies
    for(var i = 0; i < enemyArray.length; i++){
    enemyArray.remove(i);
    }
    enemy = new WebImage("https://codehs.com/uploads/abb63bde2b9f654478e5858e577854ab");
    enemy.setSize(80,60);
    enemy.setPosition(300,70);
    enemyArray[0] = enemy;
    add(enemy);
    enemyArray[1] = blankArray;
    enemyArray[2] = blankArray;
    //character
    yoda.setPosition(0,getHeight()-75);
    add(yoda);
    
    //door
    exit = new WebImage("https://codehs.com/uploads/ca66dc6fc02fa2bae8a730d153d81914");
    exit.setPosition(350,60);
    exit.setSize(70,60);
    add(exit);
    
    //timers
    stopTimer(enemyPhysics);
    stopTimer(nextLevelSeven);
    setTimer(nextLevelEight,1);
    setTimer(enemyPhysics,levelEightDelay);
}
function nextLevelEight(){
    if(yoda.getX()+yoda.getWidth()/2 > exit.getX() && yoda.getX()+yoda.getWidth()/2 < exit.getX()+exit.getWidth() && yoda.getY()+yoda.getHeight()/2 > exit.getY() && yoda.getY()+yoda.getHeight()/2 < exit.getY()+exit.getHeight() && levelFinish == 3){
    level = 9;
    levelFinish = 0;
    tutorial.pause();
    tutorial = new Audio("https://codehs.com/uploads/970de5995da530ee6eb95cd88f7d0682");
    tutorial.play();
    levelNine();
    return;
    }
    if(shrekCounter < 1){
    if(levelFinish == 1){
    setTimer(shrekLife,500)
    shrekCounter = shrekCounter+1;
    }
    }
    if(shrekCounter < 2){
    if(levelFinish == 2){
    setTimer(shrekLife,500)
    shrekCounter = shrekCounter+1;
    }
    }
}
function shrekLife(){
    enemy = new WebImage("https://codehs.com/uploads/abb63bde2b9f654478e5858e577854ab");
    enemy.setSize(80,60);
    enemy.setPosition(300,70);
    enemyArray[shrekCounter] = enemy;
    add(enemy);
    stopTimer(shrekLife);
}
function levelNine(){
    level = 9;
    //background
    background = new WebImage("https://codehs.com/uploads/d7c4aeb9362cb1af8c7eb7adc8c80edf");
    background.setPosition(0,0);
    background.setSize(getWidth(),getHeight());
    background.setColor(Color.white);
    add(background);
    
    //platforms
    drawRectangle(0,420,100,5,Color.black);
    drawRectangle(150,420,100,5,Color.black);
    drawRectangle(300,420,100,5,Color.black);
    
    drawRectangle(66.66,320,100,5,Color.black);
    drawRectangle(232,320,100,5,Color.black);
    
    drawRectangle(0,220,100,5,Color.black);
    drawRectangle(150,220,100,5,Color.black);
    drawRectangle(300,220,100,5,Color.black);
    
    drawRectangle(66.66,120,100,5,Color.black);
    drawRectangle(232,120,100,5,Color.black);
    
    //bottom
    drawRectangle(0,getHeight()-5,getWidth(),5,Color.black);
    
    //tutorial
    speechBubble = new WebImage("https://codehs.com/uploads/e03a76a76216a16516098f25b4871fd3");
    speechBubble.setPosition(50,-18);
    speechBubble.setSize(100,100);
    add(speechBubble);
    
    obama = new WebImage("https://codehs.com/uploads/7f6e624ee9afb57d9a397ae86ca768ce");
    obama.setPosition(0,30);
    obama.setSize(50,50);
    add(obama);
    
    drawText(60,15,Color.black,"It's Big Chungus. Shrek must","5pt Comic Sans");
    drawText(60,20,Color.black,"have been working for him","5pt Comic Sans");
    drawText(60,25,Color.black,"this whole time. Don't let","5pt Comic Sans");
    drawText(60,30,Color.black,"him get too big or you will ","5pt Comic Sans");
    drawText(60,35,Color.black,"die.","5pt Comic Sans");
    
    //enemies
    for(var i = 0; i < enemyArray.length; i++){
    enemyArray.remove(i);
    }
    chungus = new WebImage("https://codehs.com/uploads/37a7f1d90d27aaf4aca0315b33bdcaa1");
    chungus.setSize(80,60);
     chungus.setSize(chungus.getWidth()+1,chungus.getHeight()+1);
    add(chungus);
    

    //character
    yoda.setPosition(0,getHeight()-75);
    add(yoda);
    
    //door

    
    //timers
    stopTimer(enemyPhysics);
    stopTimer(nextLevelSeven);
    setTimer(bigChungus,100);
    setTimer(bigChungusTwo,200);
}
function bigChungus(){
    if(yoda.getX()+yoda.getWidth()/2 > chungus.getX() && yoda.getX()+yoda.getWidth()/2 < chungus.getX()+chungus.getWidth() && yoda.getY()+yoda.getHeight()/2 > chungus.getY() && yoda.getY()+yoda.getHeight()/2 < chungus.getY()+chungus.getHeight()){
    lose();
    }
    if(chungus != blankArray){
    chungus.setSize(chungus.getWidth()+6,chungus.getHeight()+6);
    chungus.setPosition(getWidth()/2-chungus.getWidth()/2,getHeight()/2-chungus.getHeight()/2)
    }
    if(chungusLife <= 0 && chungusDeathCounter == 0){
    win();
    chungusDeathCounter = 1;
    stopTimer(bigChungus)
    }
}
function bigChungusTwo(){
    for(var i = 0; i < projectileArray.length; i++){
    var projectiles = projectileArray[i];
    if(level == 9){
    if(projectiles.getX() > chungus.getX() && projectiles.getX() < chungus.getX()+chungus.getWidth() && projectiles.getY() > chungus.getY() && projectiles.getY() < chungus.getY()+chungus.getHeight()){
    soundFile("https://codehs.com/uploads/9b080ed732befe99ca9e991840597853");
    chungusLife = chungusLife-1;
    }
    }
    }
}
    
//adds physics such as falling and platforms
function physics(){
    var elem = getElementAt(yoda.getX()+yoda.getWidth()/2+1,yoda.getY()+yoda.getHeight()+1);
    if(elem == background || elem == exit || elem == obama || elem == speechBubble){
        yoda.move(0,4);
    }
    if(yoda.getY() < 0){
        lose();
    }
}

//sets the controls for yoda to move, shoot, etc
function controls(e){
    if(pauseCounter == 0){
    var direction = 1;
    if(yoda.getX()> 0){
    if(e.keyCode == Keyboard.letter('A')){
        yoda.move(-10,0);
        if(yoda.getX() > 0){
        yoda.move(-10,0);
        }
        direction = 0;
    }
    }
    if(yoda.getX()+50 < getWidth()){
    if(e.keyCode == Keyboard.letter('D')){
        yoda.move(10,0);
        if(yoda.getX()+50 < getWidth()){
        yoda.move(10,0);
        }
        direction = 1;
    }
    }
    if(yoda.getY() > 0){
    if(e.keyCode == Keyboard.letter('W')){
        yoda.move(0,-75);
    }
    }
    
    if(yoda.getY()+50 < getHeight()){
    if(e.keyCode == Keyboard.letter('S')){
        }
    }
    if(e.keyCode == Keyboard.letter('Q')){
        //soundFile("https://codehs.com/uploads/b7b039fa2e4024f5a922323aeb105e77");
        projectile = new Circle(3);
        projectile.setPosition(yoda.getX()+yoda.getWidth()/2,yoda.getY()+yoda.getHeight()/2);
        projectile.setColor(Color.black);
        projectileArray.push(projectile);
        add(projectile);
        if(projectileCounter == 0){
        setTimer(projectilePhysics,10);
        projectileCounter = 1;
        }
    }
    }
    
    //credit to braffgod for the idea of a pause button
    if(level < 10 && level > 0){
    if(e.keyCode == Keyboard.SPACE){
        if(pauseCounter == 0){
        pause = new Rectangle(getWidth()/2,getHeight()/2);
        pause.setPosition(getWidth()/2-pause.getWidth()/2,getHeight()/2-pause.getHeight()/2);
        add(pause);
        pauseText = new Text("Game","30pt Impact")
        pauseText.setColor(Color.white);
        pauseText.setPosition(150,175);
        add(pauseText);
        pauseText2 = new Text("Paused","30pt Impact")
        pauseText2.setColor(Color.white);
        pauseText2.setPosition(135,225);
        add(pauseText2);
        pauseText3 = new Text("Press SPACE to Continue","12pt Impact")
        pauseText3.setColor(Color.white);
        pauseText3.setPosition(120,275);
        add(pauseText3);
        
        stopTimer(enemyPhysics);
        stopTimer(enemyProjectilePhysics);
        pauseCounter = 1;
        }else{
        if(level == 1){
        setTimer(enemyPhysics,levelOneDelay);
        } 
        if(level == 2){
        setTimer(enemyPhysics,levelTwoDelay);
        }   
        if(level == 3){
        setTimer(enemyPhysics,levelThreeDelay);
        }   
        if(level == 4){
        setTimer(enemyPhysics,levelFourDelay);
        }   
        if(level == 5){
        setTimer(enemyPhysics,levelFiveDelay);
        }   
        if(level == 6){
        setTimer(enemyPhysics,levelSixDelay);
        }   
        if(level == 7){
        setTimer(enemyPhysics,levelSevenDelay);
        }   
        if(level == 8){
        setTimer(enemyPhysics,levelEightDelay);
        }   
        if(level == 9){
        setTimer(enemyPhysics,levelOneDelay);
        }   
        
        remove(pauseText);
        remove(pauseText2);
        remove(pauseText3);
        remove(pause);  
        pauseCounter = 0;
        setTimer(enemyProjectilePhysics,100);
        }
}
}
}

//sets the physics for the projectile
function projectilePhysics(){
    for(var i = 0; i < projectileArray.length; i++){
    var projectiles = projectileArray[i];
    projectiles.move(10,0);
    if(level == 6){
    enemy = enemyArray[0];
    if(projectiles.getY() >= enemy.getY() && projectiles.getY() <= enemy.getY()+enemy.getHeight() && enemy.getX()-projectiles.getX() < 50 && enemy.getX()-projectiles.getX() > 25){
    enemy.setSize(enemy.getWidth(),projectiles.getY()-enemy.getY());
    setTimer(matrixOne,500);
    }
    enemy = enemyArray[1];
    if(projectiles.getY() >= enemy.getY() && projectiles.getY() <= enemy.getY()+enemy.getHeight() && enemy.getX()-projectiles.getX() < 50 && enemy.getX()-projectiles.getX() > 25){
    enemy.setSize(enemy.getWidth(),projectiles.getY()-enemy.getY());
    setTimer(matrixTwo,500);
    }
    enemy = enemyArray[2];
    if(projectiles.getY() >= enemy.getY() && projectiles.getY() <= enemy.getY()+enemy.getHeight() && enemy.getX()-projectiles.getX() < 50 && enemy.getX()-projectiles.getX() > 25){
    enemy.setSize(enemy.getWidth(),projectiles.getY()-enemy.getY());
    setTimer(matrixThree,500);
    }
    }
    }
    killEnemy();
}

function matrixOne(){
    if(level == 6){
    enemy = enemyArray[0];
    if(enemy != blankArray){
    enemy.setSize(80,60);
    }
    }
    stopTimer(matrixOne);
}
function matrixTwo(){
    if(level == 6){
    enemy = enemyArray[1];
    if(enemy != blankArray){
    enemy.setSize(80,60);
    }
    }
    stopTimer(matrixTwo);
    
}
function matrixThree(){
    if(level == 6){
    enemy = enemyArray[2];
    if(enemy != blankArray){
    enemy.setSize(80,60);
    }
    }
    stopTimer(matrixThree);
}

function killEnemy(){
    for(var i = 0; i < projectileArray.length; i++){
    var projectiles = projectileArray[i];
    if(level != 9 && level != 10){
    enemy = enemyArray[2];
    if(projectiles.getX() > enemy.getX() && projectiles.getX() < enemy.getX()+enemy.getWidth() && projectiles.getY() > enemy.getY() && projectiles.getY() < enemy.getY()+enemy.getHeight()){
    soundFile("https://codehs.com/uploads/9b080ed732befe99ca9e991840597853");
    remove(enemy);
    enemyArray[2] = blankArray;
    levelFinish = levelFinish+1;
    }
    enemy = enemyArray[1];
    if(projectiles.getX() > enemy.getX() && projectiles.getX() < enemy.getX()+enemy.getWidth() && projectiles.getY() > enemy.getY() && projectiles.getY() < enemy.getY()+enemy.getHeight()){
    soundFile("https://codehs.com/uploads/9b080ed732befe99ca9e991840597853");
    remove(enemy);
    enemyArray[1] = blankArray;
    levelFinish = levelFinish+1;
    }
    enemy = enemyArray[0];
    if(projectiles.getX() > enemy.getX() && projectiles.getX() < enemy.getX()+enemy.getWidth() && projectiles.getY() > enemy.getY() && projectiles.getY() < enemy.getY()+enemy.getHeight()){
    soundFile("https://codehs.com/uploads/9b080ed732befe99ca9e991840597853");
    remove(enemy);
    enemyArray[0] = blankArray;
    levelFinish = levelFinish+1;
    }
    }
}
}
//codes the enemies

function enemyPhysics(){
    if(level != 9){
    for(var i = 0; i < enemyArray.length; i++){
        var enemies = enemyArray[i];
        enemyProjectile = new Circle(3);
        enemyProjectile.setPosition(enemies.getX()+enemies.getWidth()/2,enemies.getY()+enemies.getHeight()/2);
        enemyProjectile.setColor(Color.black);
        add(enemyProjectile);
        enemyProjectileArray.push(enemyProjectile);
        }
    }
}
function enemyProjectilePhysics(){
    for(var i = 0; i < enemyProjectileArray.length; i++){
    var enemyProjectiles = enemyProjectileArray[i];
    if(enemyProjectiles.getX() < 0){
        remove(enemyProjectiles);
    }else{
        enemyProjectiles.move(-10,0);
    }
    if(enemyProjectiles.getX() > yoda.getX() && enemyProjectiles.getX() < yoda.getX()+yoda.getWidth() && enemyProjectiles.getY() > yoda.getY() && enemyProjectiles.getY() < yoda.getY()+yoda.getHeight()){
    lose();
    }
    }
}
//lose screen
function lose(){
    level = 10;
    if(loseCounter == 0){
    tutorial.pause();
    soundFile("https://codehs.com/uploads/7f8529bfc72e2f02797e6ae9537b9f67");
    soundFile("https://codehs.com/uploads/c0ac799249ff9a0d269cde95b8718bc5")
    setTimer(loseGif,100);
    }
    loseCounter = 1;
}
function loseGif(){
    
    if(loseTimer < 1500){
    if(loseTimer <= -140){
    coffinDance = new Rectangle(getWidth(),getHeight());
    coffinDance.setPosition(0,0);
    coffinDance.setColor(Color.black);
    }
    if(loseTimer > -140 && loseTimer <= 0){
    coffinDance = new WebImage("https://i.imgur.com/QCKfc7C.jpg");
    coffinDance.setSize(getWidth()*5,getHeight()*28);
    coffinDance.setPosition(0-(loseTimer+140)%5*400,0-Math.floor((loseTimer+140)/5)*480);
    }
    if(loseTimer > 0 && loseTimer <= 300){
    coffinDance = new WebImage("https://i.imgur.com/nppIU70.jpg");
    coffinDance.setSize(getWidth()*5,getHeight()*60);
    coffinDance.setPosition(0-loseTimer%5*400,0-Math.floor(loseTimer/5)*480);
    }
    if(loseTimer > 300 && loseTimer <= 605){
    coffinDance = new WebImage("https://i.imgur.com/3V8LN8N.jpg");
    coffinDance.setSize(getWidth()*5,getHeight()*61);
    coffinDance.setPosition(0-(loseTimer-300)%5*400,0-Math.floor((loseTimer-300)/5)*480);
    }
    if(loseTimer > 605 && loseTimer <= 910){
    coffinDance = new WebImage("https://i.imgur.com/iX9JNW3.jpg");
    coffinDance.setSize(getWidth()*5,getHeight()*61);
    coffinDance.setPosition(0-(loseTimer-605)%5*400,0-Math.floor((loseTimer-605)/5)*480);
    }
    if(loseTimer > 910 && loseTimer <= 1215){
    coffinDance = new WebImage("https://i.imgur.com/Y4dwGSV.jpg");
    coffinDance.setSize(getWidth()*5,getHeight()*61);
    coffinDance.setPosition(0-(loseTimer-910)%5*400,0-Math.floor((loseTimer-910)/5)*480);
    }
    if(loseTimer > 1215 && loseTimer <= 1515){
    coffinDance = new WebImage("https://i.imgur.com/kc5Vgwe.jpg");
    coffinDance.setSize(getWidth()*5,getHeight()*60);
    coffinDance.setPosition(0-(loseTimer-1215)%5*400,0-Math.floor((loseTimer-1215)/5)*480);
    }
    
    add(coffinDance);
    
    if(loseTimer == 1499){
    loseTimer = 0;
    }
    }
    loseTimer = loseTimer+1;
    
}
//win screen

function win(){
    
    level = 10;
    tutorial.pause();
    soundFile("https://codehs.com/uploads/6e5ac4d7bb3b54de08162d690e479a5b")
    setTimer(winGif,100);
    
}

function winGif(){
    
    if(winTimer < 2000){
    
    if(winTimer < 300){
    remove(funeral);
    funeral = new WebImage("https://i.imgur.com/4KxvYSO.jpg");
    funeral.setSize(getWidth()*5,getHeight()*60);
    funeral.setPosition(0-winTimer%5*400,0-Math.floor(winTimer/5)*480);    
    }
    
    if(winTimer > 300 && winTimer < 600){
    remove(funeral);
    funeral = new WebImage("https://i.imgur.com/jhmIUbU.jpg");
    funeral.setSize(getWidth()*5,getHeight()*61);
    funeral.setPosition(0-(winTimer-300)%5*400,0-Math.floor((winTimer-300)/5)*480);
    }
    
    if(winTimer > 600 && winTimer < 750){
    remove(funeral);
    funeral = new WebImage("https://i.imgur.com/pK3OjME.jpg");
    funeral.setSize(getWidth()*5,getHeight()*30);
    funeral.setPosition(0-(winTimer-600)%5*400,0-Math.floor((winTimer-600)/5)*480);
    }
    if(winTimer > 750 && winTimer < 900){
    remove(funeral);
    funeral = new WebImage("https://i.imgur.com/wTdZurd.jpg");
    funeral.setSize(getWidth()*5,getHeight()*30);
    funeral.setPosition(0-(winTimer-750)%5*400,0-Math.floor((winTimer-750)/5)*480);
    }
    
    if(winTimer > 899 && winTimer < 1200){
    remove(funeral);
    funeral = new WebImage("https://i.imgur.com/cM8HmlX.jpg");
    funeral.setSize(getWidth()*5,getHeight()*55);
    funeral.setPosition(0-(winTimer-900)%5*400,0-Math.floor((winTimer-900)/5)*480);
    }
    add(funeral);
    
    if(winTimer > 1200 && winTimer < 1350){
    drawRectangle(0,0,getWidth(),getHeight(),Color.black);
    
    var winText = new Text("Yoda was arrested for war crimes","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,50);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("against Big Chungus, first degree","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,75);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("murder, 17 counts of tax fraud","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,100);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("second degree murder, assault,","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,125);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("third degree murder, possesion with","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,150);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("intent to distribute, battery, armed","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,175);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("battery, insurance fraud, securities","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,200);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("fraud, bank fraud, welfare fraud","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,225);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("credit card fraud, perjury, vehicular","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,250);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("homicide, arson, kidnapping, aiding","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,275);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("and abetting, intent to commit a","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,300);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("a conspiracy, blackmail, airplane","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,325);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("hijacking, counterfeiting, forgery","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,350);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("genocide, crimes on an Indian","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,375);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("Reservation, interfering with","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,400);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("the operation of a satellite,","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,425);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("insider trading crimes, forgery,","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,450);
    winText.setColor(Color.white);
    add(winText);
    if(oceanManCounter == 0){
    soundFile("https://codehs.com/uploads/26024b02a4941997ff000584bd4ef2d9")
    oceanManCounter = 1;
    }
    }
    if(winTimer > 1350 && winTimer < 1450){
    drawRectangle(0,0,getWidth(),getHeight(),Color.black);
    var winText = new Text("treason, bibery, coercion, domestic","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,50);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("terrorism, embezzlement, extortion","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,75);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("exportation of drugs, drug smuggling","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,100);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("drug trafficking, manslaughter, importation,","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,125);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("of drugs, money laundering, obstruction","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,150);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("of justice, assassination, bank robbery","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,175);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("racketeering, missile systems designed","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,200);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("to destroy aircraft, reentry of an alien","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,225);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("removed on national security grounds,","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,250);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("and environmental shceme crimes","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,275);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("He is now serving 27 life sentences","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,300);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("in Miami Maximum Security Prison.","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,325);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,350);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,375);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,400);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,425);
    winText.setColor(Color.white);
    add(winText);
    var winText = new Text("","17pt Comic Sans");
    winText.setPosition(getWidth()/2-winText.getWidth()/2,450);
    winText.setColor(Color.white);
    add(winText);
    }
    if(winTimer > 1450){
    if(creditCounter == 0){
    drawRectangle(0,0,getWidth(),getHeight(),Color.black);
    drawRectangle(0,0,getWidth(),getHeight(),Color.black);
    creditText = new Text("Credits","30pt Comic Sans");
    creditText.setPosition(getWidth()/2-creditText.getWidth()/2,-100);
    creditText.setColor(Color.white);
    add(creditText);
    creditText2 = new Text("Andrew Hatfield","30pt Comic Sans");
    creditText2.setPosition(getWidth()/2-creditText2.getWidth()/2,0);
    creditText2.setColor(Color.white);
    add(creditText2);
    setTimer(credits, 10);
    creditCounter = 1;
    }
    }
    
    winTimer = winTimer+1;
}
}
function credits(){
    creditText.move(0,1);
    creditText2.move(0,1);
}
//functions to make things easier 
function soundFile(link){
    var sound = new Audio(link);
    sound.play();
}
function ifStatement(condition,result){
    //I never use this but it is cool
    if(condition){
    result;
    }
}
function drawImage(x, y, width, height, link){
    var variable = new WebImage(link);
    variable.setSize(width, height);
    variable.setPosition(x, y);
    add(variable); 

}
function drawText(x,y,color,message,type){
    var text = new Text(message,type);
    text.setPosition(x,y);
    text.setColor(color);
    add(text); 
}
function drawRectangle(x,y,width,height,color){
    var rect = new Rectangle(width,height);
    rect.setPosition(x,y);
    rect.setColor(color);
    add(rect);
}