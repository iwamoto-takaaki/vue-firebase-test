import { Module, VuexModule, Action, Mutation, getModule } from 'vuex-module-decorators';
import { User } from 'firebase';
import store from '@/store/store';
import { auth } from '@/script/firebase';
import { Unsubscribe } from 'firebase';

@Module({ dynamic: true, store, name: 'user', namespaced: true })
class UserModule extends VuexModule {

    public get authorized(): boolean {
        return this.user !== null;
    }
    public user: User | null | undefined = null;
    private detacher: Unsubscribe | undefined = undefined;

    @Action
    public async logout() {
        await auth.signOut();
    }

    @Action
    public subscribe() {
        this.detacher = auth.onAuthStateChanged((user) => {
            this.login(user);
        });
    }

    @Action
    public unsubscribe() {
        if (this.detacher) {
            this.detacher();
          }
    }

    @Mutation
    private LOGIN(user: User | null) {
        this.user = user;
    }

    @Action
    private async login(user: User | null) {
        await this.LOGIN(user);
    }
}

export default getModule(UserModule);
