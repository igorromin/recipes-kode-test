<template>
    <div class="header" :class="{'header-cover': expand, 'header-sticy': scrolled}">
        <div class="header__inner">
            <div class="header__main-row">
                <router-link :to="{ name: 'home'}" class="header__link">
                    <div class="header__logo">
                        <span class="header__logo-text">AirRecipes</span>
                    </div>
                </router-link>
                <div class="header__form"><SearchForm/></div>
            </div>
            <h1 v-if="expand" class="header__page-title">Find the best recipes!</h1>
        </div>
    </div>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue";

export default {
    name: 'HeaderModule',
    components: {SearchForm},
    props: {
        full: { type: Boolean, required: false }
    },
    data() {
        return {
            limitPosition: 150,
            scrolled: false,
            lastPosition: 0,
            expand: false,
        };
    },
    mounted() {
        this.expand = this.full;
    },
    methods: {
        handleScroll() {
            if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
                this.expand = false;
                this.scrolled = true;
            }             
            if (this.lastPosition > window.scrollY && this.limitPosition > window.scrollY) {
                this.expand = true;
                this.scrolled = false;
            }
            this.lastPosition = window.scrollY;
        }
    },
    created() {       
        if (this.full) {
            window.addEventListener("scroll", this.handleScroll);
        }
    },
    destroyed() {
        if (this.full) {
            window.removeEventListener("scroll", this.handleScroll);
        }
    }
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
    transition: background 1s;
    &:not(&-cover) {
        background: $(main-color);
    }
    &-cover {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0), #212121), url('~@/assets/img/header_cover.png');
        background-size: cover;
        @media (--tablet) { 
            background-position: center;
        }
        @media (--mobile) { 
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0), #212121), url('~@/assets/img/header_cover_full.jpg');
            background-position: 42% 0;
            background-size: 169% 169%;
            box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.13), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
        }
    }
    &-sticy {
        width: 100%;
        position: fixed;
        margin: 0 auto;
        z-index: 9;
        top: 0;
        /*& ~ div {
            margin-top: 214px;
        }*/
    }
    &__link {
        text-decoration: none;
    }
    &__inner {
        margin: 0 auto;
        justify-content: center;
        @media (--desktop) {           
            width: $(main-lg-width);
        }
        @media (--tablet-ls) {           
            width: $(main-tablet-ls-width);
        }
    }
    &__logo-text {
        font-family: Rubik;
        font-size: 28px;
        font-weight: 800;
        color: #fff;
    }
    &__main-row {
        display: flex;
        height: 64px;
        box-sizing: border-box;
        align-items: center;
        @media (--mobile) {
            padding: 16px;
        }
        @media (--tablet-pr) {
            padding: 16px 68px;
        }
        @media (--tablet-ls) {
            padding: 16px;
        }
    }
    &__page-title {
        display: inline-flex;
        text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
        font-family: Lato;
        font-size: 45px;
        font-weight: 300;     
        color: #fff;
        margin: 49px 0 46px 0;
        @media (--mobile) {           
            padding: 0 16px;
        }
    }
    &__form {
        margin-left: auto;
    }
}
</style>