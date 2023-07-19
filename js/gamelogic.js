const mat = [];
var matr = [];
var matrice = [];
var canplay = true;
var rows1 = "";
var columns1 = "";
var rows = "";
var columns = "";
var imgurl = "";
var which = "";
var lengofmat = 0;
var puzzleBoard;
var renderedCanvas;
function createMatrix(columns, rows) {
  rows = parseInt(rows);
  columns = parseInt(columns);
  console.log("columns", columns, "rows", rows);

  rows1 = rows;
  columns1 = columns;
  lengofmat = rows1 * columns1 - 1;
  canplay = true;
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(0);
    }
    mat.push(row);
  }

  a = getready(rows, columns);

  if (!a) {
    for (b = 0; b < 100; b++) {
      if (getready(rows, columns)) {
        break;
      }
    }
  }

  console.log(mat);
}

function getready(rows, columns) {
  getallzeroes();
  let solvable = false;
  let n = 0;
  const rowrand = Math.floor(Math.random() * rows);
  const columnrand = Math.floor(Math.random() * columns);

  mat[rowrand][columnrand] = lengofmat;

  let filler = 0;
  let numAssigned = 1;
  while (numAssigned < rows * columns) {
    const grow = Math.floor(Math.random() * rows);
    const gcolumn = Math.floor(Math.random() * columns);
    if (mat[grow][gcolumn] === 0) {
      mat[grow][gcolumn] = filler;
      filler++;
      numAssigned++;
    }
  }
  solvable = detectparity();

  return solvable;
}

function getallzeroes() {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      mat[i][j] = 0;
    }
  }
}

function detectparity() {
  let parity = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      for (let k = j + 1; k < mat[i].length; k++) {
        if (mat[i][j] > mat[i][k] && mat[i][j] != lengofmat) {
          parity++;
          console.log(i, j, mat[i][j] + 1, "--", i, k, mat[i][k] + 1);
        }
      }
      for (let l = i + 1; l < mat.length; l++) {
        if (mat[i][j] > mat[l][j] && mat[i][j] != lengofmat) {
          parity++;
          console.log(i, j, mat[i][j] + 1, "--", l, j, mat[l][j] + 1);
        }
      }
    }
  }
  if(parity%2!=0){
    let tmpind=-1;
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[i].length; j++) {
       
        if(mat[i][j]==lengofmat){
          tmpind=i;
          break;
        }
        
      }
      if(tmpind!=-1){
        break;
      }
    }

    for(let i=0;i<mat[0].length;i++){
      for (let k = i + 1; k < mat[0].length; k++) {
        if (mat[tmpind][i] > mat[tmpind][k] && mat[tmpind][i] != lengofmat) {
          
          tmp=mat[tmpind][i];
          mat[tmpind][i]=mat[tmpind][k];
          mat[tmpind][k]=tmp;
        }
      }
    }
      
    parity = 0;
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[i].length; j++) {
        for (let k = j + 1; k < mat[i].length; k++) {
          if (mat[i][j] > mat[i][k] && mat[i][j] != lengofmat) {
            parity++;
            console.log(i, j, mat[i][j] + 1, "--", i, k, mat[i][k] + 1);
          }
        }
        for (let l = i + 1; l < mat.length; l++) {
          if (mat[i][j] > mat[l][j] && mat[i][j] != lengofmat) {
            parity++;
            console.log(i, j, mat[i][j] + 1, "--", l, j, mat[l][j] + 1);
          }
        }
      }
    }

  }
  console.log("parity", parity);
  if(parity%2==0 && parity <5){
    return true;
  }
  return false;
}


function createPuzzleBoard() {
  
   puzzleBoard = document.getElementById('puzzle-board');
   
  
   
  if (!puzzleBoard) {
    console.log("Cannot find 'puzzle-board' element.");
    return;
  }
  else{
   
    
puzzleBoard.innerHTML = '';
  }
  

  for (let i = 0; i < mat.length; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < mat[i].length; j++) {
      let btn = document.createElement('input');
      btn.type = "button";

      const cell = document.createElement('td');

      let tmp = mat[i][j];
      btn.value = tmp + 1;

      if (tmp == lengofmat && canplay == true) {
        btn.value = "";
      } else if (tmp == 8 && canplay == true) {
        setTimeout(() => {
          btn.value = tmp + 1;
        }, 500);
      }

      btn.onclick = function() { startplaying(tmp); };
      cell.appendChild(btn);
      row.appendChild(cell);
    }
    puzzleBoard.appendChild(row);
  }
  checkmatandwin();

}








function createPuzzleBoard1() {
  
  puzzleBoard = document.getElementById('puzzle-board');
  
 
  
 if (!puzzleBoard) {
   console.log("Cannot find 'puzzle-board' element.");
   return;
 }
 else{
  
   
puzzleBoard.innerHTML = '';
 }
 

 for (let i = 0; i < mat.length; i++) {
   const row = document.createElement('tr');

   for (let j = 0; j < mat[i].length; j++) {
     let btn = document.createElement('input');
     
     btn.type = "button";
     btn.classList.add('number-button');
     const cell = document.createElement('td');
     cell.classList.add('puzzle-cell');
     let tmp = mat[i][j];
    
     
     let tmp2=parseInt(tmp);
     
     let tmpcolumn = tmp2 % columns1;
     let tmprow = Math.floor(tmp2 / columns1);
      
      let tmp1=matrice[tmprow][tmpcolumn];
     btn.value = tmp + 1;

     if (tmp == lengofmat && canplay == true) {
       btn.value = "";
     } else if (tmp == 8 && canplay == true) {
       setTimeout(() => {
         btn.value = tmp + 1;
       }, 500);
     }
     const canvas = drawit(tmp1);
     const dataURL = canvas.toDataURL();
      cell.style.backgroundImage = `url(${dataURL})`;
      canvas.style.backgroundColor = "transparent";
     btn.onclick = function() { startplaying(tmp); };
     cell.appendChild(btn);
     row.appendChild(cell);
   }
   puzzleBoard.appendChild(row);
 }
 checkmatandwin();

}









function getempty(number) {
  index = 0;
 
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] == number) {
        k = index;
       
        return k; // i*3+j
      }
      index++;
    }
  }
}

function startplaying(pressed) {
  
  if (canplay) {
    

    if (pressed === lengofmat) {

      console.log("no");
    } else {
      
      x = getempty(lengofmat);
      let xcolumn = x % columns1;
      let xrow = Math.floor(x / columns1);
     

      y = getempty(pressed);
      let ycolumn = y % columns1;
      let yrow = Math.floor(y / columns1);
     

      if (ifnear(xrow, xcolumn, yrow, ycolumn)) {
        const buttonCell = puzzleBoard.rows[xrow].cells[xcolumn];
        buttonCell.classList.add("sliding");
moveit(xrow, xcolumn, yrow, ycolumn);
        mat[xrow][xcolumn] = pressed;
        mat[yrow][ycolumn] = lengofmat;
        
        createPuzzleBoard1();

        if (checkmatandwin()) {
          console.log("You won!");
          canplay = false;
          mat[yrow][ycolumn] = lengofmat;
          createPuzzleBoard1();
          checkmatandwin();
          if(which=="right"){
            changeinputs(xrow);
          }
          
        }
      }
    }
  }
}




function checkmatandwin() {
  let thenum = 0;
  let ind = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] != thenum) {
        for (let k = columns1; k <= thenum; k = k + columns1) {
          
        }
        return false;
      }
      thenum++;
    }
  }
  

  return true;
}

function ifnear(xrow, xcolumn, yrow, ycolumn) {
  if (xrow == yrow && (xcolumn - ycolumn == 1 || xcolumn - ycolumn == -1)) {
    return true;
  } else if (xcolumn == ycolumn && (xrow - yrow == 1 || xrow - yrow == -1)) {
    return true;
  }
  return false;
}

function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const which = urlParams.get('which');
  const columns = urlParams.get('columns');
  const rows = urlParams.get('rows');
  console.log("which:", which,rows,columns);

  if(which=="left"){
    createMatrix(columns, rows);
    createPuzzleBoard();
    const puzzleRows3 = document.querySelectorAll('#puzzle-board tr');
  puzzleRows3.forEach(row => {
    const rowInputs3 = row.querySelectorAll('input');
    rowInputs3.forEach(input => {
      input.style.color = 'black';
    });
  });

  }
  else if(which=="right"){
    //decode the matrix
    let encoded=sessionStorage.getItem("encodedmatrix");
    let decoded = initdecode(encoded);
    matr=decoded;
    console.log("matr",matr);
     renderedCanvas = drawit(matr);
    
     createMatrix(columns, rows);
     devideit(matr, columns, rows);
     createPuzzleBoard1();
    
  }
 



}

function changeinputs(rowIndex) {
  const puzzleRows1 = document.querySelectorAll('#puzzle-board tr');
  puzzleRows1.forEach(row => {
    const rowInputs = row.querySelectorAll('input');
    rowInputs.forEach(input => {
      input.style.color = 'transparent';
    });
  });

  // To remove the lines between cells
  const puzzleCells = document.querySelectorAll('.puzzle-cell');
  puzzleCells.forEach(cell => {
    cell.style.border = 'none';
  });

  // Optionally, to remove the borders for the table rows as well
  const puzzleRows = document.querySelectorAll('#puzzle-board tr');
  puzzleRows.forEach(row => {
    row.style.border = 'none';
  });
}

function devideit(matr, columns, rows) {
  
  const cellWidth = 150;
  const cellHeight = 150;

  for (let i = 0; i < rows; i++) {
    let row = [];
    let starty = i * cellHeight;
    let endy = (i + 1) * cellHeight;

    for (let j = 0; j < columns; j++) {
      let tmpj=mat[i][j];
      let startx = j * cellWidth;
      let endx = (j + 1) * cellWidth;
      let cell = [];

      for (let y = starty; y < endy; y++) {
        let cellRow = [];
        for (let x = startx; x < endx; x++) {
          cellRow.push(matr[y][x]);
        }
        cell.push(cellRow);
      }

      row.push(cell);
    }

    matrice.push(row);
  }
  console.log("new matrice",matrice,matrice.length,matrice[0].length);
  return matrice;
}
// function moveit(xrow, xcolumn, yrow, ycolumn) {
//   // Step 1: Swap the elements in the mat array
//   let tmp = mat[xrow][xcolumn];
//   mat[xrow][xcolumn] = mat[yrow][ycolumn];
//   mat[yrow][ycolumn] = tmp;

//   // Step 2: Update the puzzle board with the new matrice
//    createPuzzleBoard1();

//   // Step 3: Check for a win condition
//   if (checkmatandwin()) {
//     console.log("You won!");
//     canplay = false;
//     mat[yrow][ycolumn] = lengofmat;
//     createPuzzleBoard1();
//     checkmatandwin();
//   }
// }




function moveit(xrow, xcolumn, yrow, ycolumn) {
  // Step 1: Swap the elements in the mat array
  let tmp = mat[xrow][xcolumn];
  mat[xrow][xcolumn] = mat[yrow][ycolumn];
  mat[yrow][ycolumn] = tmp;

  // Step 2: Update the specific cells in the puzzle board
  const puzzleCells = document.getElementsByClassName('puzzle-cell');
  const xCellIndex = xrow * columns1 + xcolumn;
  const yCellIndex = yrow * columns1 + ycolumn;

  // Swap the background images of the two cells
  const xCellBackground = puzzleCells[xCellIndex].style.backgroundImage;
  puzzleCells[xCellIndex].style.backgroundImage = puzzleCells[yCellIndex].style.backgroundImage;
  puzzleCells[yCellIndex].style.backgroundImage = xCellBackground;

  // Update the button values
  puzzleCells[xCellIndex].querySelector('input').value = mat[xrow][xcolumn] + 1;
  puzzleCells[yCellIndex].querySelector('input').value = mat[yrow][ycolumn] + 1;

  // Step 3: Check for a win condition
  
}




document.addEventListener('DOMContentLoaded', function() {
  
  init();
});
