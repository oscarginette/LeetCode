/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
//Recover binary search tree using constant space
class Solution {
    TreeNode firstNode;
    TreeNode secondNode; 
    TreeNode prevNode; 
    public void recoverTree(TreeNode root) {
        if(root==null)
            return;
        inorderTraversal(root);
        if(firstNode != null && secondNode != null){
            int temp = secondNode.val;
            secondNode.val = firstNode.val;
            firstNode.val = temp;
        }
    }
    private void inorderTraversal(TreeNode root){
        if(root==null)
            return;
        inorderTraversal(root.left);
        if(prevNode != null && root.val < prevNode.val && firstNode == null) {
            firstNode = prevNode;
        }
        if (prevNode != null && root.val < prevNode.val && firstNode != null) {
            secondNode = root;
        }
        prevNode = root;
        inorderTraversal(root.right);
    }
}