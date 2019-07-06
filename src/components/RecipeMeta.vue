<template>
    <div class="detail-page__meta">
        <span class="detail-page__meta__headline detail-page__meta__headline__small">
            {{recipe.cuisine.title}}
        </span>
        <h1 class="detail-page__meta__headline detail-page__meta__headline__main">{{recipe.title}}</h1>
        <div class="detail-page__meta__icons-block">
            <div class="detail-page__meta__icons-block__icon">
                <font-awesome-icon :icon="timeIcon" /><span class="detail-page__meta__icons-block__icon__text">{{Math.round(recipe.cookTime/60)}} min</span>
            </div>
            <div class="detail-page__meta__icons-block__icon detail-page__meta__icons-block__icon__first-uppercase">
                <font-awesome-icon :icon="difficultyIcon" /><span class="detail-page__meta__icons-block__icon__text">{{recipe.difficulty}}</span>
            </div>
            <div class="detail-page__meta__icons-block__icon">
                <font-awesome-icon :icon="eatIcon" /><span class="detail-page__meta__icons-block__icon__text">{{recipe.caloricity}} kCal</span>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

export default {
    name: "RecipeMeta",
    data () {
        return {
            timeIcon: faClock,
            difficultyIcon: faTasks,
            eatIcon: faUtensils
        }
    },
    props: {
        recipe: { type: Object, required: true }
    },
    components: {FontAwesomeIcon}
};
</script>

<style>
    @import '../assets/css/settings.css';
    .detail-page__meta {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;        
        &__headline__small {
            color: $(text-color-lightdark);
            font-family: 'Lato';
            font-size: 12px;
            line-height: 2;
            text-transform: uppercase;
            display: block;
        }
        &__headline__main {
            color: $(text-color-dark);
            font-family: 'Lato';
            font-size: 26px;
            line-height: 1.23;
            letter-spacing: 2.6px;           
            font-weight: 600;
            display: block;
            margin-top: -9px;
        }
        &__icons-block {
            display: flex;
            width: 350px;
            justify-content: space-between;
            margin-top: 16px;
            color: $(text-color-lightdark);
            &__icon {           
                &__first-uppercase {
                    text-transform: capitalize;
                }
                &__text {                   
                    font-family: 'Lato';
                    font-size: 15px;
                    font-weight: 300;
                    line-height: 1.6;
                    letter-spacing: 0.58px;
                    margin-left: 5px;
                }
            }
        }
    }
</style>