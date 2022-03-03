class Solution {
public:
    string largestOddNumber(string num) {
        return num.substr(0, num.find_last_not_of("0|2|4|6|8") + 1);
    }
};