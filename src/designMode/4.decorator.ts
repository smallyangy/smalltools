/* 装饰器 */

// 在不改变原对象的基础上，通过对其进行包装拓展，使原有对象可以满足用户的更复杂需求。

// const Modal = (function () {
//     let modal = null;
//     return function () {
//         if (!modal) {
//             modal = document.createElement('div');
//             modal.innerHTML = '您还未登录哦';
//             modal.id = 'modal';
//             modal.style.display = 'none';

//             document.body.appendChild(modal);
//         }
//         return modal;
//     };
// }());

// function openModal() {
//     const modal = new Modal();
//     modal.style.display = 'block';
// }

// function changeBtnText() {
//     const btn = document.querySelector('#open');
//     btn.innterText = '快去登录';
// }

// function disableBtn() {
//     const btn = document.querySelector('#open');
//     btn.setAttribute('disabled', true);
// }

// function changeBtnStatus() {
//     changeBtnText();
//     disableBtn();
// }

// // 点击打开
// document.querySelector('#open').addEventListener('click', () => {
//     openModal();
//     changeBtnStatus();
// });

// // 点击关闭
// document.querySelector('#close').addEventListener('click', () => {
//     const modal = document.querySelector('#modal');
//     if (modal) {
//         modal.style.display = 'none';
//     }
// });

// // ES6

// class OpenButton {
//     onClick() {
//         const modal = new Modal();
//         modal.style.display = 'block';
//     }
// }

// class Decorator {
//     constructor(openBtn) {
//         this.openBtn = openBtn;
//     }

//     onClick() {
//         this.openBtn.onClick();
//         this.changeBtnStatus();
//     }

//     changeBtnStatus() {
//         this.changeBtnText();
//         this.disableBtn();
//     }

//     changeBtnText() {
//         this.openBtn.innerHTML = '快去登录';
//     }

//     disableBtn() {
//         this.openBtn.setAttribute('disabled', true);
//     }
// }

// const openBtn = new OpenButton();
// const decorator = new Decorator(openBtn);

// document.querySelector('#open').addEventListener('click', () => {
//     decorator.onClick();
// });

/* ES7中的装饰器 */

// 装饰类
function classDecorator(target) {
    target.hasDecorator = true;
    return target;
}

function funcDecorator(target, name, descriptor) {
    const oldFunc = descriptor.value;
    descriptor.value = function () {
        console.log('我是Button新的逻辑');
        return oldFunc.apply(this, arguments);
    };
    return descriptor;
}

@classDecorator
class Button {
    @funcDecorator
    onClick(text) {
        console.log('我是Button的原有逻辑 ' + text);
    }
}

const btn = new Button();

console.log(Button.hasDecorator);
btn.onClick('123');
