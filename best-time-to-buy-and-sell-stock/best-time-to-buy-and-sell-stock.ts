function maxProfit(prices: number[]): number {
    let minprice: number = Number.MAX_SAFE_INTEGER;
    let maxprofit: number = 0;
    for (let i = 0; i <= prices.length; i++) {
        if (prices[i] < minprice) {
            minprice = prices[i];
        }
        else if(prices[i] - minprice > maxprofit) {
            maxprofit = prices[i] - minprice;
        }
    }
    return maxprofit;
};