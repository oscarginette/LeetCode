function maximumWealth(accounts: number[][]): number {
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        const red = accounts[i].reduce((a,b) => a + b);
        if (red > max) max= red;
    }
    return max;
};