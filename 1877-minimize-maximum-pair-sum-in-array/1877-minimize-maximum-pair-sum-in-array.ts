function minPairSum(nums: number[]): number {
    nums = nums.sort((a,b) => a - b);
    let max = 0;
    for (let i = 0;i < nums.length/2; i++) {
        const sum = nums[i]+nums[nums.length - 1 - i];
        if (sum > max) max = sum;
    }
    
    return max;
};