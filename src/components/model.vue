<template>
  <div>
    <p>checked:: {{checked}}</p>
    <CheckBox v-model="checked"></CheckBox>
    <transition name="fade">
      <p v-if="checked">show?</p>
    </transition>
  </div>
</template>

<script>
const CheckBox = {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: Boolean
  },
  render(h){
    return <input type="checkbox" checked={this.checked} onChange={e => this.$emit('change', e.target.checked)} />
  }
};
export default {
  components: {
    CheckBox
  },
  data: () => ({
    checked: true
  })
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>