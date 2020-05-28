<template lang="pug">
    #messages
        h1 this is message page!\
        .message-list(v-for="message in messages")
            p {{ message }}
</template>
<script lang="ts">
import Vue from 'vue';
export default class Message extends Vue {
    public messages = ['hello world', 'hello everyone'];
}
</script>