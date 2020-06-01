import { ActionTree } from 'vuex';
import { RootState, Messages, Message } from '@/store/types';

const actions: ActionTree<Messages, RootState> = {
  add: async ({ commit }, message: Message) => {
    commit('add', message);
    return true;
  },

  remove: async ({ commit }, id: string ) => {
    commit('remove', id);
    return true;
  },

};

export default actions;
