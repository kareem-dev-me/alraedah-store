<template>
  <v-app-bar app absolute color="primary" dark>
    <v-toolbar-title>Grocery Shop </v-toolbar-title>
    <v-img src="/logo.png" contain max-width="50" max-height="30"></v-img>

    <v-spacer></v-spacer>
    <v-badge content="6" value="6" color="green" overlap>
      <v-btn icon>
        <v-icon large> mdi-cart </v-icon>
      </v-btn>
    </v-badge>
    <!-- <v-btn icon @click="changeTheme">
      <v-icon> mdi-theme-light-dark</v-icon>
    </v-btn> -->
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    // changeTheme() {
    //   const currentTheme = this.$vuetify.theme.dark
    //   this.$Cookies.set('theme', !currentTheme)
    //   this.$vuetify.theme.dark = !currentTheme
    // },
  },
}
</script>
