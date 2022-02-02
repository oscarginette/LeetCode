function lengthOfLastWord(s: string): number {
    let reversed = s.split("").reverse().join("").trim();
    return reversed.split(" ")[0].length;
};