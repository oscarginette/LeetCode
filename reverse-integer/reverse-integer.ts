function reverse(x: number): number {
    let result: number = 0;
    let sign: number = x < 0 ? -1 : 1;
    x = Math.abs(x);
    while (x > 0) {
        result = result * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    const res = result * sign;
    if (res > 2147483647 || res < -2147483648) {
        return 0;
    }
    return res;
};