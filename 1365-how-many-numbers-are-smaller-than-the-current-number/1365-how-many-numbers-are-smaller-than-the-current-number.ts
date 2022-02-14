function smallerNumbersThanCurrent(nums: number[]): number[] {
    const solution: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        let cont = 0;
        for (let j = 0; j < nums.length; j++) {
            if ( i !== j &&  nums[j] < nums[i]) ++cont;
        }
        solution.push(cont);
    }
    
    return solution;
};