<template>
  <div id="demo">
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition>
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data:() => ({
    show: true
  })
}
</script>

<style scoped>
  .v-enter-active, .v-leave-active {
    transition: opacity .5s;
  }
  .v-enter, .v-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>