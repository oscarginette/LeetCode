function isPowerOfThree(number: number): boolean {
    if (number === 0) return false;
    while (number >= 3) {
        number /= 3;
    }
    return number === 1;
};