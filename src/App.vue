<template lang="pug">
  #app
    header-view
    router-view
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { auth } from '@/script/firebase';
import { Unsubscribe } from 'firebase';
import userModule from '@/store/modules/user';
import HeaderView from '@/components/Header.vue';
import user from '@/store/modules/user';

@Component({
  components: {
    HeaderView,
  },
})
export default class App extends Vue {

  public created() {
    userModule.scribe();
  }

  get authorized(): boolean {
    return userModule.authorized;
  }

  public destroyed() {
    userModule.unscribe();
  }
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
