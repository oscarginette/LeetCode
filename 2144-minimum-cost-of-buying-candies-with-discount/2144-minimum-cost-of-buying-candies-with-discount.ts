function minimumCost(cost: number[]): number {
    if (cost.length > 2) {
        cost = cost.sort((a,b) => b - a);
        for (let i = 0; i < cost.length-2 ; i+=2) {
            if ((cost[i] >= cost[i+2]) && (cost[i+1] >= cost[i+2])) 
                cost.splice(i+2, 1);
        } 
    }
    return cost.reduce((partialSum, a) => partialSum + a, 0);;
};