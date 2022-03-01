function countBits(n: number): number[] {
    const res: number[] = [];
    for (let i=0; i <= n; i++) {
        res.push(numberOfOnes(i));
    }
    return res;
};

function numberOfOnes(aux: number): number {
    if (aux === 0) return 0;
    if (aux < 3) return 1;
    let cont: number = 0;
    let rem;
    while (aux != 0) {
        rem = aux % 2;
        if (rem === 1) ++cont;
        aux = Math.floor(aux / 2);
    }
    return cont;
}