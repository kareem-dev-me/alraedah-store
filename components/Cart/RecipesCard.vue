<template>
  <v-container>
    <p id="products-list" class="text-center text-h4">Recipes for you</p>

    <v-card
      v-for="recipe in recipes"
      :key="recipe.id"
      class="card mx-auto my-4 rounded-lg"
      max-width="400"
    >
      <v-img :src="recipe.image" class="align-end">
        <div class="text white--text rounded">
          <v-card-title class="title">
            {{ recipe.title }}
          </v-card-title>
          <v-card-subtitle class="pb-2 sub-title">
            Missed ingredients: {{ recipe.missedIngredientCount }}
          </v-card-subtitle>
        </div>
      </v-img>

      <v-card-text v-if="recipe.missedIngredients">
        <div v-for="missed in recipe.missedIngredients" :key="missed.id">
          <v-row>
            <v-col cols="12" md="6">
              <p>- {{ missed.originalName }}</p>
            </v-col>

            <v-col cols="12" md="6">
              <v-img :src="missed.image" max-height="50" contain></v-img>
            </v-col>
          </v-row>

          <v-divider class="my-4"></v-divider>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    recipes: Array,
  },
}
</script>

<style scoped>
.card {
  box-shadow: 6px 6px #255a1fcb, 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%) !important;
}
.text {
  background-color: #000000ac;
}
.title {
  word-break: normal;
}
.sub-title {
  opacity: 0.7;
}
</style>
