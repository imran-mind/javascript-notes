
/* 
[
    0=> [7,8,9],
    1=> [4,5,6],
    2=> [1,2,3]
]
*/

const reversMatrix = (matrix) =>{
    matrix = matrix.reverse();
    // console.log(matrix);
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j < i; j++){
            console.log('i,j',i,j);
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    console.log(matrix);
}

const arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

reversMatrix(arr)

/*
[
    0=> [7,8,9],
    1=> [4,5,6],
    2=> [1,2,3]
]
 const output=[
    [7,4,1],
    [8,5,2],
    [9,6,3]
]
*/