<template lang="pug">
  #app
    header-view
    router-view
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HeaderView from '@/components/Header.vue';

@Component({
  components: {
    HeaderView,
  },
})
export default class App extends Vue {
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
</style>
