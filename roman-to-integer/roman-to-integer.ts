function romanToInt(word: string): number {
    const romans: {[key: string]: number} = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    };
    
    let sum = romans[word[word.length - 1]]
    let lastValue = sum;
    for (let i = word.length - 2; i >= 0; i--) {
        romans[word[i]] < lastValue ?
            sum -= romans[word[i]] : sum += romans[word[i]];
        
        lastValue = romans[word[i]];
    }
    
    return sum;
};