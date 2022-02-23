function groupThePeople(groupSizes: number[]): number[][] {
    let map: {[key: number]: number[]} = {};
    let list = []; 
    for (let i=0; i < groupSizes.length; i++) map[groupSizes[i]] = [];
    for (let i=0; i < groupSizes.length; i++) {
        const group = groupSizes[i];
        if (map[group].length < group) {
            map[group].push(i);
        }
        if (map[group].length === group) {
            list.push(Object.values(map[group]));
            map[group].length = 0;
        }
    }
    
    
    return list;
};