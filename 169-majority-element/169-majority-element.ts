function majorityElement(nums: number[]): number {
    if (nums.length < 3) return nums[0];
    let mapp: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++){
        if (!mapp.get(nums[i])) mapp.set(nums[i], 0);
        if (mapp.get(nums[i])+1 >= (nums.length / 2)) return nums[i];
        mapp.set(nums[i], mapp.get(nums[i])+1);
    }
    return 0;
};