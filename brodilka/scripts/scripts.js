let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 800;

let back = new Image();
let tree = new Image();
let bush = new Image();
let lake = new Image();
let home = new Image();
let playerUp = new Image();
let playerRight = new Image();
let playerDown = new Image();
let playerLeft = new Image();
let playerSwimUp = new Image();
let playerSwimRight = new Image();
let playerSwimDown = new Image();
let playerSwimLeft = new Image();
let homeBack = new Image();
let table = new Image();
let carpet = new Image();
let vase = new Image();
let emptyVase = new Image();
let pillow = new Image();
let food = new Image();
let playerSit = new Image();
let backRight = new Image();
let dog1 = new Image();
let dog2 = new Image();
let dogHome = new Image();

back.src = "img/back.png";
back.crossOrigin = "Anonymous";
tree.src = "img/tree.png";
bush.src = "img/bush.png";
lake.src = "img/lake.png";
home.src = "img/home.png";
playerUp.src = "img/playerUp.png";
playerRight.src = "img/playerRight.png";
playerDown.src = "img/playerDown.png";
playerLeft.src = "img/playerLeft.png";
playerSwimUp.src = "img/playerSwimUp.png";
playerSwimRight.src = "img/playerSwimRight.png";
playerSwimDown.src = "img/playerSwimDown.png";
playerSwimLeft.src = "img/playerSwimLeft.png";
homeBack.src = "img/homeBack.png";
table.src = "img/smth.png";
carpet.src = "img/carpet.png";
vase.src = "img/vase.png";
emptyVase.src = "img/emptyVase.png";
pillow.src = "img/pillow.png";
food.src = "img/food.png";
playerSit.src = "img/playerSit.png";
dogHome.src = "img/dogHome.png";
dog1.src = "img/dog1.png";
dog2.src = "img/dog2.png";
backRight.src = "img/backRight.png";

let playerX = canvas.width/2;
let playerY = canvas.height/2;
let speed = 10;
let up = false;
let right = false;
let down = false;
let left = false;
let background = back;
let playerLocation = "main";
let flower = vase;
let dog = dog2;

function draw(defaultPos){
    oldPlayerY = playerY;
    oldPlayerX = playerX;

    if(up){
        playerY -= speed;
        playerPos = playerUp;
    }
    if(playerY <= 0){
        playerY = 0;
    }
    if(right){
        playerX += speed;
        playerPos = playerRight;
    }
    if(playerX > 905){
        playerX = 905;
       // background = homeBack;
        playerLocation = "mainRight";
        playerX = 0;
    } 
    if(down){
        playerY += speed;
        playerPos = playerDown;
    }
    if(left){
        playerX -= speed;
        playerPos = playerLeft;
    }
    if(playerY >= 705){
        playerY = 705;
    }
    if(playerX < 0){
        playerX = 0;
        //background = back;
        playerLocation = "main";
        playerX = 905;
    } 
    if(defaultPos != null){
        playerPos = defaultPos;
    }

    if(playerLocation ==  "main"){
        drawMain();
    }else if(playerLocation == "mainRight"){
        drawMainRight();
    }else if(playerLocation == "mainHome"){
        drawMainHome();
    }

    context.drawImage(playerPos, playerX, playerY);

    var p = context.getImageData(playerX, playerY, 1, 1).data; 
 		
    if((p[0] == 0) && (p[1] == 0) && (p[2] == 0) && (p[3] == 0)){
    }

    var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    
    console.log(hex);


    if(hex == "#00ac30" && "#19b233" && "#88cd3f" && "#3aba36" && "#1cb333" && "#01ac2f" && "#21b433" && "#03ac2f"
    //playerX > bush.x && playerY > bush.y && playerX < bush.x + bush.width && playerY < bush.y + bush.height &&
    //playerX > tree.x && playerY > tree.y && playerX < tree.x + tree.width && playerY < tree.y + tree.height
    //playerX > plants.x && playerY > plants.y && playerX < plants.x + plants.width && playerY < plants.y + plants.height
    ){
        playerY = oldPlayerY;
        playerX = oldPlayerX;
   }

   if(//playerX > home.x && playerY > home.y && playerX < 60 + home.width && playerY < 30 + home.height
    hex == "#c78764"){
      playerLocation = "mainHome";
      playerX = 500;
    }
}


function drawMain(){
    context.drawImage(back, 0, 0);
    context.drawImage(home, 60, 30);
    context.drawImage(lake, 350, 200);
    context.drawImage(tree, 5, 500);
    context.drawImage(tree, 800, 10);
    context.drawImage(bush, 400, 100);
    context.drawImage(bush, 800, 600);
    context.drawImage(bush, 600, 650);
   

   if(/*hex == "#b1dad5" && "#43cfb5"*/ playerX > 200 && playerX < 200 + lake.width && playerY > 110 && playerY < 110 + lake.height){
       if(up){
        playerPos = playerSwimUp;
    }
    if(right){
        playerPos = playerSwimRight;
    }
    if(down){
        playerPos = playerSwimDown;
    }
    if(left){
        playerPos = playerSwimLeft;
    }
}
}

function drawMainHome(){
    context.drawImage(homeBack, 0, 0);  
    context.drawImage(carpet, 300, 380);
    context.drawImage(food, 10, 400);
    context.drawImage(pillow, 10, 200);
    context.drawImage(table, 380, 50);
    context.drawImage(flower, 440, 60);

    if(/*hex == "#964E27" && "#814030"*/ playerX > 280 && playerX < 280 + 320 && playerY > 0 && playerY < 200){
        playerY = oldPlayerY;
        playerX = oldPlayerX;
    }

    if(playerX > 0 && playerX < pillow.width && playerY > 150 && playerY < 150 + pillow.height){
        playerPos = playerSit;
        playerX = 25;
        playerY = 240;
    }

    if(playerX > 0 && playerX < food.width && playerY > 360 && playerY < 360 + food.height){
        playerY = oldPlayerY;
        playerX = oldPlayerX;    
    }

    /*if(playerX > 300 && playerX < 300 + carpet.width && playerY > 400 && playerY < 400 + carpet.height){
        speed = 5;
    }*/
}

function drawMainRight(){
    context.drawImage(backRight, 0, 0); 
    setInterval(time(), 500);
    context.drawImage(dog, 30, 200);
    context.drawImage(dogHome, 550, 15);
    context.drawImage(tree, 800, 500);
    context.drawImage(tree, 350, 20);
    context.drawImage(bush, 850, 280);
    context.drawImage(bush, 150, 600);
    context.drawImage(bush, 450, 630);
}

function time(){
    //clearInterval();
    if(dog == dog2){
        setTimeout(function(){
        dog = dog1;
        console.log("yes");},
        500);
    }else if(dog == dog1){
    dog = dog2;
    console.log("no");
    }
}


function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

/*function updateGameArea() {
    if (myGamePiece.crashWith(myObstacle)) {
        myGameArea.stop();
    }*/

    /*function crash(){
        if (playerX = object.x,
           playerY = object.y){
            playerY = oldPlayerY;
            playerX = oldPlayerX;   
        }
    }*/

addEventListener("keydown", startMove);
addEventListener("keyup", stopMove);

function startMove(key){
 //   console.log( "start",  key.code);
    if(key.code == "KeyW"){
        up = true;
    } else if(key.code == "KeyD"){
        right = true;
    } else if(key.code == "KeyS"){
        down = true;
    } else if(key.code == "KeyA"){
        left = true;

    }

   if(key.code == "KeyQ"){
        console.log("q");
        playerLocation = "main";
    }

    if(key.code == "KeyE"){
        console.log("e");
        flower = emptyVase;
        setTimeout(function (){flower = vase;}, 2000);
    }

    if(key.code == "KeyF"){
        console.log("f");
        playerX = 200;
        playerPos = playerRight;
    }
}

function stopMove(key){
//    console.log( "stop", key.code);
    if(key.code == "KeyW"){
        up = false;
    } else if(key.code == "KeyD"){
        right = false;
    } else if(key.code == "KeyS"){
        down = false;
    } else if(key.code == "KeyA"){
        left = false;
    }
}

/*$(document).ready(function(){
  $("input").keydown(function(){
    $("input").css("background-color", "yellow");
  });
  $("input").keyup(function(){
    $("input").css("background-color", "pink");
  });
});

log.textContent += ` ${e.code}`;

$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({left: '250px'});
  });*/

  console.log( "start");
  draw(playerRight);
setInterval(draw, 20);