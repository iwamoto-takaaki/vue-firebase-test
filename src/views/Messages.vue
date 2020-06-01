<template lang="pug">
    #messages
        h1 this is message page!
        .message-list(v-for="message in messages")
            p {{ message.content }}
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import messages, { Message } from '@/store/modules/messages';

@Component
export default class MessageView extends Vue {
    private messages = messages.messages;

    public async created() {
        messages.add({content: 'hello evertone!'});
    }
}
</script>