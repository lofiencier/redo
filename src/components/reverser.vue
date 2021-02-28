<template>
  <div>
    <a :[attribute]="message">{{ message }}</a>
    <p>{{ reversedMessage }}</p>
    <a @click="onClick">reverse</a>
    <p class="lsjs" :class="{ active : !!attribute }" :style="staticClass">111</p>
    <input type="text" v-model="inputText" >
    <p>{{inputText}}</p>
    <p v-bind="$attrs"></p>
    <Radio />
  </div>
</template>

<script>
import Vue from 'vue';
Vue.component(
  'Radio', {
    render(h) {
      return <p>11111</p>
    }
  }
);
export default {
  data: () => ({
    message: '12312312',
    attribute: 'href',
    inputText: '',
    staticClass: {
      color: 'red'
    },
  }),

  computed: {
    reversedMessage(){
      this.combine = '1';
      return this.message.split('').reverse().join('');
    },
    combine:{
      get() {
        return this.message + ' ' + this.reversedMessage;
      },
      set(value) {
        console.log('value',value);
      }
    }
  },
  props: ['label'],
  inheritAttrs: false,
  methods: {
    onClick(){
      this.message = this.message.split('').reverse().join('');
      this.attribute += 'h';
    },
    onChange({ target }) {
      console.log('target.value',target.value, );
    }
  },
  components:{
  }
}
</script>

<style>

</style>