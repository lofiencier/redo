<template>
  <div>
    <p>provider::</p>
    <Injection></Injection>
  </div>
</template>

<script>
const Injection = {
  inject: ['names'],
  render(h){
    return <p>injection:: {this.names.status}</p>
  }
}
export default {
  mounted() {
    const _this = this;
    setTimeout(function() {
      // _this.names.status = 1;
      _this._provided.names.status = document;   
    }, 1000);
  },
  provide: {
    names: {
      status: 0
    }
  },
  components: {
    Injection
  }
}
</script>

<style>

</style>