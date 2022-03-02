function findMinFibonacciNumbers(k: number): number {
    let vector: number[] = [1,1];
    let sum = 0;
    let i = 1;
    while (sum <= k) {
        sum = vector[i-1] + vector[i];
        vector.push(sum);
        i++;
    }
    
    let result: number = 0;
    i = vector.length - 1;
    while (k !== 0) {
        if (k - vector[i] >= 0) {
            k -= vector[i];
            result++;
        }
        i--;
    }
    
    return result;
};