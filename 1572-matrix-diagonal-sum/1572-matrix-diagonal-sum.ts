function diagonalSum(mat: number[][]): number {
    let count = 0;
    for (let i = 0; i < mat.length; i++)
    for (let j = 0; j < mat.length; j++)
    if (i === j 
        || i+j === mat.length-1 
        || (i === j && i+j === Math.floor(mat.length/2))) 
        count += mat[i][j];
    
    return count;
};