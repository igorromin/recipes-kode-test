<template>
    <div class="grid">
        <RecipePreview
            v-for="recipe in recipes"
            :key="recipe.id"
            :recipe="recipe"
        />
    </div>
</template>

<script>
import RecipePreview from "@/components/RecipePreview.vue";
import {recipes as DataRecipes} from "@/store/index.js";
export default {
  name: 'RecipesList',
  components: {RecipePreview},
  data: function () {
    return {
        recipes: {}
    }
  },
  mounted() {
    this.fetchRecipes();
  },
  methods: {
    fetchRecipes() {
        this.recipes = DataRecipes.recipes;
    },
  }
}
</script>

<style>
.grid {
    display: flex;
    flex-wrap: wrap;
    margin-right: -17px;
}
</style>