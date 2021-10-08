<template>
  <v-app>
    <div
      class="d-flex align-center justify-center text-center"
      style="height: 100%"
    >
      <div>
        <v-img
          :src="require('~/assets/undraw_page_not_found_su7k.svg')"
          max-height="200"
          contain
          eager
        ></v-img>
        <h1 v-if="error.statusCode === 404">
          {{ pageNotFound }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>
        <v-btn :to="localePath('/')" color="primary">Go to home</v-btn>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
