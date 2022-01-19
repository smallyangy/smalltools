import { createStore } from 'vuex';
import user from './user';
import system from './system';

const store = createStore({
    modules: {
        user,
        system,
    },
    state: {
        
    },
    mutations: {},
    actions: {},
    getters: {},
});

export default store;