import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:9010',
    timeout: 10000,
});

// const handleResponse = (res) => res.data;

// axios封装，传入data的类型
async function request<T>(options: AxiosRequestConfig) {
    return instance.request<api.ResponseData<T>>(options).then((res) => res.data);
}

// GET 请求
const get = async <T>(url: string, obj: api.RequestData) => {
    const options: AxiosRequestConfig = {
        url,
        method: 'GET',
        params: obj,
    };

    return request<T>(options);
};

// POST 请求
const post = async <T>(url: string, obj: api.RequestData) => {
    const options: AxiosRequestConfig = {
        url,
        method: 'POST',
        data: obj,
    };

    return request<T>(options);
};

const http = {
    get,
    post,
};

export default http;