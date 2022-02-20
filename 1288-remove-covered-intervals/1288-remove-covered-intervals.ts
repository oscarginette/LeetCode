function removeCoveredIntervals(intervals: number[][]): number {
    intervals = intervals.sort((a, b) => a[0]-b[0] || b[1]-a[1]);
    for (let i = 0; i < intervals.length - 1; i++) {
        for (let j= i+1; j < intervals.length; j++) {
            if (aCoversB(intervals[i], intervals[j])) {
                intervals.splice(j, 1);
                --j;
            }
        }
    } 
    
    return intervals.length;
};

function aCoversB(a: number [], b: number []): boolean {
    return a[0] <= b[0] && a[1] >= b[1];
}