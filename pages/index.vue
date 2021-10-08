<template>
  <div>
    <hero></hero>

    <features></features>

    <products-list
      v-if="products.length > 0"
      :products="products"
      :total-products="+totalProducts"
      class-name="my-5"
    ></products-list>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ProductsList from '~/components/Main/ProductsList.vue'
import Hero from '~/components/Main/Hero.vue'
import Features from '~/components/Main/Features.vue'

export default {
  components: {
    ProductsList,
    Hero,
    Features,
  },
  computed: {
    ...mapGetters('products', ['products', 'totalProducts']),
  },
}
</script>
