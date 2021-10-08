<template>
  <div class="hero">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <h1
            class="text-capitalize font-weight-medium my-10 black--text"
            :class="
              $vuetify.breakpoint.mdAndUp
                ? 'display-4'
                : 'display-2 text-center'
            "
          >
            The best grocery shop
          </h1>

          <v-text-field
            v-model="searchTerm"
            label="What you want?"
            hide-details
            filled
            background-color="#000000ac"
            color="white"
            dark
            @keydown.enter="search"
          >
            <template #append>
              <v-btn small color="primary" @click.prevent="search"
                >Search</v-btn
              >
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-img
            :src="require('~/assets/Group.png')"
            class="mx-auto"
            height="600"
            width="550"
            contain
            eager
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      searchTerm: '',
    }
  },
  methods: {
    ...mapActions('products', ['getProducts']),

    async search() {
      if (this.searchTerm) {
        await this.getProducts({
          searchTerm: this.searchTerm,
        })

        this.$vuetify.goTo('#products-list', { offset: 100 })
      }
    },
  },
}
</script>

<style scoped>
.hero {
  background-image: url('~assets/parabolic-pentagon.svg');
  background-size: cover;
  background-position: center;
}
</style>
