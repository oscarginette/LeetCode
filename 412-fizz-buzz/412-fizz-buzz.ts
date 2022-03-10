function fizzBuzz(n: number): string[] {
    let ans = [];
    for (let i = 1; i <= n; i++) {
        if (i==1 || i==2) ans.push(i.toString());
        else if (i%3 === 0 && i%5 === 0) ans.push('FizzBuzz');
        else if (i%3 === 0) ans.push('Fizz');
        else if (i%5 === 0) ans.push('Buzz');
        else ans.push(i.toString());
    }
    return ans;
};