<template>
  <v-app-bar app absolute color="primary" dark>
    <v-toolbar-title>
      <nuxt-link to="/" class="text-decoration-none white--text"
        >Grocery Shop
      </nuxt-link>
    </v-toolbar-title>
    <nuxt-link to="/" class="text-decoration-none white--text">
      <v-img src="/logo.png" contain max-width="50" max-height="30"></v-img>
    </nuxt-link>

    <v-spacer></v-spacer>
    <v-badge
      v-if="cartCount"
      :content="cartCount"
      color="green"
      overlap
      offset-x="15"
      offset-y="15"
    >
      <v-btn icon to="/cart">
        <v-icon> mdi-cart </v-icon>
      </v-btn>
    </v-badge>
    <v-btn v-else icon to="/cart">
      <v-icon> mdi-cart </v-icon>
    </v-btn>

    <v-btn icon @click="changeTheme">
      <v-icon> mdi-theme-light-dark</v-icon>
    </v-btn>

    <v-btn icon @click="changeLanguage">
      <v-icon> mdi-translate</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('cart', ['cartCount']),
  },
  methods: {
    changeTheme() {
      const currentTheme = this.$vuetify.theme.dark
      this.$vuetify.theme.dark = !currentTheme
      this.$Cookies.set('theme', !currentTheme)
    },
    changeLanguage() {},
  },
}
</script>
