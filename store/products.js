import { http } from '../plugins/http'

export const state = () => ({
  searchTerm: '',
  products: [],
  totalProducts: 1,
})

export const mutations = {
  setProducts(state, payload) {
    state.products = payload
  },
  setTotalProducts(state, payload) {
    state.totalProducts = payload
  },
  setSearchTerm(state, payload) {
    state.searchTerm = payload
  },
}

export const actions = {
  async getProducts({ commit }, payload) {
    const skip = payload.skip ? `&offset=${payload.skip}` : ''

    // This function for handling response
    const handler = (response) => {
      commit('setProducts', response.products)
      commit('setTotalProducts', response.totalProducts)
      commit('setSearchTerm', payload.searchTerm)
    }

    const props = {
      url: `/food/products/search?query=${payload.searchTerm}&number=100${skip}`,
      callback: handler,
    }

    await http(props)
  },
}

export const getters = {
  products(state) {
    return state.products
  },
  totalProducts(state) {
    return state.totalProducts
  },
  searchTerm(state) {
    return state.searchTerm
  },
}
