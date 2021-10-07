<template>
  <div>
    <hero></hero>

    <features></features>

    <products-list
      v-if="products.length > 0"
      :products="products"
      :total-products="+totalProducts"
    ></products-list>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ProductsList from '~/components/Index/ProductsList.vue'
import Hero from '~/components/Index/Hero.vue'
import Features from '~/components/Index/Features.vue'

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
