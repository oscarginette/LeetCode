function twoSum(numbers: number[], target: number): number[] {
    if (numbers.length === 2) return [1,2];
    
    const list: number[] = [];
    
    for (let i = numbers.length-1; i >= 0; i--) {
        if (target === 0 
            || (target > 0 && numbers[i] <= target)
            || (target < 0 && numbers[i] >= target)) {
            let j = i - 1;
            let found = false;
            while (!found && j >= 0) {
                if (numbers[i] + numbers[j] === target) {
                    list.push(j+1);
                    list.push(i+1);
                }
                --j;
                    
            }
        }
    }
    
    return list;
};