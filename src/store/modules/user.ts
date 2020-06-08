import { Module, VuexModule, Action, Mutation, getModule } from 'vuex-module-decorators';
import { User } from 'firebase';
import store from '@/store/store';
import { auth } from '@/script/firebase';
import { Unsubscribe } from 'firebase';

@Module({ dynamic: true, store, name: 'user', namespaced: true })
class UserModule extends VuexModule {
    public user: User | null | undefined = null;
    public detacher: Unsubscribe | undefined = undefined;

    @Mutation
    public LOGIN(user: User | null) {
        this.user = user;
    }

    @Mutation
    public LOGOUT() {
        this.user = null;
    }

    @Action
    public async login(user: User | null) {
        await this.LOGIN(user);
    }

    @Action
    public async logout() {
        await auth.signOut();
        // await this.LOGOUT();
    }

    @Action
    public scribe() {
        this.detacher = auth.onAuthStateChanged((user) => {
            this.login(user);
        });
    }

    @Action
    public unscribe() {
        if (this.detacher) {
            this.detacher();
          }
    }

    public get authorized(): boolean {
        return this.user !== null;
    }
}

export default getModule(UserModule);
