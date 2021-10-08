<template>
  <v-container>
    <div v-if="!products || products.length === 0" class="text-center">
      <v-img
        :src="require('~/assets/undraw_warning_cyit.svg')"
        max-height="200"
        contain
        eager
      ></v-img>
      <h1>No items yet</h1>
      <v-btn to="/" color="primary">Shop now</v-btn>
    </div>

    <v-row v-else>
      <v-col cols="12" md="8" order-md="1" order="2">
        <products-list :products="products" is-cart-product></products-list>
      </v-col>

      <v-col cols="12" md="4" order-md="2" order="1">
        <checkout-card></checkout-card>
        <recipes-card :recipes="recipes ? recipes : []"></recipes-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductsList from '~/components/Main/ProductsList.vue'
import CheckoutCard from '~/components/Cart/CheckoutCard.vue'
import RecipesCard from '~/components/Cart/RecipesCard.vue'
import { http } from '~/plugins/http'

export default {
  components: {
    ProductsList,
    CheckoutCard,
    RecipesCard,
  },
  data() {
    return {
      products: [],
      recipes: [],
    }
  },

  mounted() {
    const products = localStorage.getItem('cart')
    this.products = JSON.parse(products)

    this.getRecipes()
  },
  methods: {
    async getRecipes() {
      if (this.products && this.products.length > 0) {
        const topics = []
        for (const item of this.products) {
          topics.push(item.topic)
        }
        const ingredientsSet = new Set(topics)
        const ingredientsArray = [...ingredientsSet]
        const ingredients = ingredientsArray.join(',')

        // This function for handling response
        const handler = (response) => {
          this.recipes = response
        }
        const props = {
          url: `/recipes/findByIngredients?ingredients=${ingredients}`,
          callback: handler,
        }
        await http(props)
      }
    },
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
