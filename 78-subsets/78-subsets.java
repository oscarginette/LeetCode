class Solution {
    List<List<Integer>> res = new ArrayList<List<Integer>>();
    public List<List<Integer>> subsets(int[] nums) {
        if (nums.length == 0) return res;
        
        bt(0, new ArrayList<Integer>(), nums);
        return res;
    }
    
    public void bt(int start, ArrayList<Integer> curr, int[] nums) {
        res.add(new ArrayList<Integer>(curr));
        for (int i= start; i<nums.length;i++) {
            curr.add(nums[i]);
            bt(i+1, curr, nums);
            curr.remove(curr.size()-1);
        }
    }
}