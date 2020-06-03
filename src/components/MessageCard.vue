<template lang="pug">
    .messageCard
        .content {{ message.id }}: {{ message.content }} 
        a(@click='remove') remove
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Emit } from 'vue-property-decorator';
import { Message } from '@/store/modules/messages';

@Component
export default class MessageCardComponent extends Vue {
    @Prop() public message!: Message;

    @Emit() public remove() {
        return this.message;
    }
}
</script>
