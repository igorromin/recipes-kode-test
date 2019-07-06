<template>
    <div class="filter">
        <div class="form-button">
            <m-fab class="form-button__button" @click="toggleForm">
                <m-icon slot="icon" icon="filter_list"/>
            </m-fab>
        </div>
        <div class="filter__popup" :class="{'active': activeForm}">
                <div class="filter__popup__top">
                    <a href="#" class="filter__popup__top__link">Clear All</a>
                    <m-button raised class="filter__popup__top__btn">See recipes</m-button>
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
                    <m-button raised class="filter__popup__mobile__btn">See recipes</m-button>
                </div>
            </div>
    </div>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from "vue";
import Fab from 'material-components-vue/dist/fab';
import Icon from 'material-components-vue/dist/icon';
import Button from 'material-components-vue/dist/button';
import FilterFormCheckboxGroup from "@/components/FilterFormCheckboxGroup.vue";
import FilterFormSliderItem from "@/components/FilterFormSliderItem.vue";

Vue.use(Fab);
Vue.use(Icon);
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
    .form-button {
        display: flex;
        &__button {
            @include mdc-fab-icon-size(32px);
            @include mdc-fab-container-color($main-color);
            margin-left: auto;
            margin-top: -36px;
            width: 72px;
            height: 72px;
        }
    }
    .filter__popup {
        position: absolute;
        top: 500px;
        right: 200px;
        z-index: 9;
        background: #fff;
        width: 490px;
        font-family: Lato;
        box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 8px 17px 0 rgba(0, 0, 0, 0.2);
        display: block;
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
        }
        &__mobile {
            &__btn {
                display: none;
            }
        }
    }
    .slider {
        margin-top: 25px;
    }
</style>