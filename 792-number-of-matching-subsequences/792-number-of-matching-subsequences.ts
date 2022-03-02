function numMatchingSubseq(s: string, words: string[]): number {
    let cont = 0;
    let last = false;
    if (isSubsequence(words[0], s)) {
        cont++;
        last = true;
    } 
    
    for(let i=1; i < words.length; i++) {
        if (words[i-1]===words[i] && last) cont++;
        else if (isSubsequence(words[i], s)) {
            cont++;
            last = true;   
        }
        else last = false;
    }
    
    return cont;
};

function isSubsequence(s: string, t: string): boolean {
    if (!s && !t) return true;
    for (let x of t){
        const l: string = s[0];
        if (x === l) s = s.slice(1);
        if(!s) return true;
    };
    
    return false;
};