<template lang="pug">
    #messages
        h1 this is message page!
        .message-list(v-for="message in messages")
            p {{ message.content }}
        .message-form
            form(@submit.prevent='addNewMessage')
                label new message:
                input(type='text' v-model='newMessage')
                button(type='submmit') submit
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import messages, { Message } from '@/store/modules/messages';

@Component
export default class MessageView extends Vue {
    private messages = messages.messages;
    private newMessage: string = '';

    public async addNewMessage() {
        await messages.add({content: this.newMessage});
        this.newMessage = '';
    }
}
</script>
<style lang="sass" scoped>
#messages
    .message-form
        width: 500px;
        background-color: #ddd
        border: 1px solid #666
        padding: 1rem
        margin-left: auto
        margin-right: auto
</style>