interface UserInfo {
    name: string;
    role: string;
    rel: number;
}

const state = {
    userInfo: {
        name: 'zhouyang',
        role: 'admin',
        tel: 123123,
    },
};

const mutations = {
    UPDATE_USER_INFO(state: {
        userInfo: UserInfo
    }, obj: UserInfo) {
        console.log(obj);
        state.userInfo = obj;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
};