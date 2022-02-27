function countNegatives(grid: number[][]): number {
    const row = grid.length;
    let count = 0;
    let fin = true;
    for (let i = row-1; i>=0;i--){
        fin = true;
        for (let j = grid[i].length-1; j>=0 && fin;j--){
            if (grid[i][j] >= 0) fin = false;
            else ++count;
        }
    }
    
    return count;
};