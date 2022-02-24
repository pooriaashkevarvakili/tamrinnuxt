import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
    },
    actions: {
      nuxtServerUnit(vuexContext, context) {},
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts");
      },
    },
  });
};
export default createStore;
