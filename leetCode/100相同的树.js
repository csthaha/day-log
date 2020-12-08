/**
 * leetcode 100 相同的树
 * 
 */

 var isSameTree = (p, q) => {
    if(p == null && q == null) return true;
    if(p !== null || q !== null) return false;
    if(p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
 }