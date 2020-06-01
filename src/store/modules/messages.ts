import { Module, VuexModule, Action, Mutation, getModule } from 'vuex-module-decorators';
import store from '@/store/store';

export interface Message {
    content: string;
}

export interface Messages {
    messages: Message[];
}

@Module({ dynamic: true, store, name: 'messages', namespaced: true })
class MessageModule extends VuexModule implements Messages {
    public messages: Message[] = [{content: 'hello world'}];
    @Mutation
    public ADD(message: Message) {
        this.messages.push(message);
    }

    @Mutation
    public REMOVE(message: Message) {
        this.messages = this.messages.filter((e: Message) => e.content !== message.content);
    }

    @Action({})
    public add(message: Message) {
        this.ADD(message);
    }

    @Action({})
    public remove(message: Message) {
        this.REMOVE(message);
    }
}

export default getModule(MessageModule);
