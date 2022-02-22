function flipAndInvertImage(image: number[][]): number[][] {
    const matrix: number[][] = [];
    for (let row = 0; row < image.length; row++) {
        let list: number[] = [];
        for (let j = image.length - 1; j >= 0 ; j--) {
            list.push(image[row][j] === 0 ? 1 : 0);
        }
        matrix.push(list);
    }
    return matrix;
};