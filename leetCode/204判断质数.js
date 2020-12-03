/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    var isPrime = (num) => {
        if (num <= 1) return false;
        if (num === 2) return true
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false
        }
        return true;
    }
    let res = 0;
    for (let i = 1; i < n; i++) {
        isPrime(i) ? res++ : ''
    }
    return res;
};

console.log(countPrimes(0));

console.log(countPrimes(1));
console.log(countPrimes(2));