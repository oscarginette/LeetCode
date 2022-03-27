function singleNumber(nums: number[]): number {
    let hash: {[key: number]: number} = {};
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]] = 0;
        }
    }
    
    return +Object.keys(hash).find(key => hash[key] === 1);
};