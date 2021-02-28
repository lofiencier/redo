<template>
  <div>
    <span>inputNode ::</span>
    <InputNode v-bind:value.sync="text"/>
    <p>{{text}}</p>
  </div>
</template>

<script>
const InputNode = {
  data() {
    return {
      focus: '???'
    }
  },
  render(h) {
    return <input onInput={e => this.$emit('update:value', e.target.value)}
    value={this.value}
    />
  },
  props:['value']
}
export default {
  data:() => ({
    text: '12313'
  }),
  methods: {
    onChange({ target }) {
      console.log('target.value', target.value);
    },
  },
  components: {
    'InputNode': InputNode
  }
}
</script>

<style>

</style>