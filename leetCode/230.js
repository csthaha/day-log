
var kthSmallest = function(root, k) {
    if(!root) return -1;
    var arr = [];
    function tree(root) {
        root.left && tree(root.left) 
        root.right && arr.push(root.right) 
        arr.push(root);
    }
    tree(root);
    arr.sort((a,b) => a-b)
    return arr[k - 1]
};

var kthSmallest1 = function(root, k) {
    if(!root) return -1;
    var  i = k, res = 0;
    function tree(root) {
        root.left && tree(root.left) 
        i = i - 1;
        if(i == 0) {
            res = root.val
        }
        if(i < 0) return
        root.right && tree(root.right)
        
        // arr.push(root.val);
    }
    tree(root);
    // arr.sort((a,b) => a-b)
    // return arr[k - 1]
    return res
};

console.log(kthSmallest())