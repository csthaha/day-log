var maxFreq = function(s, maxLetters, minSize, maxSize) {
    var sMap = {}, sub_s = '', sub_s_L = []
    

    let left = 0, right = 0

    while(right < s.length) {
        let size = right - left
        if(size > maxSize) {
            left += 1;
            sub_s = sub_s.slice(1)
        } else if(size >= minSize) {

            console.log(sub_s_L,'---', new Set(sub_s).length);
            if(new Set(sub_s).length <= maxLetters) {
                sub_s_L.push(sub_s)
            }
            left += 1
            sub_s = sub_s.slice(1)
        } else {
            sub_s += s[right]
            console.log(sub_s);
            right += 1;
        }
    }

    return sub_s_L

};

console.log(maxFreq("aababcaab", 2, 3, 4));