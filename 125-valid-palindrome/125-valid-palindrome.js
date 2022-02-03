/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let pal = s.toLowerCase().replace(/\s/g, '').replace(/[^a-zA-Z0-9]/g, '');
    if (!pal) return true;
    for(let i= 0; i < (pal.length -1) / 2; i++){
        if (pal[i] !== pal[pal.length-1-i]) return false;
    }
    return true;
};