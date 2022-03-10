function maxAreaOfIsland(grid: number[][]): number {
    if (grid.map(y => y.reduce((a, b) => a+b)).reduce((a, b) => a+b) === 0) return 0;
    let max = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                const theArea = area(grid, i, j, []);
                max = Math.max(max, theArea.length); 
            }
        }
    }
    
    return max;
};

function area(g: number[][], i: number, j: number, a: string[]): string[] {
    if (g[i][j] === 1) {
        a.push("");
        g[i][j] = 2;
        if (i > 0) area(g, i-1, j, a);
        if (i < g.length-1) area(g, i+1, j, a);
        if (j > 0) area(g, i, j-1, a);
        if (j < g[0].length-1) area(g, i, j+1, a);

        return a;
    }
    return [];
}