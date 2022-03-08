function reverseWords(s: string): string {
    let list = s.split(' ');
    let result = '';
    list.forEach((word, index) =>  {
        const a = word.split('');
        const b = a.reverse();
        result = result + b.join('');
        if (index !== list.length - 1) result += ' ';
    });
    return result;
};