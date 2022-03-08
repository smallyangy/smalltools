/* 迭代器模式 */
// let str = '';
// for (let i = 0; i < 6; i++) {
//     str += `<a href="#">链接${i + 1}号</a>`;
// }
// document.body.innerHTML = str;

// const aNodes = document.getElementsByTagName('a');
// console.log(aNodes);

// for (let item of aNodes) {
//     console.log(item);
// }

// const arr = [1,2];

// const iterator = arr[Symbol.iterator]();

// let now = { down: false };

// while(!now.done) {
//     now = iterator.next();
//     if (!now.done) {
//         console.log()
//     }
// }

// function *iteratorGenerator() {
//     yield '1号选手';
//     yield '2号选手';
//     yield '3号选手';
// }

// const iterator = iteratorGenerator();

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// 生成器语法糖

function iteratorGenerator(list) {
    var idx = 0;
    var len = list.length;
    return {
        next: function() {
            var done = idx >= len;
            var value = done ? undefined : list[idx++];
            return {
                done,
                value
            }
        }
    }
}

var iterator = iteratorGenerator([1,2]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());