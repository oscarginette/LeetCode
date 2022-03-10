function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    const startingColor = image[sr][sc];
    if (startingColor === newColor) return image;
    return fill(image, sr, sc, startingColor, newColor);
};

function fill(image: number[][], sr: number, sc: number, startingColor: number, newColor: number): number[][] {
    if (image[sr][sc] === startingColor) {
        image[sr][sc] = newColor;
        if (sr > 0 && image[sr-1][sc] === startingColor) fill(image, sr-1, sc, startingColor, newColor);
        if (sr < image.length-1 && image[sr+1][sc] === startingColor) fill(image, sr+1, sc, startingColor, newColor);
        if (sc > 0 && image[sr][sc-1] === startingColor) fill(image, sr, sc-1, startingColor, newColor);
        if (sc < image[0].length-1) fill(image, sr, sc+1, startingColor, newColor);
    }
    
    return image;
}