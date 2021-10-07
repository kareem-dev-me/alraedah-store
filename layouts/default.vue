<template>
  <v-app>
    <the-navbar></the-navbar>

    <v-main>
      <Nuxt />
    </v-main>

    <v-footer absolute app class="d-block">
      <p class="text-center mb-0 text-subtitle-2">
        All rights reserved &copy; {{ new Date().getFullYear() }}
      </p>
    </v-footer>

    <v-overlay :value="isLoading" style="z-index: 100000">
      <v-progress-circular
        indeterminate
        size="64"
        color="primary lighten-2"
      ></v-progress-circular>
    </v-overlay>
    <v-snackbar v-model="snackbarShow" multi-line>
      {{ snackbarMessage }}

      <template #action="{ attrs }">
        <v-btn
          color="secondary"
          text
          v-bind="attrs"
          @click="snackbarShow = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import TheNavbar from '~/components/Layout/TheNavbar.vue'

export default {
  components: {
    TheNavbar,
  },
  computed: {
    isLoading: {
      set(newValue) {
        this.$store.commit('isLoading', newValue)
      },
      get() {
        return this.$store.getters.isLoading
      },
    },
    snackbarShow: {
      set(newValue) {
        this.$store.commit('snackbarShow', newValue)
      },
      get() {
        return this.$store.getters.snackbar.show
      },
    },
    snackbarMessage() {
      return this.$store.getters.snackbar.message
    },
  },
}
</script>
<style></style>
