<template>
  <div class="detail-page">
      <HeaderModule/>
      <div v-if="isReady" class="detail-page__inner">
          <div class="slider">
            <SliderBlock :slides="recipe.images"/>
          </div>
          <RecipeMeta :recipe="recipe"/>
          <div class="detail-page__inner__text-blocks">
            <CardList card_title="Ingredients" :list="recipe.ingredients" />
            <CardList card_title="Instructions" :list="recipe.instructions" numbers/>
          </div>
      </div>
  </div>
</template>

<script>
import HeaderModule from "@/components/HeaderModule.vue";
import RecipeMeta from "@/components/RecipeMeta.vue";
import CardList from "@/components/CardList.vue";
import SliderBlock from "@/components/SliderBlock.vue";

import {recipe as RecipeData} from "@/store/index.js";

export default {
  name: "DetailPage",
  components: {RecipeMeta, CardList, SliderBlock, HeaderModule},
  data: function () {
    return {
        recipe: {},
        isReady: false
    }
  },
  mounted() {
    this.fetchRecipe();
  },
  methods: {
    fetchRecipe() {
        this.recipe = RecipeData.recipe;
        this.isReady = true;
    },
  }
};
</script>

<style>
@import '../assets/css/settings.css';

.detail-page {
  &__inner {
    width: $(main-lg-width);
    margin: 0 auto;
    margin-top: 30px;
    justify-content: center;
    &__text-blocks {
      margin-top: 27px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>