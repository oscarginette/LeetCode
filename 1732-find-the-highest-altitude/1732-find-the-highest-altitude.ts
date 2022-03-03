function largestAltitude(gain: number[]): number {
    let max = 0;
    let count = 0;
    gain.forEach(level => {
        count += level;
        if (count > max) max = count;
    });
    
    return max;
};