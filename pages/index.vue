<template>
  <div>
    <hero></hero>

    <features></features>

    <div v-if="products && products.length === 0" class="text-center">
      <v-img
        :src="require('~/assets/undraw_warning_cyit.svg')"
        max-height="200"
        contain
        eager
      ></v-img>
      <h1>{{ $t('no-items-found') }}</h1>
    </div>

    <span id="products-list" style="height: 0; width: 0"></span>

    <products-list
      v-if="products && products.length > 0"
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
  head() {
    return {
      title: this.$t('home'),
    }
  },
  computed: {
    ...mapGetters('products', ['products', 'totalProducts']),
  },
}
</script>
