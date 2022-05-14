class Solution {
    public boolean isValid(String s) {
        Stack stack = new Stack();
        for(int i=0; i < s.length(); i++) {
            String chart = String.valueOf(s.charAt(i));
            if (!stack.empty() && 
                (
                 (chart.equals(")") && stack.peek().equals("("))|| 
                 (chart.equals("}")  && stack.peek().equals("{"))|| 
                 (chart.equals("]") && stack.peek().equals("[")
)                )) {
                stack.pop();
            } else {
                stack.push(chart);
            }
        }
        
        return stack.empty();
    }
}