function findFinalValue(nums: number[], original: number): number {
    let found = true;
    while(found){
        if (nums.includes(original)) original += original;
        else found = false;
    }
    return original;
};