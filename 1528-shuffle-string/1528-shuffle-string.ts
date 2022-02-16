function restoreString(s: string, indices: number[]): string {
    let result = '';
    for (let i = 0; i < indices.length; i++) {
        result += s[indices.indexOf(i)];
    }
    return result;
};