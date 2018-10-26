const state = {
  mod2Arr: [{ id: 1, ls: 2 }, { id: 2, ls: 3 }],
  id: 2,
};
// 取数据，从state中拿取特定数据
const getters = {
  getArr: state => state.mod2Arr.find(md2 => md2.id === 1), // find(ele, index, 自身/arr)
};
// 通过commit 触发mutations，来改变state的内容，同步更改
const mutations = {
  pushArr(state) {
    state.mod2Arr.push({ id: state.id });
    state.id += 1;
  },
};
// 异步更改， 有action就要有mutation，异步事件完成commit一个mutation
const actions = {
  setMod2({ commit }, tim) { // 首个参数
    setTimeout(() => {
      commit('pushArr');
      // console.log(tim);
    }, tim);
  },
};
export default {
  namespace: true, // 使用命名空间 自动寻找mod2还是mod1 ----------此处有待确定
  state,
  getters,
  mutations,
  actions,
};
