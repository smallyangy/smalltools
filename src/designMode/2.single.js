/* 单例模式 */
// 保证一个类仅有一个实例，并提供一个访问它的全局访问点，这样的模式就叫做单例模式。

// 实现Storage，使得该对象为单例，基于 localStorage 进行封装。实现方法 setItem(key,value) 和 getItem(key)。

class Storage {
    constructor() {
        this.store = {};
    }

    static getInstance() {
        if (!Storage.instance) Storage.instance = new Storage();
        return Storage.instance;
    }

    getItem(key) {
        return this.store[key];
    }

    setItem(key, value) {
        this.store[key] = value;
    }
}

const s1 = Storage.getInstance();

s1.setItem('a', 12);

const s2 = Storage.getInstance();

console.log(s1 === s2);

console.log(s2.getItem('a'));