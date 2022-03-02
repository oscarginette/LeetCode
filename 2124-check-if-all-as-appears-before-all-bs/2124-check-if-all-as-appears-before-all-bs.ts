function checkString(s: string): boolean {
    let isB = false;
    for(let x of s) {
        if (x === 'b') isB = true;
        if (x === 'a' && isB) return false;
    }
    
    return true;
};