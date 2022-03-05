function sortedSquares(nums: number[]): number[] {
    let list: number[] = []; 
    let i = 0;
    let j = nums.length - 1;
    for (let p = nums.length - 1; p >= 0; p--) {
        if (Math.abs(nums[i]) > Math.abs(nums[j])) {
            list[p] = nums[i] * nums[i];
            i++;
        } else {
            list[p] = nums[j] * nums[j];
            j--;
        } 
    }
    
    return list;
};