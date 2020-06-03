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
import messages, { Message, Messages } from '@/store/modules/messages';
import MessageCard from '@/components/MessageCard.vue';

@Component({
    components: {
        MessageCard,
    },
})
export default class MessageView extends Vue implements Messages {
    public detacher?: firebase.Unsubscribe;
    public messages: Message[] = [];
    private newMessage: string = '';

    public async created() {
        // message.ts に移動させてみたが、reactiveが動作しなくなった。
        // todo: reactiveの仕組みを理解して動作するように修正する。
        this.detacher = messages.collection
            .orderBy('timeCreated')
            .onSnapshot((snapshot: any) => {
                this.messages = snapshot.docs.map((doc: any) => {
                    return Object.assign(doc.data(), { id: doc.id }) as Message[];
                });
            });
    }

    public async addNewMessage() {
        await messages.add(this.newMessage);
        this.newMessage = '';
    }

    public async removeMessage(message: Message) {
        await messages.remove(message);
    }

    public destroyed() {
        messages.unsubscribe(this.detacher);
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