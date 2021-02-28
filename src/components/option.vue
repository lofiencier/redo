<template>
  <li class="option" role="option" :arial-value="arialValue" :class="active ? 'active' : ''">
    <slot></slot>
  </li>
</template>
<script>
export default {
  props: ['active', 'arial-value']
}
</script>
<style lang="less">
  .option{
    list-style: none;
    padding: 4px 6px;
    cursor: pointer;
    &.active{
      color: red;
    }
    &:hover{
      background: lightgray;
    }
    &:not(:last-child) {
      border-bottom: 1px solid #eee;
    }
  }
</style>