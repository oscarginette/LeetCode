function generate(numRows: number): number[][] {
    let result = []; 
    for( let i = 1; i <= numRows; i++) {
        let list = [];
        for (let j = 1; j <= i; ++j) {
            if (j === 1 || j === i) list.push(1);
            else list.push(result[i-2][j-2] + result[i-2][j-1]);
        }
        result.push(list);
    }
    return result;
};