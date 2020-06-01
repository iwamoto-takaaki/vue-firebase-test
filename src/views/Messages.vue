<template lang="pug">
    #messages
        h1 this is message page!
        .message-list(v-for="message in messages")
            p {{ message.content }}
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import store from '@/store/store';

@Component
export default class Message extends Vue {
    private messages = this.$store.state.messages.messages;

    public async created() {
        store.dispatch('messages/add', {content: 'hello world'});
    }
}
</script>