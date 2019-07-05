<template>
    <div class="item-card">
        <m-card primaryAction class="item-card__inner">
            <m-card-media><img class="item-card__image" :src="recipe.thumbnail"></m-card-media>
            <div class='item-card__primary'>
                <span class="item-card__title">{{recipe.title}}</span>
                <div class="item-card__semiblock">
                    <span class="item-card__semiblock__leftside">{{recipe.cuisine.title}}</span>
                    <span class="item-card__semiblock__rightside">{{recipe.caloricity}} kCal</span>
                </div>
                <span class="item-card__body">{{recipe.description}}</span>               
            </div>
            <div class="item-card__actions">
                <router-link :to="recipeLink" class="item-card__actions__link">
                    Read More  <span class="item-card__actions__link__icon"><m-icon slot="icon" icon="arrow_forward"/></span>
                </router-link>
            </div>
        </m-card>
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
        padding-right: 17px;
        box-sizing: border-box;
        margin-bottom: 17px;
        &__primary {
            padding: 24px 24px 0 24px;
            height: 100%;
        }
        &__actions {
            padding: 5px 24px 24px 24px;
                &__link {
                color: $main-color;
                text-decoration: none;
                font-family: 'Lato';
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
        }
        &__title {
            font-family: 'Lato';
            font-weight: 600;
            font-size: 23px;
            color: $text-color-dark;
        }
        &__body {
            font-family: 'Lato';
            font-weight: 300;
            font-size: 21px;
            line-height: 1.43;
            color: $text-color-dark;
        }
        &__semiblock {
            display: flex;
            font-family: 'Lato';
            color: $text-color-dark;
            font-size: 14px;
            margin: 5px 0 12px 0;            
            &__rightside {
                font-weight: 300;
                margin-left: auto;
            }
        }       
    }
    .mdc-card__primary-action {
        cursor: initial;
    }
</style>