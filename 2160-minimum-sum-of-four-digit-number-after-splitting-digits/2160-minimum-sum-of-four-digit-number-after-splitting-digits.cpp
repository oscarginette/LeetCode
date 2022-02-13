class Solution {
public:
    int minimumSum(int num) {
        auto s = to_string(num);
        nth_element(begin(s), begin(s) + 1, end(s));
        return (s[0] + s[1]) * 10 + s[2] + s[3] - 1056;
    }
};