import Vue from 'vue'
import Cookies from 'js-cookie'

Vue.prototype.$Cookies = Cookies

export default ({ store }) => {
  const cartCount = +Cookies.get('cartCount')
  store.dispatch('cart/setCartCount', cartCount)
}
