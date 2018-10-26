import Vue from 'vue';
import Vuex from 'vuex';
import mod1 from './modules/mod1/index';
import mod2 from './modules/mod2/index';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    mod1,
    mod2,
  },
});

export default store;
