function findWords(words: string[]): string[] {
    let list = [];
    for (let i = 0; i < words.length; i++) {
        if (isValidWord(words[i])){
            list.push(words[i]);
        }
    }
    return list;
};

function isValidWord(word: string): boolean {
    word = word.toLowerCase();
    const first = ['q','w','e','r','t','y','u','i','o','p'];
    const second = ['a','s','d','f','g','h','j','k','l'];
    let line = 0;
    for (let i = 0; i < word.length; i++){
        if (first.includes(word[i])) {
            if (!line) line = 1;
            else if (line !== 1) return false;
            continue;
        }
        if (second.includes(word[i])) {
            if (!line) line = 2;
            else if (line !== 2) return false;
            continue;
        }
        if (!line) line = 3;
        else if (line !== 3) return false;
    }
    return true;
}