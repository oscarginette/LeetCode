function searchInsert(nums: number[], target: number): number {
    return search(nums, 0, nums.length - 1, target);
};

function search(nums: number[], L: number, R: number, target: number) {
    if (L > R) return L;
    const mid = Math.floor((L+R) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) return search(nums, mid + 1, R, target);
    return search(nums, L, mid - 1, target);
}