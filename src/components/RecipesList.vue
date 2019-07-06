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
import {MAIN_URL} from "@/store/index.js";
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
        fetch(MAIN_URL + 'list.json')
        .then(function(response) {
          return response.json();
        })
        .then(function(rsp) {
          global_view.recipes = rsp.recipes;
          global_view.isReady = true;
        });
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