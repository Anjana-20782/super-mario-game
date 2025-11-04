let game = document.getElementById("game");
let play = document.getElementById("play");

let x = 100;
let y = 100;
let jump = 20;

function movePlay(direction) {
  let width = game.offsetWidth;
  let height = game.offsetHeight;
  let playsize = play.offsetWidth;

  if (direction === "up" && y + jump + playsize <= height) {
    y += jump;
  } 
  else if (direction === "down" && y - jump >= 0) {
    y -= jump;
  } 
  else if (direction === "left" && x - jump >= 0) {
    x -= jump;
  } 
  else if (direction === "right" && x + jump + playsize <= width) {
    x += jump;
  }

  updatePosition();
}

function updatePosition() {
  play.style.left = `${x}px`;
  play.style.bottom = `${y}px`;
}

document.getElementById("up").addEventListener("click", () => movePlay("up"));
document.getElementById("down").addEventListener("click", () => movePlay("down"));
document.getElementById("left").addEventListener("click", () => movePlay("left"));
document.getElementById("right").addEventListener("click", () => movePlay("right"));


document.addEventListener("keydown", (e) => {
  if (e.key === "w" || e.key === "W") movePlay("up");
  if (e.key === "s" || e.key === "S") movePlay("down");
  if (e.key === "a" || e.key === "A") movePlay("left");
  if (e.key === "d" || e.key === "D") movePlay("right");
});
