<template>
  <div class="fetures-row white--text py-5">
    <v-container>
      <p class="text-center text-h4">Features</p>

      <v-row>
        <v-col
          v-for="(item, index) in featuresList"
          :key="index"
          cols="12"
          md="3"
        >
          <feature-card :title="item.title" :icon="item.icon"></feature-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import FeatureCard from '~/components/UI/FeatureCard.vue'
export default {
  components: {
    FeatureCard,
  },
  data() {
    return {
      featuresList: [
        { icon: 'mdi-magnify', title: 'Search what you want' },
        { icon: 'mdi-clock-fast', title: 'Very fast API' },
        { icon: 'mdi-cart-check', title: 'Easy to shop' },
        { icon: 'mdi-desktop-mac-dashboard', title: 'Easy to use' },
      ],
    }
  },
}
</script>

<style scoped>
.fetures-row {
  background-color: #386233;
  box-shadow: 0 -5px 5px -5px #333, 0 5px 5px -5px #333;
}
</style>
