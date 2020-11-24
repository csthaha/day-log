var minWindow = function(s, t) {
    var need = {}, window = {};
    for(let ele of t) {
        need.hasOwnProperty(ele) ? need[ele]++ : need[ele] = 1;
    }
    var left = 0, right = 0, valid = 0;
    var start = 0, len = Number.MAX_VALUE;
    while(right < s.length) {
        var c = s[right];
        right++;  // 右移动窗口
        if(need[c]) {
            if(!window[c]) {
                window[c] = 1;
            } else {
                window[c]++
            }
            if(window[c] == need[c]) valid++;
        }
        // 判断左侧窗口是否要收缩
        while(valid == Object.keys(need).length) {
            // 在这里更新最小覆盖字串
            if(right - left < len) {
                start = left;
                len = right - left;
            }

            var d = s[left]; // 将要移除的窗口字符
            left++;
            if(need[d]) {
                if(window[d] == need[d]) {
                    valid --;
                }
                window[d]--
            }
        }
    }
    return len == Number.MAX_VALUE ? "" : s.substr(start, len)
};

console.log(minWindow("ADOBECODEBANC", "ABC"));