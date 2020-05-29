<template lang="pug">
    #messages
        h1 this is message page!
        .message-list(v-for="message in messages")
            p {{ message.content }}
</template>
<script lang="ts">
import Vue from 'vue';

export default class Message extends Vue {
    public messages = this.$store.state.message.messages;
}
</script>