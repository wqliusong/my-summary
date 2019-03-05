<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ids}}
    <div @click="pusharr">asdfadsfasfasdf</div>
  </div>
</template>

<script>
/* 如果直接dispatch 不用传数据 可以mapActions,mapMutations
methods: {
  ...mapActions([
    'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

    // `mapActions` 也支持载荷：
    'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
  ]),
  ...mapActions({
    add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
  }),
    methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
} */
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'HelloWorld',
  computed: { // 计算属性 和 watch一样的用法
  /*
     监听的data或者State：事件或函数或数据来源， 检测来源处是否变化，来改变视图
  */
    ...mapState({
      ids: state => state.mod2.id, // 检测state的变化
    }),
    ...mapGetters({
      arrx: 'getArr', // 取getArr， 实际为讲getArr的fun拿至此处，当find后return出新的东西 改变视图等
    }),
  },
  data() {
    return {
      msg: '123',
      mag2: '234',
    };
  },
  methods: {
    pusharr() {
      // console.log(this);
      this.$store.dispatch('setMod2', 2000);// 当要携带参数来dispatch一个action的时候只能用全写 $store.dispatch,如果不携带参数可以如上方注释
      this.$store.commit('add', 20);// 与上同理 commit为mutation， dispatch为action
      // console.log(this.arrx);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
