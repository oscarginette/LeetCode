function numberOfBeams(bank: string[]): number {
    if (bank.every((item) => parseInt(item) === 0)) return 0;
    let count = 0;
    let lastOnes = bank[0].replace(/[^1]/g, '').length;
    for (let i = 1; i < bank.length; i++) {
        const ones = bank[i].replace(/[^1]/g, '').length;
        if (ones > 0) {
            count += ones * lastOnes;
            lastOnes = ones;
        }
    }

    return count;
};