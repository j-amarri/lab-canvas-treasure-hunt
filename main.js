// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      context.rect(j * 50, i * 50, 50, 50);
      context.stroke();
    }
  }
}

class Character {
  constructor(col, row, direction) {
    this.col = col;
    this.row = row;
    this.direction = 'down';
  }
  moveUp() {
    this.direction = 'up';
    this.row--;
  }
  moveRight() {
    this.direction = 'right';
    this.col++;
  }
  moveDown() {
    this.direction = 'down';
    this.row++;
  }
  moveLeft() {
    this.direction = 'left';
    this.col--;
  }
}

function drawPlayer() {
  if (player.direction === 'down') {
    const playerImageDown = new Image();
    playerImageDown.src = 'images/character-down.png';
    playerImageDown.addEventListener('load', () => {
      context.drawImage(playerImageDown, player.col * 50, player.row * 50);
    });
  } else if (player.direction === 'up') {
    const playerImageUp = new Image();
    playerImageUp.src = 'images/character-up.png';
    playerImageUp.addEventListener('load', () => {
      context.drawImage(playerImageUp, player.col * 50, player.row * 50);
    });
  } else if (player.direction === 'right') {
    const playerImageRight = new Image();
    playerImageRight.src = 'images/character-right.png';
    playerImageRight.addEventListener('load', () => {
      context.drawImage(playerImageRight, player.col * 50, player.row * 50);
    });
  } else {
    const playerImageLeft = new Image();
    playerImageLeft.src = 'images/character-left.png';
    playerImageLeft.addEventListener('load', () => {
      context.drawImage(playerImageLeft, player.col * 50, player.row * 50);
    });
  }
}

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
  }
}

function drawTreasure() {
  const treasureImage = new Image();
  treasureImage.src = 'images/treasure.png';
  treasureImage.addEventListener('load', () => {
    context.drawImage(
      treasureImage,
      treasure.col * 50,
      treasure.row * 50,
      50,
      50
    );
  });
}

// Iteration 5

// update the player's coordinate
// draw everything again by calling drawEverything()

window.addEventListener('keydown', event => {
  event.preventDefault();
  switch (event.keyCode) {
    case 37:
      player.moveLeft();
      break;
    case 38:
      player.moveUp();
      break;
    case 39:
      player.moveRight();
      break;
    case 40:
      player.moveDown();
      break;
  }
  if (player.col === treasure.col && player.row === treasure.row) {
    treasure.setRandomPosition();
  }
  context.clearRect(0, 0, width, height);
  drawEverything();
});

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
}

const treasure = new Treasure(0, 0);
treasure.setRandomPosition();
const player = new Character(0, 0);
drawEverything();
