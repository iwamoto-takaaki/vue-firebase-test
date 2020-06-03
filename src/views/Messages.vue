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
import { db, firestore } from '@/script/firebase';
import messages, { Message, Messages } from '@/store/modules/messages';
import MessageCard from '@/components/MessageCard.vue';

@Component({
    components: {
        MessageCard,
    },
})
export default class MessageView extends Vue {

    get refMessages(): firebase.firestore.CollectionReference {
        return db.collection('messages');
    }
    public detacher?: firebase.Unsubscribe;
    private messages = messages.messages;
    private newMessage: string = '';

    public async addNewMessage() {
        await this.refMessages.add({
            timeCreated: firestore.FieldValue.serverTimestamp(),
            content: this.newMessage,
        });
        this.newMessage = '';
    }

    public async removeMessage(message: Message) {
        await this.refMessages.doc(message.id).delete();
    }

    public async created() {
        this.detacher = this.refMessages
            .orderBy('timeCreated')
            .onSnapshot((snapshot: any) => {
                this.messages = snapshot.docs.map((doc: any) => {
                return Object.assign(doc.data(), { id: doc.id }) as Message[];
            });
        });
    }

    public async destroyed() {
        if (this.detacher !== undefined) {
            (this.detacher as firebase.Unsubscribe)();
        }
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