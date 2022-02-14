import { defineStore } from 'pinia';

interface UserInfo {
    name: string;
    role: string;
    tel: number;
}

const userInfo: UserInfo = {
    name: '',
    role: '',
    tel: 0,
};

export const useUserStore = defineStore('user', {
    state: () => ({
        userInfo,
    }),
    actions: {
        updateUserInfo(info: UserInfo) {
            this.userInfo = info;
        },
    },
});