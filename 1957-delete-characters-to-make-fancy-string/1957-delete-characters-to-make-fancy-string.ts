function makeFancyString(s: string): string {
    let cont = 0;
    let prev = s[0];
    let res = s[0];
    for (let i = 1; i < s.length; i++) {
        if(s[i-1] === s[i]) ++cont
        else {
            prev = s[i];
            cont = 0;
        }
        
        if (cont < 2) {
            res += prev;
        }
    }

    return res;
};
