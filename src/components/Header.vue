<template lang="pug">
    #navbar
        .nav-brand
        .nav-list
            router-link(to="/") Home
            |  | 
            router-link(to="/about") About
            |  | 
            router-link(to="/messages") Messages
        .logon
            router-link.sign-in-btn(v-if="!authorized" to="/auth") Sign in 
            .sign-out-btn(v-else @click="signOut") Sigin out
</template>

<script lang="ts">
import Vue from 'vue';
import user from '@/store/modules/user';
import { Component } from 'vue-property-decorator';

@Component
export default class HeaderView extends Vue {
    get authorized(): boolean {
        return user.authorized;
    }

    public signOut() {
        user.logout();
    }
}
</script>

<style lang="sass" scoped>
#navbar
    display: flex;
    background-color: #555
    padding: 1rem;
    color: #aaa

    .nav-brand
        margin-right: auto;
        width: 8rem;

    .nav-list
        margin-left: auto;
        margin-right: auto;
        display: flex;
        align-items: center;
        a 
            padding: 0 1rem;
            font-weight: bold;
            color: inherit;

            &.router-link-exact-active 
                color: #fff;

    .logon
        margin-left: auto;
        width: 8rem;
        .sign-in-btn, .sign-out-btn
            padding: 0.5rem
            border: 1.5px solid #eee;
            border-radius: 5px;
            color: #eee
        .sign-in-btn
            background-color: #eee;
            color: #555;
        

</style>