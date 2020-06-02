<template lang="pug">
    #messages
        h1 this is message page!
        MessageCard(
            v-for="message in messages" 
            :message="message" 
            :key='message.id' 
            v-on:remove='removeMessage')
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
import MessageCard from '@/components/MessageCard.vue';

@Component({
    components: {
        MessageCard,
    },
})
export default class MessageView extends Vue {
    private messages = messages.messages;
    private newMessage: string = '';

    public async addNewMessage() {
        await messages.add(this.newMessage);
        this.newMessage = '';
    }

    public async removeMessage(message: Message) {
        messages.remove(message);
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