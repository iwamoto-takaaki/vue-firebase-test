import { Module, VuexModule, Action, Mutation, getModule } from 'vuex-module-decorators';
import store from '@/store/store';

export interface Message {
    id: number;
    content: string;
}

export interface Messages {
    currentId: number;
    messages: Message[];
}

@Module({ dynamic: true, store, name: 'messages', namespaced: true })
class MessageModule extends VuexModule implements Messages {
    public currentId: number = 0;
    public messages: Message[] = [];

    public created() {
        this.ADD('Hello world');
    }

    @Mutation
    public ADD(message: string) {
        this.messages.push({id: this.currentId++, content: message});
    }

    @Mutation
    public REMOVE(message: Message) {
        const index = this.messages.indexOf(message);
        if (index < 0) { return; }
        this.messages.splice(index, 1);
    }

    @Action({})
    public add(message: string) {
        this.ADD(message);
    }

    @Action({})
    public remove(message: Message) {
        this.REMOVE(message);
    }
}

export default getModule(MessageModule);
