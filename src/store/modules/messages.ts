import { Module, VuexModule, Action, Mutation, getModule } from 'vuex-module-decorators';
import { db, firestore } from '@/script/firebase';
import store from '@/store/store';

export interface Message {
    id: string;
    content: string;
}

export interface Messages {
    messages: Message[];
}

@Module({ dynamic: true, store, name: 'messages', namespaced: true })
class MessageModule extends VuexModule {
    public get collection(): firebase.firestore.CollectionReference {
        return db.collection('messages');
    }

    @Action
    public async add(content: string) {
        await this.collection.add({
            timeCreated: firestore.FieldValue.serverTimestamp(),
            content,
        });
    }

    @Action
    public async remove(message: Message) {
        await this.collection.doc(message.id).delete();
    }

    @Action
    public unsubscribe(detacher: firebase.Unsubscribe | undefined): void {
        if (detacher !== undefined) {
            detacher();
        }
    }

}

export default getModule(MessageModule);
