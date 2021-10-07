<template>
  <v-card class="mx-auto card rounded-lg" max-width="400" height="100%">
    <v-img
      class="white--text"
      height="200px"
      :src="image"
      gradient="to bottom, transparent,#000000a0"
    >
      <v-btn fab color="primary" small class="ma-2">
        <v-icon size="20" @click.prevent="addToCart">mdi-cart</v-icon>
      </v-btn>
    </v-img>
    <v-card-title>{{ title }}</v-card-title>
  </v-card>
</template>
<script>
export default {
  props: {
    title: String,
    image: String,
    id: Number,
  },
  methods: {
    addToCart() {
      const product = { title: this.title, image: this.image, id: this.id }
      const cart = localStorage.getItem('cart')
      let products
      let jsonArray

      if (!cart) {
        products = [product]
        jsonArray = JSON.stringify(products)
        localStorage.setItem('cart', jsonArray)
      } else {
        products = [...JSON.parse(cart)]
        products.push(product)
        jsonArray = JSON.stringify(products)
        localStorage.setItem('cart', jsonArray)
      }
    },
  },
}
</script>
<style scoped>
.card {
  /* border-right: 3px solid #255a1f;
  border-bottom: 3px solid #255a1f; */
  box-shadow: 6px 6px #255a1fcb, 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%) !important;
}
</style>
