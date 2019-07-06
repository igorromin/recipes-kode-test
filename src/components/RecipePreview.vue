<template>
    <div class="item-card">
        <router-link :to="recipeLink" class="item-card__link">
            <m-card primaryAction class="item-card__inner">
                <m-card-media class="item-card__image-container"><img class="item-card__image" :src="recipe.thumbnail"></m-card-media>
                <div class='item-card__primary'>
                    <span class="item-card__title">{{recipe.title}}</span>
                    <div class="item-card__semiblock">
                        <span class="item-card__semiblock__leftside">{{recipe.cuisine.title}}</span>
                        <span class="item-card__semiblock__rightside">{{recipe.caloricity}} kCal</span>
                    </div>
                    <span class="item-card__body">{{recipe.description}}</span>               
                </div>
                <div class="item-card__actions">
                    <div class="item-card__actions__link">
                        Read More  <span class="item-card__actions__link__icon"><m-icon slot="icon" icon="arrow_forward"/></span>
                    </div>
                </div>
            </m-card>
        </router-link>
    </div>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from "vue";
import Card from 'material-components-vue/dist/card';
import Typo from 'material-components-vue/dist/typography';
import Icon from 'material-components-vue/dist/icon';

Vue.use(Card);
Vue.use(Typo);
Vue.use(Icon);

export default {
    name: 'RecipePreview',
    props: {
        recipe: { type: Object, required: true }
    },
    computed: {
    recipeLink() {
        return {
            name: "detail",
            params: {
                post_id: this.recipe.id
            }
        };
    }
  }
}
</script>

<style lang="scss">
    @import '../assets/css/settings.scss';
    @import "material-components-vue/dist/card/styles";
    .item-card {
        flex: 0 0 33.3%;
        font-family: 'Lato';
        color: $text-color-dark;       
        padding-right: 17px;
        box-sizing: border-box;
        margin-bottom: 17px;
        max-width: 33.3%;
        @media (--tablet-pr) {
            flex: 0 0 50%;
            max-width: 50%;
        }
        @media (--mobile) {
            flex: 0 0 100%;
            margin-bottom: 1px;
            padding-right: 0;
            max-width: 100%;
        }
        &__link {
            text-decoration: none;
            color: $text-color-dark;
        }
        &__primary {
            padding: 24px 24px 0 24px;
            height: 100%;
            @media (--mobile) {
                flex: 0 0 84%;
                box-sizing: border-box;
                padding: 0;
                margin-left: 11px;
            }
        }
        &__actions {
            padding: 5px 24px 24px 24px;
            @media (--mobile) {
                display: none;
            }
            &__link {
                color: $main-color;
                text-decoration: none;
                font-size: 21px;
                display: block;
                &__icon {
                    display: inline-block;
                    vertical-align: middle;
                    transition: all .3s;              
                }               
                &:hover &__icon {
                    margin-left: 10px;
                }
            }
        }
        &__headline {
            display: block;
        }
        &__image {
            @media (--mobile) {
                width: 100%;
                height: 50%;
                border-radius: 4px;
            }
            object-fit: cover;
            height: 100%;
            max-height: 100%;
            max-width: 100%;
            transition: .3s ease-in-out;
        }
        &:hover &__image {
            opacity: 0.95;
        }
        &__inner {
            height: 100%;
            & > div {
                height: 100%;
            }
            transition: box-shadow .3s;
            &:hover {
                box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 8px 17px 0 rgba(0, 0, 0, 0.2);
            }
            @media (--mobile) {
                @include mdc-card-shape-radius(0);
                padding: 16px;
            }
        }
        &__title {
            font-weight: 600;
            font-size: 23px;
            @media (--mobile) {
                font-size: 16px;
            }      
        }
        &__body {      
            font-weight: 300;
            font-size: 21px;
            line-height: 1.43;
            @media (--mobile) {
                font-size: 14px;
                font-weight: normal;
                color: rgba(0, 0, 0, 0.54);
            }
        }
        &__semiblock {
            display: flex;            
            font-size: 14px;
            margin: 5px 0 12px 0;
            @media (--mobile) {
                font-size: 12px;
            }    
            &__rightside {
                font-weight: 300;
                margin-left: auto;
            }
        }       
    }
    .mdc-card {
        &__primary-action {
            cursor: pointer;
            @media (--mobile) {
                display: flex;
                flex-direction: row;
            }
        }
        &__media {
            @media (--mobile) {
                flex: 0 0 16%;
            }
        }
    }
</style>