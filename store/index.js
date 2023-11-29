// index.js
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import memo from './memo'; // memoモジュールのインポート

export const state = () => ({
  message: 'count number',
  counter: 0,
})

export const mutations = {
  doit(state) {
    var n = Math.floor(Math.random() * 10);
    state.counter += n;
    state.message = 'add ' + n;
  },
  reset(state) {
    state.counter = 0;
    state.message = 'reset now';
  },
}

export const plugins = [
  createPersistedState(),
]

// Vuexストアの作成
const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
    modules: {
      memo // memoモジュールの登録
    },
    plugins
  });
}

export default createStore;
