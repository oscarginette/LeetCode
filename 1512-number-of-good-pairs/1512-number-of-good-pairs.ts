function numIdenticalPairs(nums: number[]): number {
    let cont = 0;
    for (let i = 0; i < nums.length; i++){
        for (let j =i; j< nums.length; j++) {
            if ( i < j && nums[i] === nums[j]) ++cont;
        }
    }
    
    return cont;
};