/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let cont = 1;
    let i = 0;
    while (i < nums.length - cont) {
        if (nums[i] === 0) {
            moveToEnd(nums, i, nums.length - cont);
            ++cont;
        }
        else i++;
    }
};

function moveToEnd(nums: number[], index: number, end: number) {
    while (index < end) {
        const temp = nums[index];
        nums[index] = nums[index+1];
        nums[index+1] = temp;
        ++index;
    }
    
} 
