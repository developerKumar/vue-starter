import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    todos: []
  },
  getters: {
    doneTodos: (state: any) => {
      return state.todos.filter((todo: any) => todo.done);
    }
  },
  mutations: {
    increment(state: any) {
      // mutate state
      state.count++;
    },
    incrementBy(state: any, payload: number) {
      // mutate state
      state.count += payload;
    }
  },
  actions: {
    // increment (context:any) {
    //   context.commit('increment')
    // }
  },
  modules: {}
});
