<template lang="pug">
    .messageCard
        .content {{ message.content }} 
        font-awesome-icon(icon="trash" @click='remove')
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

<style lang="sass" scoped>
.messageCard
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .content
        padding: 0.5rem 2rem;
</style>
