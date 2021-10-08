<template>
  <v-card class="mx-auto card rounded-lg" max-width="400" height="100%">
    <v-img
      class="white--text"
      height="200px"
      :src="image"
      gradient="to bottom, transparent,#000000a0"
    >
      <v-btn
        v-if="!isCartProduct"
        fab
        color="primary"
        small
        class="ma-2"
        @click.prevent="addToCart"
      >
        <v-icon size="20">mdi-cart</v-icon>
      </v-btn>
      <v-tooltip v-if="qty" bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            fab
            color="primary"
            small
            class="ma-2"
            v-bind="attrs"
            v-on="on"
          >
            {{ qty }}
          </v-btn>
        </template>
        <span>Quantity</span>
      </v-tooltip>
    </v-img>
    <v-card-title>{{ title }}</v-card-title>
  </v-card>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    title: String,
    image: String,
    id: Number,
    isCartProduct: Boolean,
    qty: Number,
  },
  computed: {
    ...mapGetters('products', ['searchTerm']),
  },
  methods: {
    ...mapActions('cart', ['setCartCount']),

    addToCart() {
      const product = { title: this.title, image: this.image, id: this.id }
      const cart = localStorage.getItem('cart')
      let products

      if (!cart) {
        products = [{ topic: this.searchTerm, qty: 1, ...product }]
        this.setLocalStorageProducts(products)
        this.increaseCartCount(1)
        this.showMessage()
        return
      }

      products = [...JSON.parse(cart)]

      for (const item of products) {
        if (+item.id === +product.id) {
          item.qty = +item.qty + 1
          this.setLocalStorageProducts(products)
          const cartCount = +this.$Cookies.get('cartCount')
          this.increaseCartCount(cartCount + 1)
          this.showMessage()
          return
        }
      }

      products.push({ topic: this.searchTerm, qty: 1, ...product })
      this.setLocalStorageProducts(products)
      const cartCount = +this.$Cookies.get('cartCount')
      this.increaseCartCount(cartCount + 1)
      this.showMessage()
    },

    setLocalStorageProducts(products) {
      const jsonArray = JSON.stringify(products)
      localStorage.setItem('cart', jsonArray)
    },

    increaseCartCount(count) {
      this.$Cookies.set('cartCount', count)
      this.setCartCount(count)
    },

    showMessage() {
      this.$store.commit('snackbarShow', true)
      this.$store.commit('snackbarMessage', 'Added to cart successfully')
    },
  },
}
</script>
<style scoped>
.card {
  box-shadow: 6px 6px #255a1fcb, 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%) !important;
}
</style>
