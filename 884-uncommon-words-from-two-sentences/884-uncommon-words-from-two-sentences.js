/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    var arr = A.concat(' ',B).split(' ')
    var objArr = {}
    var ans = []
    for(let word of arr){
        objArr[word] = (objArr[word] || 0) + 1
    }

    for(let o in objArr){
        if(objArr[o] == 1) ans.push(o)
    }
    return ans
};