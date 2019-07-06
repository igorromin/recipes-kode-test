<template>
    <div class="grid" v-if="isReady">
        <RecipePreview
            v-for="recipe in recipes"
            :key="recipe.id"
            :recipe="recipe"
        />
    </div>
</template>

<script>
import RecipePreview from "@/components/RecipePreview.vue";
import NetworkService from '@/store/NetworkService.js';
export default {
  name: 'RecipesList',
  components: {RecipePreview},
  data: function () {
    return {
        recipes: {},
        isReady: false
    }
  },
  mounted() {
    this.fetchRecipes();
  },
  methods: {
    fetchRecipes() {
        let global_view = this; 
        NetworkService.getRecipes()
        .then(data => {
          global_view.recipes = data.recipes;
          global_view.isReady = true;
        })       
    },
  }
}
</script>

<style>
.grid {
    display: flex;
    flex-wrap: wrap;
    margin-right: -17px;
    @media (--mobile) { 
      margin: 0;
    }
}
</style>