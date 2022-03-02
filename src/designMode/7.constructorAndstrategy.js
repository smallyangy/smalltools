/* 策略模式 */

// 预售价-pre
function preSLG(price) {
    return price >= 100 ? price - 20 : price * 0.9;
}
// 大促价-onSale
function onSaleSLG(price) {
    return price >= 100 ? price - 30 : price * 0.8;
}
// 返厂价-back
function backSLG(price) {
    return price >= 200 ? price - 50 : price;
}
// 尝鲜价-fresh
function freshSLG(price) {
    return price * 0.5;
}

// 如果需要增加处理方法
/**
 * funcObj.xxx = function(price) {
 *      return xxxx;
 * }
 */
const funcObj = {
    pre: preSLG,
    onSale: onSaleSLG,
    back: backSLG,
    fresh: freshSLG,
};

function askPrice(tag, originPrice) {
    return funcObj[tag] ? funcObj[tag](originPrice) : originPrice;
}

console.log(askPrice('pre', 200));

// 状态模式
// 策略模式和状态模式确实是相似的，它们都封装行为、都通过委托来实现行为分发。
// 但策略模式中的行为函数是”潇洒“的行为函数，它们不依赖调用主体、互相平行、各自为政，井水不犯河水。
// 而状态模式中的行为函数，首先是和状态主体之间存在着关联，由状态主体把它们串在一起；
/**
 * - 美式咖啡(american)：黑咖啡
 * - 普通拿铁(latte)：黑咖啡 + 奶
 * - 香草拿铁(vanillaLatte)：黑咖啡+奶+香草
 * - 摩卡咖啡(mocha)：黑咖啡+奶+巧克力
 */

class CoffeeMaker {
    constructor() {
        this.state = 'init';
        // 初始化牛奶的存储量
        this.leftMilk = '500ml';
    }

    // 把状态-行为映射对象作为主体类对应实例的一个属性添加进去就行了

    stateToProcessor = {
        american: () => {
            this.americanProcess();
        },
        latte: () => {
            this.latteProcess();
        },
        vanillaLatte: () => {
            this.vanillaLatteProcess();
        },
        mocha: () => {
            this.mochaProcess();
        },
    }

    changeState(state) {
        this.state = state;
        if (!this.stateToProcessor[state]) return;
        this.stateToProcessor[state]();
    }

    // 美式咖啡
    americanProcess() {
        console.log('产生一杯黑咖啡');
    }

    // 普通拿铁
    latteProcess() {
        this.americanProcess();
        console.log('加奶');
    }

    // 香草拿铁
    vanillaLatteProcess() {
        this.latteProcess();
        console.log('加香草');
    }

    // 摩卡咖啡
    mochaProcess() {
        this.latteProcess();
        console.log('加巧克力');
    }
}

const mk = new CoffeeMaker();
mk.changeState('vanillaLatte');

// 状态模式(State Pattern) ：允许一个对象在其内部状态改变时改变它的行为，对象看起来似乎修改了它的类。
// 状态模式主要解决的是当控制一个对象状态的条件表达式过于复杂时的情况。把状态的判断逻辑转移到表示不同状态的一系列类中，可以把复杂的判断逻辑简化。