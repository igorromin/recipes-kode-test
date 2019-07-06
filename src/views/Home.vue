<template>
    <div class="home-page">
      <HeaderModule :full="true"/>
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
import HeaderModule from "@/components/HeaderModule.vue";
import FilterForm from "@/components/FilterForm.vue";
import RecipesList from "@/components/RecipesList.vue";

export default {
  name: "home",
  components: {HeaderModule, FilterForm, RecipesList}
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