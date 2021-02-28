<template>
  <a @click="onClick" class="clickable">{{ count }}</a>
</template>

<script>
export default {
  data: () => ({
    count: 0
  }),
  methods: {
    onClick() {
      this.count++ ;
    }
  }
}
</script>

<style scoped>
  .clickable{
    display: block;
    background: lightsalmon;
    color:white;
    width: 100px;
    height: 100px;
    cursor: pointer;
    transform: rotate(1deg);
    line-height: 100px;
    text-align: center;
    user-select: none;
  }
  ::placeholder {
    color: gray;
  }
</style>