<template>
  <div>
    <p>user</p>
    <p>{{ id }}</p>
    <router-link to="/user/123">laksflks</router-link>
    <div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $route(prev, next){
      console.log('prev, next', prev, next);
    }
  },
  props: ['id']
}
</script>

<style>

</style>