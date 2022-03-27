function intersect(nums1: number[], nums2: number[]): number[] {
    const list: number[] = [];
    if (nums1.length > nums2.length) {
        const aux = nums1;
        nums1 = nums2;
        nums2 = aux;
    }
    for (let i = 0; i < nums1.length; i++) {
        const index = nums2.indexOf(nums1[i]);
        if (index > -1) {
            list.push(nums1[i]);
            nums2.splice(index, 1);
        }
    }
    
    return list;
};