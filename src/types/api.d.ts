declare namespace api {
    interface RequestData {
        [key: string]: any;
    }
    interface ResponseData<T> {
        code: number;
        message: string;
        data: T
    }

    namespace test {
        // 请求参数
        interface plusParams {
            a: number;
            b: number;
        }
        // 返回数据
        interface plusData extends plusParams {
            result: number;
        }
        // 数据response
        interface plusResponse {
            data: plusData
        }
    }
}