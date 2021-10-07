let store
let axios

export default (context) => {
  store = context.store
  axios = context.$axios
}

export const http = async (props) => {
  store.commit('isLoading', true)

  let response
  const config = {
    params: {
      apiKey: process.env.APIKey,
    },
  }

  try {
    if (props.data) {
      response = await axios.$post(props.url, props.data, config)

      store.commit('snackbarShow', true)
      store.commit('snackbarMessage', response.message)
    } else {
      response = await axios.$get(props.url, config)
    }

    props.callback(response)
  } catch (err) {
    store.commit('snackbarShow', true)
    store.commit('snackbarMessage', err.message)
  }

  store.commit('isLoading', false)
}
