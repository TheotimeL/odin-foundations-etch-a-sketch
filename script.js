// Element selectors

let resetButton = document.getElementById("reset-button");
let gridSizeInput = document.getElementById("grid-size-input");
let gridContainer = document.getElementById("app-grid");

// Variables

const gridWidth = gridContainer.clientWidth;
const gridHeight = gridContainer.clientHeight;
let gridSize = 16;
gridSizeInput.value = gridSize;

// Functions

let getCellHeight = (gridSize) => `${gridHeight / gridSize}px`;
let getCellWidth = (gridSize) => `${gridWidth / gridSize}px`;

function getSizeInput() {
  if (gridSizeInput.value > 100) {
    alert("Size must be less than 100");
    return 16;
  }
  return gridSizeInput.value;
}

function setBackgroundColor(cell) {
  if (cell.style.backgroundColor == "white") {
    random_color = Math.floor(Math.random() * 16777215).toString(16);
    cell.style.backgroundColor = "#" + random_color;
    cell.style.opacity = 0.5;
  } else {
    let opacity = cell.style.opacity;
    cell.style.opacity = parseFloat(opacity) + 0.1;
  }
}

function createCell(gridSize) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.style.width = getCellWidth(gridSize);
  cell.style.height = getCellHeight(gridSize);
  cell.style.backgroundColor = "white";
  cell.addEventListener("mouseover", function () {
    setBackgroundColor(cell);
  });
  return cell;
}

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      gridContainer.appendChild(createCell(gridSize));
    }
  }
}

function resetGrid() {
  gridContainer.innerHTML = "";
  createGrid(getSizeInput());
}

// Event listeners

resetButton.addEventListener("click", resetGrid);

// Start

createGrid(gridSize);
