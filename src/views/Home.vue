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
        margin: 0 auto;
        justify-content: center;
        @media (--tablet-pr) {           
            width: $(main-tablet-pr-width);
        }
        @media (--tablet-ls) {           
            width: $(main-tablet-ls-width);
        }
        @media (--desktop) {           
            width: $(main-lg-width);
        }
        &__list {
            margin-top: 34px;
            @media (--tablet-pr) {           
                padding: 0 10px;
            }
            @media (--mobile) {     
                margin-top: 0;
            }
        }
    }
}
.header {
    &__inner {
        @media (--tablet-pr) {           
            width: $(main-tablet-pr-width);
        }  
    }
    &__main-row {
        padding: 16px 0;
        @media (--mobile) {           
            padding: 16px;
        }  
    }   
}

</style>