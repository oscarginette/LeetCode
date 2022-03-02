function isSubsequence(s: string, t: string): boolean {
    if (!s && !t) return true;
    for (let x of t){
        const l: string = s[0];
        if (x === l) s = s.slice(1);
        if(!s) return true;
    };
    
    return false;
};