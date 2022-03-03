function numberOfArithmeticSlices(nums: number[]): number {
    if (nums.length < 3) return 0;
    let cont = 0;
    let isSub = false;
    for (let i = 1, j = 2; i <= nums.length-2; i++, j++) {
        let sub = nums[j-1] - nums[i-1];
        if (nums[j] - nums[i] === sub) {
            isSub = true;
            ++cont;
            let k = j+1;
            while (isSub && k < nums.length) {
                nums[k] - nums[k-1] === sub ? ++cont : isSub = false;
                ++k;
            }
        } else {
            sub = nums[j] - nums[i];
        }
    }
    
    return cont;
};