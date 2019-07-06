<template>
    <div class="filter">
        <div class="form-button">
            <m-fab class="form-button__button" @click="toggleForm">
                <img src="~@/assets/img/filter-list.svg" slot="icon" alt="Filter" height="18" width="12">
            </m-fab>
        </div>
        <div class="filter__popup" :class="{'active': activeForm}">
                <div class="filter__popup__top">
                    <a href="#" class="filter__popup__top__link" @click="toggleForm">Clear All</a>
                    <m-button raised class="filter__popup__top__btn" @click="toggleForm">See recipes</m-button>
                </div>
                <div class="filter__popup__body">
                    <FilterFormCheckboxGroup titleHead="Cuisine" :cousines="['Caribbean', 'Greek', 'French', 'Indian', 'Chinese', 'Caribbean', 'Indian']" />                   
                    <div class="filter__popup__sliders">
                        <FilterFormSliderItem
                            class="slider"
                            itemName="Calories Range"
                            :min="0"
                            :max="10000"
                            measure="kCal"
                            />
                        <FilterFormSliderItem
                            class="slider"
                            itemName="Cooking Time"
                            :min="0"
                            :max="210"
                            measure="min"
                            />
                    </div>
                    <m-button @click="toggleForm" raised class="filter__popup__mobile__btn">See recipes</m-button>
                </div>
        </div>
        <div class="overlay" :class="{'overlay__active': activeForm}" @click="toggleForm"></div>
    </div>
</template>

<script>
import Vue from "vue";
import Fab from 'material-components-vue/dist/fab';
import Button from 'material-components-vue/dist/button';
import FilterFormCheckboxGroup from "@/components/FilterFormCheckboxGroup.vue";
import FilterFormSliderItem from "@/components/FilterFormSliderItem.vue";

Vue.use(Fab);
Vue.use(Button);

export default {
  name: 'FilterForm',
  components: {FilterFormCheckboxGroup, FilterFormSliderItem},
  data: function () {
    return {
        activeForm: false
    }
  },
  methods: {
    toggleForm: function() {
        this.activeForm = (this.activeForm ? false : true);
    },  
  }
}
</script>

<style lang="scss">
    @import '../assets/css/settings.scss';
    @import "material-components-vue/dist/fab/styles";
    @import "material-components-vue/dist/button/styles";
    .overlay {
        display: none;
        &__active {
            @media (--desktop) {
                display: block;
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: 8;
                background-color: rgba(255, 255, 255, 0.6);
            }
        }
    }
    .form-button {
        display: flex;
        &__button {
            @include mdc-fab-container-color($main-color);
            margin-left: auto;
            margin-top: -36px;
            width: 72px;
            height: 72px;
            @media (--mobile) {
                margin-top: 0;
            }
        }
        @media (--mobile) { 
            position: fixed;
            right: 16px;
            bottom: 16px;
            z-index: 9;            
        }
    }
    .filter__popup {
        position: fixed;
        @media (--desktop) {
            top: 300px;
            margin-left: calc(#{$main-lg-width} - 490px);
        }
        z-index: 9;
        background: #fff;
        width: 490px;
        font-family: Lato;
        box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 8px 17px 0 rgba(0, 0, 0, 0.2);
        display: block;

        @media (--mobile) {
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        @media (--tablet) {
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            position: fixed;
        }

        &:not(.active) {
            display: none;
        }
        &__top {
            display: flex;
            box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.13), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
            padding: 10px 16px 8px 16px;
            align-items: center;
            &__link {
                color: $main-color;
                font-size: 16px;
                letter-spacing: -0.03px;
                text-decoration: none;
            }
            &__btn {
                margin-left: auto;
            }
        }
        &__btn, &__top__btn {
            @include mdc-button-filled-accessible(#1eaaf1);
            @include mdc-button-ink-color(#fff);
        }
        &__body {
            padding: 16px 18px 10px 16px;
            @media (--mobile) {
                height: calc(100% - 140px);
                overflow: scroll;
            }
            @media (--tablet) {
                height: calc(100% - 140px);
                overflow: scroll;
            }
        }
        &__mobile {
            &__btn {
                @media (--desktop) {
                    display: none;
                }
                @include mdc-button-filled-accessible(#1eaaf1);
                @include mdc-button-ink-color(#fff);
                display: block;
                position: fixed;
                bottom: 10px;
                z-index: 98;
                width: calc(100% - 34px);
                left: 50%;
                transform: translate(-50%, 0);
            }
        }
    }
    .slider {
        margin-top: 25px;
    }
</style>