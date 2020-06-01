import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { messages } from './Message/store';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {},
  modules: {
    messages,
  },
};

export default new Vuex.Store<RootState>(store);
