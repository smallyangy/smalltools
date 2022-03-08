// 观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，当这个目标对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新。

// 观察者模式有一个“别名”，叫 发布-订阅模式，两者存在细微差异

// 发布者 与 订阅者

// 观察者模式的“套路”：角色划分 --> 状态变化 --> 发布者通知到订阅者，这就是观察者模式的“套路”。

// 定义发布者类
class Publisher {
    constructor() {
        this.observers = [];
    }

    add(observer) {
        this.observers.push(observer);
    }

    remove(observer) {
        const i = this.observers.indexOf(observer);
        if (i) this.observers.splice(i, 1);
    }

    notify() {
        this.observers.forEach(observer => {
            observer.update();
        })
    }
}

// 定义订阅者类
class Observer {
    constructor() {
        console.log()
    }
    update() {}
}

// 需求文档
class Prd extends Publisher {
    constructor(title) {
        super();
        console.log(title + '需求文档创建');
        this.observers = [];
        this.prdState = null;
    }

    setState() {
        this.prdState = 'start';
        console.log('需求变更');
        this.notify();
    }
}

// 开发人员
class Developer extends Observer {
    constructor(name) {
        super();
        console.log('创建开发者')
        this.name = name;
    }

    update() {
        this.work();
    }

    work() {
        console.log(this.name + '开始996');
    }
}

// const hmm = new Prd('第999次迭代');

// const dev1 = new Developer('小明');
// const dev2 = new Developer('小张');
// const dev3 = new Developer('小红');

// hmm.add(dev1);
// hmm.add(dev2);
// hmm.add(dev3);
// hmm.remove(dev2);

// hmm.setState();

/**
 * Vue 数据双向绑定的实现原理
 * 
 * 三个关键角色
 * - observer（监听器）：在Vue数据双向绑定的角色结构里，所谓的observer不仅是一个数据监听器，它还需要对监听到的数据进行转发——也就是说它同时还是一个发布者。
 * - watcher（订阅者）：observer把数据转发给了真正的订阅者——watcher对象。watcher接收到新的数据后，会去更新视图。
 * - compile（编译器）：MVVM框架特有的角色，负责对每个节点元素进行扫描和解析，指令的数据初始化、订阅者的创建这些“杂活”也归它管~
 */

// observer: 监听器
// watcher: 订阅者
// compile: 编译器

// observer方法遍历并包装对象属性
function observe(target) {
    // 若target是一个对象，则遍历它
    if (target && typeof target === 'object') {
        Object.keys(target).forEach(key => {
            defineReactive(target, key, target[key]);
        })
    }
}

// 定义defineReactive方法
function defineReactive(target, key, val) {
    const dep = new Dep();
    // 属性值也可能是object类型，这种情况下需要调用observer进行递归遍历
    observe(val);
    // 为当前属性安装监听器
    Object.defineProperty(target, key, {
        // 可枚举
        enumerable: true,
        // 不可配置
        configurable: false,
        get: function() {
            return val;
        },
        // 监听器函数
        set: function(value) {
            console.log(`${target}属性的${key}属性从${val}值变成了${value}`);
            dep.notify();
            val = value;
        }
    })
}

// 定义订阅者类Dep
class Dep {
    constructor() {
        // 初始化订阅队列
        this.subs = [];
    }
    // 增加订阅者
    addSub(sub) {
        this.subs.push(sub);
    }
    // 通知订阅者
    notify() {
        this.subs.forEach(sub => {
            sub.update();
        })
    }
}


/* 发布-订阅模式 */
// 实现一个Event Bus/Event Emitter
// 全局事件总线。

class EventEmitter {
    constructor() {
        this.handlers = [];
    }

    on(eventName, cb) {
        if (!this.handlers[eventName]) this.handlers[eventName] = [];
        this.handlers[eventName].push(cb);
    }

    emit(eventName, ...args) {
        if (this.handlers[eventName]) {
            const callbacks = this.handlers[eventName].slice();
            callbacks.forEach(cb => {
                cb(...args);
            });
        }
    }

    off(eventName, cb) {
        const handlers = this.handlers[eventName];
        if (handlers) {
            const index = handlers.indexOf(cb);
            if (index > -1) this.handlers[eventName].splice(index, 1);
        }
    }

    once(eventName, cb) {
        const wrapper = (...args) => {
            cb(...args);
            this.off(eventName, wrapper);
        };
        this.on(eventName, wrapper);
    }
}

const event = new EventEmitter();

const cb = a => console.log(a);

event.once('eventA', cb);

event.off('eventA', cb);

event.emit('eventA', 12);
event.emit('eventA', 33);

/* 观察者模式与发布-订阅模式的区别是什么？ */

// 发布者直接触及到订阅者的操作，叫观察者模式。
// 布者不直接触及到订阅者、而是由统一的第三方来完成实际的通信的操作，叫做发布-订阅模式。