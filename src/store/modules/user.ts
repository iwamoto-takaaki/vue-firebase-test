import { Module, VuexModule, Action, Mutation, getModule } from 'vuex-module-decorators';
import { User } from 'firebase';
import store from '@/store/store';
import { auth } from '@/script/firebase';

@Module({ dynamic: true, store, name: 'user', namespaced: true })
class UserModule extends VuexModule {
    public user: User | null | undefined = null;

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

    public get authorized(): boolean {
        return this.user !== null;
    }
}

export default getModule(UserModule);
