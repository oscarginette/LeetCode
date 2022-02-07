function countElements(nums: number[]): number {
    nums = nums.sort((a, b) => a-b);
    console.log(nums);
    let count = 0;
    let left = false;
    let right = false;
    for(let i = 1; i < nums.length; i++){
        for (let j = i-1; j >= 0; j--) {
            if (nums[j] < nums[i]) left = true;
        }
        for (let k = i+1; k < nums.length; k++) {
            if (nums[k] > nums[i]) right = true;
        }
        if (left && right) ++count;
        left = false;
        right = false;
    } 
    return count;
};