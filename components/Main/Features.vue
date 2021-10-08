<template>
  <div class="fetures-row white--text py-5">
    <v-container>
      <p
        v-animate-onscroll="'animate__animated animate__fadeInUp'"
        class="text-center text-h4"
      >
        {{ $t('features') }}
      </p>

      <v-row>
        <v-col
          v-for="(item, index) in featuresList"
          :key="index"
          v-animate-onscroll="'animate__animated animate__fadeInUp'"
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
        { icon: 'mdi-magnify', title: this.$t('search-what-you-want') },
        { icon: 'mdi-clock-fast', title: this.$t('very-fast-api') },
        { icon: 'mdi-cart-check', title: this.$t('easy-to-shop') },
        { icon: 'mdi-desktop-mac-dashboard', title: this.$t('easy-to-use') },
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
