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
            .sign-in-btn(v-if="logon") Sign in
            .sign-out-btn(v-else) Sigin out
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class HeaderView extends Vue {
    get logon(): boolean {
        return false;
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
        .sign-in-btn, .sign-out-btn
            padding: 0.5rem
            border: 1.5px solid #eee;
            border-radius: 5px;
            color: #eee
        .sign-in-btn
            background-color: #eee;
            color: #555;
        

</style>