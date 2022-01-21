/**
 * 兼容性剪切板
 * import clipboard from '@/utils/clipboard'
 * clipboard.setClipboard({
    data: '',
    success () {
        uni.showToast({
            title: '微信号已复制'
        });
    }
});
 */

interface clipboardData {
    data: string
    success?: () => any
    fail?: () => any
    complete?: () => any
}

function h5ClipboardData({
    data,
    success,
    fail,
    complete,
}: clipboardData) {
    try {
        // 创建textarea标签用来复制内容
        const textarea: HTMLTextAreaElement = document.createElement('textarea');
        // 设置成 readonly
        textarea.readOnly = true;
        // 隐藏
        textarea.style.position = 'absolute';
        textarea.style.opacity = '0';
        textarea.value = data;
        // 插入body
        document.body.appendChild(textarea);
        // 选中内容
        textarea.select();
        // 执行复制命令
        const result = document.execCommand('Copy');
        if (result) {
            success && success();
        }
    } catch (_) {
        fail && fail();
    } finally {
        complete && complete();
    }
}

/**
 * 设置剪切板
 * @param {String} data 数据
 * @param {Function} success 成功回调函数
 * @param {Function} fail 失败回调函数
 * @param {Function} complete 完成回调函数
 */
const setClipboard = ({
    data,
    success,
    fail,
    complete,
}: clipboardData) => {
    h5ClipboardData({
        data,
        success,
        fail,
        complete,
    });
};

const clipboard = {
    setClipboard,
};

export default clipboard;
