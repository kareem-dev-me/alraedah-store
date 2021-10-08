export const state = () => ({
  cartCount: 0,
  checkoutDone: false,
})

export const mutations = {
  setCartCount(state, payload) {
    state.cartCount = payload
  },
  setCheckoutDone(state, payload) {
    state.checkoutDone = payload
  },
}

export const actions = {
  setCartCount({ commit }, payload) {
    commit('setCartCount', payload)
  },
  setCheckoutDone({ commit }, payload) {
    commit('setCheckoutDone', payload)
  },
}

export const getters = {
  cartCount(state) {
    return state.cartCount
  },
  checkoutDone(state) {
    return state.checkoutDone
  },
}
