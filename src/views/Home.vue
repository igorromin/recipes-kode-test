<template>
    <div class="home-page">
      <StickyImageHeader></StickyImageHeader>
      <div class="workspace">
        <div class="workspace__inner">
            <div class="workspace__inner__form">
                <FilterForm></FilterForm>
            </div>
            <div class="workspace__inner__list">
                <RecipesList></RecipesList>
            </div>
        </div>
    </div>
    </div>  
</template>

<script>
import StickyImageHeader from "@/components/StickyImageHeader.vue";
import FilterForm from "@/components/FilterForm.vue";
import RecipesList from "@/components/RecipesList.vue";

export default {
  name: "home",
  components: {StickyImageHeader, FilterForm, RecipesList}
};
</script>

<style>
@import '../assets/css/settings.css';
.workspace {
    &__inner {
        width: $(main-lg-width);
        margin: 0 auto;
        justify-content: center;

        &__list {
            margin-top: 34px;
        }
    }
}

</style>