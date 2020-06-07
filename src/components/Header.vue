<template lang="pug">
    #navbar
        outer-link(to="/") Home
        |  | 
        router-link(to="/about") About
        |  | 
        router-link(to="/messages") Messages
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class HeaderView extends Vue {
}
</script>

<style lang="sass" scoped>
#nav 
  padding: 30px;

  a 
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active 
      color: #42b983;
</style>