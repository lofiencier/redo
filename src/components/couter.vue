<template>
  <a @click="onClick" class="clickable">{{ countAlias }} - {{ counted(2) }}</a>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    onClick() {
      this.$store.commit('increment', 10);
      // this.incrementAction().then(() => console.log('???!'));
      // console.log('this.incrementAction', this.incrementAction);
      // this.$store.dispatch('incrementAction').then((ss) => console.log('ss', ss));
      this.incrementAction();
    },
    ...mapActions(['incrementAction'])
  },
  computed: {
    ...mapState({
      count: state => state.count,
      countAlias: 'count'
    }),
    ...mapGetters({
      counted: 'getDdCount'
    }),
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