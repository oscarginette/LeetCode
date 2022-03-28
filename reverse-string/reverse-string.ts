/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const n = s.length - 1;
    for (let i = 0; i <= n/2; i++) {
        const aux = s[i];
        s[i] = s[n-i];
        s[n-i] = aux;
    }
};