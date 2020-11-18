// 写出下面代码的执行结果

console.log(1);
// setTimeout(() => {
//     console.log(2);
//     process.nexTick(() => {
//         console.log(3)
//     })
// })
process.nextTick(() => {
    console.log(6);
})
new Promise((resolve) => {
    console.log(4);
    resolve();
}).then(() => {
    console.log(5);
})
new Promise((resolve) => {
    console.log(7);
    resolve();
}).then(() => {
    console.log(8);
})
// process.nextTick(() => {
//     console.log(6);
// })
setTimeout(() => {
    console.log(2);
    process.nextTick(() => {
        console.log(3)
    })
})
setTimeout(() => {
    console.log(9);
    process.nextTick(() => {
        console.log(10);
    })
    new Promise((resolve) => {
        console.log(11);
        resolve()
    }).then(() => {
        console.log(12);
    })
})


// res: 1 -> 6 -> 4 -> 7 -> 5 -> 8 -> 2 -> 9 -> 3 -> 10 -> 11 -> 12

// log: 1 -> 4 -> 7 -> 6 -> 5 -> 8 -> 2 -> 3 -> 9 -> 11 -> 10 -> 12

//由此可以 每答对主要是 由于 不理解 process.nextTick() 

// res: 1 -> 4 -> 7 -> 5 -> 8 -> 2 -> 9 ->  11 -> 12

// log: 1 -> 4 -> 7 -> 5 -> 8 -> 2 ->  9 -> 11 -> 12

// process.nextTick() 方法可以在当前 "执行栈" 的尾部 --> 下一次 Event Loop (主线程读取"任务队列")之前 -->
// 触发 process 指定的回调函数。也就是说，它指定的任务总是发生在所有异步任务之前，当前主线程的末尾。
// nextTick 虽然也会异步执行，但是不会给其他 io 事件执行的任何机会