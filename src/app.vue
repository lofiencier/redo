<template>
  <div>
    <template v-for="(item, index) in components">
      <p :key="'p' + index">{{ item.name }}</p>
      <component v-bind:is="item" :key="item._scopeId" :lalel="1"></component>
      <li class="divider" :key="'div' + index"></li>
    </template>
  </div>
</template>

<script>
const requireCpts = require.context(
  './components',
  false,
  /.vue$/
);
const components = requireCpts.keys().reduce((total, fileName) => {
  const name = fileName.replace('.vue', '').replace(/\W+/g, '').replace(/^\w/, w => w.toUpperCase());
  const component = requireCpts(fileName);
  component.default.name = name;
  return { ...total, [name]: component.default };
},{});
export default {
  data(){
    return {
      components,
    };
  },
  components,
}
</script>

<style>
  .divider{
    width: 100%;
    height: 1px;
    background: #eee;
    list-style: none;
    margin: 10px 0;
  }
</style>