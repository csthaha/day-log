var subsets = function(nums) {
    var res = []
    var backTrack = (path, index) => {
        if(path.length <= nums.length) {
            res.push(path);
        }
        for(let i = index; i < nums.length; i++) {
            if(!path.includes(nums[i])) {
                path.push(nums[i])
                backTrack(path.slice(), i + 1);
                path.pop()
            }
        }
    }
    backTrack([], 0)
    return res;
};

console.log(subsets([1,2,3]));