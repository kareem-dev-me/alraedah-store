<template>
  <div class="card text-center rounded-lg">
    <div>
      <v-icon size="35" color="white">{{ icon }}</v-icon>
    </div>
    <p class="text-overline mb-0">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
  },
}
</script>

<style scoped>
.card {
  padding: 15px;
  box-shadow: 0px 0px 15px #333;
  max-width: 400px;
  margin: 0 auto;
}
</style>
