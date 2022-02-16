function countConsistentStrings(allowed: string, words: string[]): number {
    let count = 0;
    
    for (let i = 0; i < words.length; i++) {
        let isAllowed = true;
        let list = allowed.split('');
        let j = 0;
        while (isAllowed && j < words[i].length) {
            if (!list.includes(words[i][j])) isAllowed = false;
            ++j;
        }
        if (isAllowed) ++count;
    }
    
    return count;
};