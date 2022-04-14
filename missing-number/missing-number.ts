function missingNumber(nums: number[]): number {
    const sum = nums.reduce((a, b) => a + b);
    const total = (nums.length * (nums.length+1)) / 2;
    return total - sum;
};