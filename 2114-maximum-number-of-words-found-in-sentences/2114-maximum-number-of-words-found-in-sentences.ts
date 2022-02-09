function mostWordsFound(sentences: string[]): number {
    let max = 0;
    for(let i = 0; i < sentences.length; i++) {
        const len = sentences[i].split(' ').length;
        if (len > max) max = len;
    }
    return max;
};