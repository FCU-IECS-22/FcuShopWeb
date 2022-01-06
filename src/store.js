import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      cartNum: 0,
    }
  },
  mutations: {
    setup (state, payload) {
      state.cartNum = payload
    },
    increase (state) {
      state.cartNum++
    },
    decrease (state, payload) {
      state.cartNum = state.cartNum - payload
    }
  },
  actions: {
    setup (context, payload) {
      context.commit("setup", payload)
    },
    increase (context) {
      context.commit("increase")
    },
    decrease (context, payload) {
      context.commit("decrease", payload)
    }
  }
})