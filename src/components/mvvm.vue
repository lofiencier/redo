<template>
  <div>
    <span>inputNode ::</span>
    <InputNode v-model="text" @input.native="nativeInput"/>
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
    return <input onInput={e => this.$emit('input', e.target.value)}
    value={this.vModel}
    />
  },
  props:['v-model']
}
export default {
  data:() => ({
    text: '12313'
  }),
  methods: {
    onChange({ target }) {
      console.log('target.value', target.value);
    },
    nativeInput(e) {
      console.log('e',e);
    }
  },
  components: {
    'InputNode': InputNode
  }
}
</script>

<style>

</style>