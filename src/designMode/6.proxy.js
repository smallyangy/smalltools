/* 代理模式 */

// Proxy
// const proxy = new Proxy(obj, handler)

const girl = {
    // 姓名
    name: '小美',
    // 自我介绍
    aboutMe: '....',
    age: 24,
    career: 'teacher',
    fakeAvatar: '新垣结衣',
    avatar: '凤姐',
    phone: '1360000000',
    presents: [],
    bottomValue: 50,
    lastPresent: null,
};

const baseInfo = ['age', 'career'];
const privateInfo = ['avatar', 'phone'];

// 用户
const user = {
    isValidated: false,
    isVIP: false,
};

const loverHouse = new Proxy(girl, {
    get(girl, key) {
        if (baseInfo.includes(key) && !user.isValidated) {
            console.log('还没完成验证哦');
            return;
        }
        if (user.isValidated && privateInfo.includes(key) && !user.isVIP) {
            console.log('只有VIP才可以查看该信息哦');
            return;
        }
        if (!baseInfo.includes(key) && !privateInfo.includes(key)) {
            return girl[key];
        }
    },
    set(girl, key, val) {
        if (key === 'lastPresent') {
            if (val.value < girl.bottomValue) {
                console.log('sorry 您的礼物被拒收了');
                return;
            }

            girl.lastPresent = val;
            girl.presents.push(val);
        }
        return girl[key];
    },
});

// 事件代理
// const father = document.querySelector('#father');

// father.addEventListener('click', (ev) => {
//     const target = findTarget(ev.target, 'href');
//     console.log(target.getAttribute('data-num'));
//     ev.preventDefault();
// });

// function findTarget(target, className) {
//     if (target.className === className) return target;
//     return findTarget(target.parentElement, className);
// }

// 虚拟代理

class PreLoadImage {
    constructor(imgNode) {
        this.imgNode = imgNode;
    }

    setSrc(imgUrl) {
        this.imgNode.src = imgUrl;
    }
}

class ProxyImage {
    static loadingImg = 'xxxx';

    constructor(targetImge) {
        this.targetImge = targetImge;
    }

    setSrc(targetUrl) {
        this.targetImge.setSrc(ProxyImage.loadingImg);
        const virtualImage = new Image();
        virtualImage.onload = () => {
            this.targetImge.setSrc(targetUrl);
        };
        virtualImage.src = targetUrl;
    }
}

// 缓存代理

const addAll = function () {
    console.log('进行了一次新计算');
    let result = 0;
    const len = arguments.length;
    for (let i = 0; i < len; i++) {
        result += arguments[i];
    }
    return result;
};

const proxyAddAll = (function () {
    const resultCache = {};
    return function () {
        const args = Array.prototype.join.call(arguments, ',');
        if (args in resultCache) return resultCache[args];
        return resultCache[args] = addAll(...arguments);
    };
}());

const proxyArg = (function () {
    const resultObj = {};
    return function (fn, ...args) {
        const key = args.join(',');

        if (key in resultObj) return resultObj[key];
        return resultObj[key] = fn.apply(this, args);
    };
}());

// proxyArg(addAll, 1, 2, 3, 4);
// console.log(proxyArg(addAll, 1, 2, 3));
// console.log(proxyArg(addAll, 1, 2, 3));

// 保护代理
// proxy

