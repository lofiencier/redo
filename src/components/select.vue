<template>
  <div class="select" :class="active ? 'active' : ''" @click="onSelect">
    {{ value ? label : placeholder }}
  </div>
</template>

<script>
import Vue from 'vue';

const Select = {
  mounted(){
    this.attachClick();
  },
  data: () => ({
    active: false,
    vNode: null,
    selector: null,
    label: '',
    placeholder: 'placeholder',
  }),
  model: {
    event: 'change',
    prop: 'value'
  },
  props: ['value'],
  methods: {
    onSelect() {
      this.active = true;
      const self = this;
      const uuid = 'uuid' + Math.random().toString(16).slice(2);
      const dom = document.createElement('div');
      dom.className = 'options-container ' + uuid;
      document.body.appendChild(dom);
      const top = this.$el.offsetTop + this.$el.offsetHeight + 'px';
      const left = this.$el.offsetLeft + 'px';
      const width = this.$el.offsetWidth + 'px';
      const height = 32 * ((this.$slots.default || []).length + 1) /2 + 'px';
      const vNode = new Vue({
        mounted(){
          setTimeout(() => this.$el.style.height = height, 0);
        },
        el: '.' + dom.className.split(' ').join('.'),
        render: (h) => <div class={dom.className} style={{ top, left }}>
            {this.$slots.default.map(($node => {
              if($node.componentOptions) {
                let props = $node.componentOptions.propsData;
                props.active = props['arialValue'] == self.value;
              }
              return $node
            }))}
        </div>,
      });
      this.vNode = vNode;
      this.selector = '.' + dom.className.split(' ').join('.');
    },
    attachClick() {
      document.addEventListener('click', this.overrider, false);
      this.$once('hook:beforeDestory', () => document.removeEventListener('click', this.overrider));
    },
    overrider({ target }) {
      if(this.active){
        const dom = document.querySelector(this.selector);
        if(dom && dom.contains(target)) {
          const value = target.getAttribute('arial-value');
          const label = target.innerText;
          this.label = label;
          this.$emit('change', value);
        }
      };
      if(!this.$el.contains(target)) {
        if(this.vNode) {
          this.vNode.$destroy();
          this.vNode = null;
        }
        if(this.selector) {
          const dom = document.querySelector(this.selector);
          dom && document.body.removeChild(dom);
          this.selector = null;
        }
        if(this.active) this.active = false;
      }
    }
  },
};
export default Select;
</script>

<style lang="less">
  .options-container{
    position: absolute;
    overflow: hidden;
    background: white;
    height: 0;
    border: 1px solid #eee;
    box-sizing: border-box;
    transition: height .15s ease-in-out;
  }
  .select{
    display: inline-block;
    cursor: pointer;
    height: 32px;
    border: 1px solid #999;
    border-radius: 4px;
    position: relative;
    font-size: 12px;
    line-height: 32px;
    padding: 0 14px 0 8px;
    &.active{
      &::after{
        content: '-',
      }
    }
    &:after{
      content: '+';
      display: block;
      right: 4px;
      position: absolute;
      top: 0;
    }
  }
</style>