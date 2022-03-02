/* 原型模式 */
// 原型模式不仅是一种设计模式，它还是一种编程范式

// 原型链拷贝——深拷贝

function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;

    let copy = {};

    if (obj instanceof Array) {
        copy = [];
    }

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) copy[key] = deepClone(obj[key]);
    }

    return obj;
}

const obj1 = {
    a: 12,
};

const obj2 = deepClone(obj1);

console.log(obj2);