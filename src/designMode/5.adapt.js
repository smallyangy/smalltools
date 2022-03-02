// fetch
class HttpUtils {
    // get
    static get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
        });
    }

    // post
    static post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded', 
                },
                body: this.changeData(data),
            })
            .then(res => res.json())
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
        });
    }

    // body格式化方法
    static changeData(obj) {
        let prop;
        let str = '';
        for (prop in obj) {
            str += `${prop}=${obj[prop]}&`;
        }
        // 去掉末尾&
        str = str.substring(0, str.length - 1);
        return str;
    }
}

function Ajax(type, url, data, success, failed) {
    // 创建ajax对象
    let xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
 
    //    ...(此处省略一系列的业务逻辑细节)
   
    var type = type.toUpperCase();
    
    // 识别请求类型
    if (type == 'GET') {
        if (data) {
            xhr.open('GET', url + '?' + data, true); // 如果有数据就拼接
        } 
        // 发送get请求
        xhr.send();
    } else if (type == 'POST') {
        xhr.open('POST', url, true);
        // 如果需要像 html 表单那样 POST 数据，使用 setRequestHeader() 来添加 http 头。
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // 发送post请求
        xhr.send(data);
    }
 
    // 处理返回数据
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                success(xhr.responseText);
            } else if (failed) {
                failed(xhr.status);
            }
        }
    };
}

async function AjaxAdapt(type, url, data, success, failed) {
    const methodType = type.toUpperCase();
    let result;
    try {
        if (methodType === 'GET') {
            result = await HttpUtils.get(url);
        } else if (methodType === 'POST') {
            result = await HttpUtils.post(url, data);
        }
        result.statusCode === 1 && success ? success(result) : failed(result.statusCode);
    } catch (err) {
        failed && failed(err);
    }
}