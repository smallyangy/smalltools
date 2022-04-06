import http from './httpUtils';

const testPlus = (params: api.test.plusParams) => http.post<api.test.plusResponse>('/test/test-plus', params);

export {
    testPlus,
};