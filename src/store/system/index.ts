const state = {
    counter: 0,
};

const mutations = {
    UPDATE_COUNTER(state: { counter: number; }, num: any) {
        state.counter = num;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
};