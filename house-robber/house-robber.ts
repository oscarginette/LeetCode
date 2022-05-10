function rob(nums: number[]): number {
    let pair = 0;
    let odd = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) pair = Math.max(pair+nums[i], odd);
        else odd = Math.max(odd+nums[i], pair);;
    }
    
    return Math.max(pair, odd);
};