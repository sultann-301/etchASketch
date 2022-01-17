const grid = document.querySelector(".grid");
const gridContainer = document.querySelector(".grid-container");
const clearBtn = document.querySelector(".clear");
const eraserBtn = document.querySelector(".eraser");
const blackBtn = document.querySelector(".black");
const rainbowBtn = document.querySelector(".rainbow");

const renderGrid = (size, squareSize) => {
  for (let i = 0; i < size * size; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-square");
    newDiv.style.height = `${squareSize}px`;
    newDiv.style.width = `${squareSize}px`;

    grid.appendChild(newDiv);
  }
  grid.style.width = `${size * squareSize}px`;
  grid.style.height = `${size * squareSize}px`;
};

import { randColor } from "./randomColorgenerator.js";
const drawOnGrid = () => {
  const gridSquares = document.querySelectorAll(".grid-square");
  for (let gridSquare of gridSquares) {
    let chosen_random_color = randColor();
    //console.log(chosen_random_color)
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.backgroundColor = chosen_random_color;
    });
  }
};

//buttons functionality

const blackTool = blackBtn.addEventListener("click", () => {
  const gridSquares = document.querySelectorAll(".grid-square");
  for (let gridSquare of gridSquares) {
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.backgroundColor = "black";
    });
  }
});
const rainbowTool = rainbowBtn.addEventListener("click", () => {
  drawOnGrid();
});
const eraserTool = eraserBtn.addEventListener("click", () => {
  const gridSquares = document.querySelectorAll(".grid-square");
  for (let gridSquare of gridSquares) {
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.backgroundColor = "aliceblue";
    });
  }
});

const resetGrid = clearBtn.addEventListener("click", () => {
  let newGridSize = prompt("How large would you like your grid to be? ");
  while (newGridSize > 64) {
    newGridSize = prompt(
      "Sorry! Please enter a value less than or equal to 100: "
    );
  }
  let newSquareSize = prompt("How large do you want each square to be? ");
  while (newSquareSize > 25) {
    newSquareSize = prompt(
      "Sorry! Please enter a value less than or equal to 25"
    );
  }
  if (newGridSize == 64) {
    newSquareSize -= 20;
  } else if (newGridSize >= 40) {
    newSquareSize -= 15;
  }

  const gridSquares = document.querySelectorAll(".grid-square");
  for (let gridSquare of gridSquares) {
    gridSquare.remove();
  }
  grid.style.width = "none";
  grid.style.height = "none";
  renderGrid(parseInt(newGridSize), parseInt(newSquareSize));
  drawOnGrid();
});

renderGrid(16, 20);

drawOnGrid();
