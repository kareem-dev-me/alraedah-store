<template>
  <v-container>
    <p class="text-center text-h4" :class="className">
      {{ $t('products-list') }}
    </p>

    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" md="4">
        <base-card
          :id="product.id"
          :title="product.title"
          :image="product.image"
          :is-cart-product="isCartProduct"
          :qty="+product.qty"
        ></base-card>
      </v-col>
    </v-row>

    <br />

    <v-pagination
      v-if="!isCartProduct"
      v-model="page"
      :length="totalProducts > 100 ? Math.floor(totalProducts / 100) : 1"
      circle
      @input="getNewProducts"
    ></v-pagination>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BaseCard from '~/components/UI/BaseCard.vue'
export default {
  components: {
    BaseCard,
  },
  props: {
    products: Array,
    totalProducts: Number,
    isCartProduct: Boolean,
    className: String,
  },
  data() {
    return {
      page: 1,
    }
  },
  computed: {
    ...mapGetters('products', ['searchTerm']),
  },
  methods: {
    ...mapActions('products', ['getProducts']),

    async getNewProducts(page) {
      await this.getProducts({
        searchTerm: this.searchTerm,
        skip: page * 100,
      })

      this.$vuetify.goTo('#products-list', { offset: 100 })
    },
  },
}
</script>

<style></style>
