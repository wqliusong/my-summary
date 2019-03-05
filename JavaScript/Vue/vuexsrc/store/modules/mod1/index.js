const state = {
  count: 0,
};

const mutations = {
  add(state, num) {
    console.log(num);
    state.count += num;
  },
};

export default{
  namespace: true,
  state,
  mutations,
};
