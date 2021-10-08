<template>
  <v-container>
    <p id="products-list" class="text-center text-h4">{{ $t('checkout') }}</p>

    <v-card class="card mx-auto rounded-lg" max-width="400">
      <v-card-text>
        <v-radio-group v-model="method">
          <v-radio
            v-for="item in methods"
            :key="item"
            :label="`${item}`"
            :value="item"
          ></v-radio>
        </v-radio-group>
        <v-btn
          block
          color="primary"
          :disabled="!method"
          @click="openCheckoutDone"
          >{{ $t('checkout') }}</v-btn
        >
      </v-card-text>
      <checkout-done></checkout-done>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import CheckoutDone from '~/components/Cart/CheckoutDone.vue'
export default {
  components: {
    CheckoutDone,
  },
  data() {
    return {
      method: null,
      methods: [
        this.$t('cash'),
        this.$t('visa'),
        this.$t('mastercard'),
        this.$t('paypal'),
      ],
    }
  },
  methods: {
    ...mapActions('cart', ['setCheckoutDone']),

    openCheckoutDone() {
      this.setCheckoutDone(true)
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
