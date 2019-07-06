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

import {MAIN_URL} from "@/store/index.js";

export default {
  name: "DetailPage",
  components: {RecipeMeta, CardList, SliderBlock, HeaderModule},
  data: function () {
    return {
        recipe: {},
        isReady: false
    }
  },
  props: ['post_id'],
  mounted() {
    this.fetchRecipe();
  },
  methods: {
    fetchRecipe() {
        let global_view = this;
        fetch(MAIN_URL + 'detail_' + global_view.post_id + '.json')
        .then(function(response) {
          return response.json();
        })
        .then(function(rsp) {
          global_view.recipe = rsp.recipe;
          global_view.isReady = true;
        });       
    },
  }
};
</script>

<style>
@import '../assets/css/settings.css';

.detail-page {
  &__inner {
    margin: 0 auto;
    margin-top: 30px;
    justify-content: center;
    @media (--desktop) {
      width: $(main-lg-width);
    }
    @media (--tablet-ls) {           
      width: $(main-tablet-ls-width);
    }
    @media (--tablet-pr) {
      padding: 0 28px;
    }
    &__text-blocks {
      margin-top: 27px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>