import "./styles.css";

const inputBox = document.getElementById("grid-size");
const button = document.getElementById("btn");
const gridWrapper = document.getElementById("grid-wrapper");
const rowColCheckBox = document.getElementById("row-col");
const diagonalCheckBox = document.getElementById("diagonal");
let isRowColChecboxSelected = false;
let isDiagonalChecboxSelected = false;

let grid = [];
let toggleColor = false;

rowColCheckBox.addEventListener("click", function (e) {
  console.log("row-col", e.target.checked);
  isRowColChecboxSelected = e.target.checked;
  isDiagonalChecboxSelected = false;
});

diagonalCheckBox.addEventListener("click", function (e) {
  console.log("diagonal ", e.target.checked);
  isDiagonalChecboxSelected = e.target.checked;
  isRowColChecboxSelected = false;
});

gridWrapper.addEventListener("click", function (e) {
  const pos = e.target.getAttribute("data-id");
  if (pos) {
    const row = pos.split("-")[0];
    const col = pos.split("-")[1];
    console.log(row, col);
    // markingColorRowCol(row, col);
    if (isRowColChecboxSelected) {
      markingColorRowCol(row, col);
    } else if (isDiagonalChecboxSelected) {
      markingColorDiagonal(row, col);
    }
  }
});

const resetGrid = () => {
  gridWrapper.innerHTML = "";
};

const markingColorDiagonal = (row, col) => {
  toggleColor = !toggleColor;
  if (toggleColor) {
    const n = grid.length;
    if (row <= n && col <= n) {
      let nr = row;
      let nc = col;

      //bottem left
      while (nc >= 0 && nr < n) {
        console.log("left");
        grid[nr][nc].isColored = true;
        nc--;
        nr++;
      }

      //bottom right
      nc = col;
      nr = row;
      while (nc < n && nr < n) {
        console.log("right");
        grid[nr][nc].isColored = true;
        nc++;
        nr++;
      }

      //Top Left
      nr = row;
      nc = col;
      while (nr >= 0 && nc >= 0) {
        console.log("Top -> ", grid[nr][nc].index);
        grid[nr][nc].isColored = true;
        nr--;
        nc--;
      }

      //Top right
      nr = row;
      nc = col;
      while (nr >= 0 && nc < n) {
        console.log("Bottom -> ");
        grid[nr][nc].isColored = true;
        nr--;
        nc++;
      }
    }
    console.log("after colored ", grid);
    createGrids(grid);
  } else {
    const n = grid.length;
    generateGrid(n);
  }
};
const markingColorRowCol = (row, col) => {
  toggleColor = !toggleColor;
  if (toggleColor) {
    const n = grid.length;
    if (row <= n && col <= n) {
      let nr = row;
      let nc = col;

      while (nc >= 0) {
        console.log("left");
        grid[nr][nc].isColored = true;
        nc--;
      }

      nc = col;
      while (nc < n) {
        console.log("right");
        grid[nr][nc].isColored = true;
        nc++;
      }

      nr = row;
      nc = col;
      while (nr >= 0) {
        console.log("Top -> ", grid[nr][nc].index);
        grid[nr][nc].isColored = true;
        nr--;
      }

      nr = row;
      nc = col;
      while (nr < n) {
        console.log("Bottom -> ");
        grid[nr][nc].isColored = true;
        nr++;
      }
    }
    console.log("after colored ", grid);
    createGrids(grid);
  } else {
    const n = grid.length;
    generateGrid(n);
  }
};

const generateGrid = (n) => {
  resetGrid();
  for (let i = 0; i < n; i++) {
    grid[i] = [];
    for (let j = 0; j < n; j++) {
      grid[i][j] = {
        index: i + "-" + j,
        isColored: false
      };
    }
  }
  createGrids(grid);
};

const createGrids = (grid) => {
  resetGrid();
  const n = grid.length;
  for (let i = 0; i < n; i++) {
    const rowEle = document.createElement("div");
    rowEle.classList.add("rows");
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        const colEle = document.createElement("div");
        colEle.classList.add("col");
        if (grid[i][j].isColored) {
          colEle.classList.add("color");
        }
        colEle.innerHTML = grid[i][j].index;
        colEle.setAttribute("data-id", grid[i][j].index);
        rowEle.appendChild(colEle);
      }
    }
    gridWrapper.appendChild(rowEle);
  }
};

const handleClick = () => {
  grid = [];
  generateGrid(inputBox.value);
};

button.addEventListener("click", function (e) {
  resetGrid();
  handleClick();
});
