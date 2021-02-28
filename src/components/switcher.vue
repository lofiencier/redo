<template>
    <div class="switch-container" :class="active ? 'active' : ''" @click="onSwitch">
      <div class="switcher" :class="active ? 'active' : ''"></div>
    </div>
</template>

<script>
export default {
  data: () => ({
    active: false
  }),
  methods: {
    onSwitch() {
      this.active = !this.active;
    }
  }
}
</script>

<style scoped lang="less">
  .switch-container{
    width: 60px;
    height:30px;
    background: #333;
    border-radius: 15px;
    user-select: none;
    overflow: hidden;
    cursor: pointer;
    transition: background-color .3s ease-in-out;
    &.active{
      background: lightseagreen;
      .switcher{
        transform: translateX(29px);
      }
    }
    .switcher{
      display: block;
      transition: transform .3s ease;
      width:24px;
      height:24px;
      border-radius: 12px;
      background: #fff;
      margin: 3px;
    }
  }
</style>