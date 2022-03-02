function User(name, age, career, work) {
    this.name = name;
    this.age = age;
    this.career = career;
    this.work = work;
}

function Factory(name, age, career) {
    let work = [];
    switch (career) {
        case 'coder':
            work = ['1', '2', '3'];
            break;
        case 'product manager':
            work = ['4', '5', '6'];
            break;
    }

    return new User(name, age, career, work);
}

// 简单工厂：将创建对象的过程单独封装。就是为了无脑传参

/* 抽象工厂 */
class MobilePhoneFactory {
    // 提供操作系统的接口
    createOS() {
        throw new Error('need rewrite');
    }

    // 提供硬件的接口
    createHardWare() {
        throw new Error('need rewrite');
    }
}

class OS {
    controlHardWare() {
        throw new Error('need rewrite');
    }
}

class HardWare {
    operateByOrder() {
        throw new Error('need rewrite');
    }
}

class FakeStarFactory extends MobilePhoneFactory {
    createOS() {
        // 提供安卓系统示例
        return new AndroidOS();
    }

    createHardWare() {
        // 提供高通硬件
        return new QualcommHardWare();
    }
}
class AndroidOS extends OS {
    controlHardWare() {
        console.log('安装安卓');
    }
}
class QualcommHardWare extends HardWare {
    operateByOrder() {
        console.log('使用高通');
    }
}

class IPhoneFactory extends MobilePhoneFactory {
    createOS() {
        return new AppleOS();
    }

    createHardWare() {
        return new M2HardWare();
    }
}

class AppleOS extends OS {
    controlHardWare() {
        console.log('使用IOS 15');
    }
}
class M2HardWare extends HardWare {
    operateByOrder() {
        console.log('使用M2芯片');
    }
}

const myPhone = new FakeStarFactory();
const myOS = myPhone.createOS();
const myHardWare = myPhone.createHardWare();
myOS.controlHardWare();
myHardWare.operateByOrder();

const myIphone = new IPhoneFactory();
const ipOS = myIphone.createOS();
const ipHardWare = myIphone.createHardWare();
ipOS.controlHardWare();
ipHardWare.operateByOrder();

// 对原有的系统不会造成任何潜在影响