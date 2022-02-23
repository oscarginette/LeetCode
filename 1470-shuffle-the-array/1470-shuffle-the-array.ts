function shuffle(nums: number[], n: number): number[] {
    let list = [];
    for (let i = 0; i < n; i++) {
        list.push(nums[i]);
        list.push(nums[n+i]);
    }
    
    return list;
};