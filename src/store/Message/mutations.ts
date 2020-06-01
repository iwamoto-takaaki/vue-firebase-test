import { MutationTree } from 'vuex';
import { Messages, Message } from '@/store/types';

const mutations: MutationTree<Messages> = {
    add: (state, message: Message) => {
        state.messages.push(message);
    },
    remove: (state, message: Message) => {
        state.messages = state.messages.filter((e: Message) => e.content !== message.content);
    },
};

export default mutations;
