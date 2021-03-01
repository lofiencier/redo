import vuex from 'vuex';
import Vue from 'vue';

Vue.use(vuex);

const store = new vuex.Store({
  state: {
    count: 0,
    data: {
      status: 1
    }
  },
  mutations: {
    increment: (state, num = 1) => {
      
      state.count = state.count + num;
    }
  },
  getters: {
    getDdCount: state => (times = 2) => {
      return state.count * times;
    }
  },
  actions: {
    incrementAction: async({ commit }) => {
      const num = await new Promise((res, rej) => setTimeout(() => res(1), 2000));
      console.log('???!');
      commit('increment', num);
    }
  }
});

export default store;