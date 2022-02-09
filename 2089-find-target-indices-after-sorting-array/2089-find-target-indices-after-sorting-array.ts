function targetIndices(nums: number[], target: number): number[] {
    const indexes = [];
    nums = nums.sort((a,b) => a-b);
    for(let i =0; i < nums.length; i++){
        if (nums[i] === target) indexes.push(i);
    }
    return indexes;
};