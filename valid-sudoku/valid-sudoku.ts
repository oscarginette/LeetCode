function isValidSudoku(board: string[][]): boolean {
    // check repetitions in rows
    for (let i = 0; i < 9; i++) {
        const row = board[i];
        // find duplicated items in row
        const duplicatedItems = row.filter((item, index) => row.indexOf(item) !== index && item !== '.');
        if (duplicatedItems.length > 0) {
            return false;
        }

    }
    // check repetitions in columns
    for (let i = 0; i < 9; i++) {
        const column = board.map(row => row[i]);
        // find duplicated items in column
        const duplicatedItems = column.filter((item, index) => column.indexOf(item) !== index && item !== '.');
        if (duplicatedItems.length > 0) {
            return false;
        }
    }
    // check repetitions in boxes
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            const box = board.slice(i, i + 3).map(row => row.slice(j, j + 3));
            // find duplicated items in box
            const duplicatedItems = box.flat().filter((item, index) => box.flat().indexOf(item) !== index && item !== '.');
            if (duplicatedItems.length > 0) {
                return false;
            }
        }
    }
    return true;
};