function countPoints(points: number[][], queries: number[][]): number[] {
    let list: number[] = [];
    // (x - center_x)² + (y - center_y)² <= radius²
    for (let i=0; i< queries.length; i++) {
        let circle = queries[i];
        let numberOfPoints = 0;
        for (let j = 0; j < points.length; j++) {
            let point = points[j];
            if (Math.pow(point[0] - circle[0], 2) + Math.pow(point[1] - circle[1], 2) <= Math.pow(circle[2], 2))
                numberOfPoints++;
        }
        list.push(numberOfPoints);
    }
        
    return list;
};