<template>
  <v-dialog v-model="dialog" width="500" @click:outside="clearData">
    <v-card>
      <v-card-text class="text-center">
        <v-icon color="primary" size="50" class="ma-5"
          >mdi-checkbox-marked-circle-outline</v-icon
        >
        <p class="text-overline mb-0">
          {{ $t('your-order-is-set-successfully') }}
        </p>
        <p class="text-overline">{{ $t('thank-you') }}</p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="clearData">
          {{ $t('close') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    dialog: {
      set(value) {
        this.setCheckoutDone(value)
      },
      get() {
        return this.$store.getters['cart/checkoutDone']
      },
    },
  },
  methods: {
    ...mapActions('cart', ['setCheckoutDone', 'setCartCount']),

    clearData() {
      this.dialog = false

      localStorage.removeItem('cart')

      this.$Cookies.remove('cartCount')
      this.setCartCount(0)

      this.$router.push(this.localeLocation('/'))
    },
  },
}
</script>

<style></style>
