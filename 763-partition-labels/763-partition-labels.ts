function partitionLabels(s: string): number[] {
    const list: number[] = [];
    let i = 0
    while (i < s.length) {
        let last = s.lastIndexOf(s[i]);
        if (last > i) {
            for (let j = i+1; j < last; j++) {
                last = Math.max(last, s.lastIndexOf(s[j]));
            }
            list.push(last - i + 1);
            i = last + 1;
        } else {
            list.push(1);
            i++;
        }
    }
    return list;
};