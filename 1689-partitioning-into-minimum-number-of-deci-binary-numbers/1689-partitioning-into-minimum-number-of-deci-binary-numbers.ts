function minPartitions(n: string): number {
    return Array.from(String(n), num => Number(num)).sort((a,b) => b-a).shift();
};