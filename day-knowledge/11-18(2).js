function side(arr) {
    arr[0] = arr[2];
}

function a(a, b, c = 3) {
    c = 10;
    // console.log('arguments:',arguments)
    side(arguments);
    return a + b + c;
}
console.log(a(1, 1, 1))

var min = Math.min();
max = Math.max();
console.log('min is: ', min, 'max is: ', max, min < max);