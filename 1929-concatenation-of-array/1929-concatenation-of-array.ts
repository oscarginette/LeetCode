function getConcatenation(nums: number[]): number[] {
    let ans: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i];
        ans[i + nums.length] = nums[i];
    }
    return ans;
};