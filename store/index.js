// import { http } from '../plugins/http'

export const state = () => ({
  isLoading: false,
  snackbar: { show: false, message: '' },
})

export const mutations = {
  isLoading(state, payload) {
    state.isLoading = payload
  },

  snackbarShow(state, payload) {
    state.snackbar.show = payload
  },

  snackbarMessage(state, payload) {
    state.snackbar.message = payload
  },
}

export const actions = {}

export const getters = {
  isLoading(state) {
    return state.isLoading
  },
  snackbar(state) {
    return state.snackbar
  },
}
