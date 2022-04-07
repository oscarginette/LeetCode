function lastStoneWeight(stones: number[]): number {  
    while (stones.length > 1) {
        stones = stones.sort((a, b) => b - a);
        if (stones[0] === stones[1]) stones.splice(0, 2);
        else stones.splice(0, 2, (stones[0] - stones[1]));
    }
    return stones && stones.length === 1 ? stones[0]: 0;
};