<template>
    <header class="header header-cover">
        <div class="header__inner">
            <div class="header__main-row">
                <div class="header__logo">
                    <span class="header__logo-text">AirRecipes</span>
                </div>
                <div class="header__form"><SearchForm></SearchForm></div>
            </div>
            <h1 class="header__page-title">Find the best recipes!</h1>
        </div>
    </header>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue";

export default {
  name: 'StickyImageHeader',
  components: {SearchForm}
}
</script>

<style>
@import '../assets/css/settings.css';

@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/rubik-v8-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Rubik'), local('Rubik-Regular'),
       url('/fonts/rubik-v8-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/rubik-v8-latin-regular.woff') format('woff'); /* Modern Browsers */
}

.header {
    &-cover {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0), #212121), url('~@/assets/img/header_cover.png');
        background-size: cover;
    }
    &__inner {
        width: $(main-lg-width);
        margin: 0 auto;
        justify-content: center;
    }
    &__logo-text {
        font-family: Rubik;
        font-size: 28px;
        font-weight: 500;
        color: #fff;
    }
    &__main-row {
        padding-top: 16px;
    }
    &__page-title {
        display: inline-flex;
        text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
        font-family: Lato;
        font-size: 45px;
        font-weight: 300;     
        color: #fff;
        margin: 49px 0 46px 0;
    }
}
</style>