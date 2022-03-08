import { defineStore } from 'pinia';

interface Storage {
    [x: string]: string | number
}

const prefix = 'pinia-storage-';

const storage: Storage = {
    width: localStorage.getItem(prefix + 'width') || '300',
    height: localStorage.getItem(prefix + 'width') || '200',
    count: localStorage.getItem(prefix + 'count') || 1,
    randomImg: localStorage.getItem(prefix + 'randomImg') || `{
        "width": 300,
        "height": 200,
        "count": 1
    }`,
};

export const useStorage = defineStore('storage', {
    state: () => ({
        storage,
    }),
    actions: {
        setItem(key: string, val: string) {
            localStorage.setItem(prefix + key, val);
            this.storage[key] = val;
        },
    },
    getters: {
        getItem(state) {
            return state.storage.width;
        },
    },
});