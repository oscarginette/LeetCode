function checkIfPangram(sentence: string): boolean {
    if (sentence.length < 26) return false;
    let word = '';
    let cont = 0;
    for (let le of sentence) {
        if (!word.includes(le)) {
            cont++;
            word += le;
        }
    }
    return cont === 26;
};