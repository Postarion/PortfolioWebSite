const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

const box = 32;

const ground = new Image();
ground.src = 'img/ground.png';

const foodImg = new Image();
foodImg.src = 'img/food.png';

let snake =[];
snake[0] = {
  x : 9 * box,
  y: 10*box
};

let food = {
  x: Math.floor(Math.random()*17+1) *box,
  y: Math.floor(Math.random()*15+3) *box
};

let score = 0;

//control Snake
let d;
document.addEventListener('keydown', direction);

function direction(event){
  let key = event.keyCode;
  if( key == 37 && d != "RIGHT"){
    d = "LEFT";
    left.play();
  }else if(key == 38 && d != "DOWN"){
    d = "UP";
    up.play();
  }else if(key == 39 && d != "LEFT"){
    d = "RIGHT";
    right.play();
  }else if(key == 40 && d != "UP"){
    d = "DOWN";
    down.play();
  };
};

//Check collision
function collision(head, array){
  for(let i=0; i<array.length; i++){
    if(head.x==array[i].x && head.y==array[i].y){
      return true;
    }
  }
  return false;
};

function draw(){
  ctx.drawImage(ground, 0, 0);

  for (let i = 0; i<snake.length; i++){
    ctx.fillStyle = ( i== 0)? "green" : "white";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);

    ctx.strokeStyle = 'red';
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.drawImage(foodImg, food.x, food.y);

  //old snake position
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  

  //direction of keybord
  if ( d=="LEFT") snakeX -= box;
  if ( d=="UP") snakeY -= box;
  if ( d=="RIGHT") snakeX += box;
  if ( d=="DOWN") snakeY += box;

  //Increment Snake Size
  if(snakeX == food.x && snakeY == food.y){
    score++;
    food = {
      x: Math.floor(Math.random()*17+1) *box,
      y: Math.floor(Math.random()*15+3) *box
    };
  }else{
    // remove tha tail
    snake.pop();
  }

  //new snake head
  let newHead = 
  {
    x: snakeX,
    y: snakeY
  };

  //game over
  if(snakeX < box || snakeX > 17*box || snakeY < 3*box || snakeY > 17*box || collision(newHead, snake)){
    snake = [];
    newHead={
      x : 9 * box,
      y: 10*box
    }
    score = 0;
  };

  

  snake.unshift(newHead);

  ctx.fillStyle = "white";
  ctx.font = '45px changa one';
  ctx.fillText(score, 2*box, 1.6*box);
};

let game = setInterval(draw, 120);