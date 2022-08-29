const ticTockGrid = document.getElementById('tic-tok');
const winner = document.getElementById('winner');
const resetBtn = document.getElementById('reset');


(()=>{
    let isCrossClicked = false;
    let grid = [
                    [{idx:'00', val:''},{idx:'01', val:''},{idx:'02', val:''}],
                    [{idx:'10', val:''},{idx:'11', val:''},{idx:'12', val:''}],
                    [{idx:'20', val:''},{idx:'21', val:''},{idx:'22', val:''}]
                ];

    ticTockGrid.addEventListener('click',function(e){
        process(e.target.getAttribute('data-id'));
    });

    resetBtn.addEventListener('click',function(e){
        resetGrid();
    })

    const showWinner = (won) =>{
        winner.innerHTML = won+" - Won ";
    }
    const resetGrid = ()=>{
        // ticTockGrid.innerHTML = "";
        grid = [
            [{idx:'00', val:''},{idx:'01', val:''},{idx:'02', val:''}],
            [{idx:'10', val:''},{idx:'11', val:''},{idx:'12', val:''}],
            [{idx:'20', val:''},{idx:'21', val:''},{idx:'22', val:''}]
        ];
        createGrid();
    }

    const process = (idx) =>{
        isCrossClicked =  !isCrossClicked;
        const n = grid.length;
        for(let i=0; i<n; i++){
            for(let j=0; j<n; j++){
                if(grid[i][j].idx == idx && isCrossClicked){
                    console.log('X clicked ',idx);
                    grid[i][j].val = 'X';
                    console.log(grid[i][j]);
                    createGrid();
                    setTimeout(()=>{
                        checkWinner();
                    },500)
                }else if(grid[i][j].idx == idx && !isCrossClicked){
                    console.log('0 clicked ',idx);
                    grid[i][j].val = '0';
                    console.log(grid[i][j]);
                    createGrid();
                    setTimeout(()=>{
                        checkWinner();
                    },500)
                }
            }
        }
    }

    const checkWinnerInRowsCols = (row,col,isRow,isCol,isDiagonalLtoR)=>{
        const n = grid.length;
        // let row = 0;
        // let col = 0;
        let horizontalCountX = 0;
        let horizontalCountZero = 0;
        while(row < n && col <n){
            if(grid[row][col].val == 'X'){
                horizontalCountX++;
            }
            if(grid[row][col].val == '0'){
                horizontalCountZero++;
            }
            if(isRow){
                col++;
            }else{
                row++;
            }
        }
        if(horizontalCountX == 3){
            showWinner('X')
            resetGrid();
            return;
        }
        if(horizontalCountZero == 3){
            showWinner('0')
            resetGrid();
            return;
        }
    }
    
    const checkWinnerDiagonally = (isLeftToRightDiagonal) =>{
        const n = grid.length;
        console.log('isLeftToRightDiagonal ',isLeftToRightDiagonal);
        let row = 0;
        let col = 0; 
        let horizontalCountX = 0;
        let horizontalCountZero = 0;
        while(row < n && col < n){
            console.log('diag ',grid[row][col]);
            if(grid[row][col].val == 'X'){
                horizontalCountX++;
            }
            if(grid[row][col].val == '0'){
                horizontalCountZero++;
            }
            row++;
            col++;
        }
        if(horizontalCountX == 3){
            showWinner('X')
            resetGrid();
            return;
        }
        if(horizontalCountZero == 3){
            showWinner('0')
            resetGrid();
            return;
        }
    }
    const checkWinnerDiagonally1 = () =>{
        const n = grid.length;
        let row = 0;
        let col = n-1; 
        let horizontalCountX = 0;
        let horizontalCountZero = 0;
        while(row < n && col >= 0){
            console.log('diag 2 ',grid[row][col]);
            if(grid[row][col].val == 'X'){
                horizontalCountX++;
            }
            if(grid[row][col].val == '0'){
                horizontalCountZero++;
            }
            row++;
            col--;
        }
        if(horizontalCountX == 3){
            showWinner('X')
            resetGrid();
            return;
        }
        if(horizontalCountZero == 3){
            showWinner('0')
            resetGrid();
            return;
        }
    }
    const checkWinner = () =>{
        // horizontal first row
        checkWinnerInRowsCols(0, 0, true);
        // horizontal second row 
        checkWinnerInRowsCols(1, 0, true);
        // horizontal third row
        checkWinnerInRowsCols(2, 0, true);

        //vertical first col
        checkWinnerInRowsCols(0, 0, false);
        //vertical second col
        checkWinnerInRowsCols(0, 1, false);
        //vertical third col
        checkWinnerInRowsCols(0, 2, false);

        //diagonal left to right one
        checkWinnerDiagonally();

        //diagonal right to left one
        checkWinnerDiagonally1();
    }

    const createGrid = ()=>{
        // resetGrid();
        ticTockGrid.innerHTML = "";
        const n = grid.length;

        for(let i=0; i<n; i++){
            const gridRow = document.createElement('div');
            gridRow.classList.add('grid-row');
            for(let j=0; j<n; j++){
                const gridCol = document.createElement('div');
                gridCol.classList.add('box'); 
                const idx = grid[i][j].idx; 
                const val = grid[i][j].val;
                if(val == 'X'){
                    gridCol.classList.add('cross-style');
                } else if(val == '0'){
                    gridCol.classList.add('zero-style');
                }
                gridCol.innerText = val;
                gridCol.setAttribute('data-id',idx);
                gridRow.appendChild(gridCol);
            }
            ticTockGrid.appendChild(gridRow);
        }
    }
    
    createGrid();
})()
