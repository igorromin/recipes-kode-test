<template>
    <div class="card-list">
        <h2 v-if="card_title" class="card-list__headline">
            {{card_title}}
        </h2>
        <div class="card-list__inner">
            <ul class="card-list__inner__list">
                <li v-for="(item, index) in list" v-bind:key="index" class="card-list__inner__list__item" :class="{'card-list__inner__list__item__number': numbers}">
                    <span class="card-list__inner__list__item__text" :class="{'card-list__inner__list__item__number__text': numbers}">{{item}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "CardList",
  props: {
    card_title: { type: String, required: false },
    list: { type: Array, required: true },
    numbers: { type: Boolean, required: false }
  },
};
</script>

<style>
    @import '../assets/css/settings.css';
    .card-list {
        margin-bottom: 37px;
        width: 792px;
        font-family: 'Lato';
        &__headline {
            font-size: 24px;
            font-weight: bold;
            line-height: 1;
            letter-spacing: 3px;
            color: $(text-color-dark);
            text-transform: uppercase;
            text-align: center;
            display: block;
            margin-bottom: 13px;          
        }
        &__inner {
            box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.13), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
            padding: 24px 16px 24px 48px; 
            &__list {
                list-style: none;
                counter-reset: list-counter;
                &__item {
                    color: $(text-color-dark);
                    font-size: 21px;
                    font-weight: 300;
                    line-height: 1.43;
                    margin-top: 7px;
                    counter-increment: list-counter;
                    &:first-child {
                        margin-top: 0;
                    }
                    &:not(&__number):before {
                        content: "\2022";
                        color: $(main-color);
                        display: inline-block;
                        width: 27px;
                        margin-left: -27px;
                    }
                    &__number {
                        &__text {
                            padding-left: 10px;
                        }
                        &:before {
                            content: counter(list-counter);
                            color: #fff;
                            display: inline-block;
                            width: 18px;
                            height: 18px;
                            margin-left: -27px;
                            background: #fd9727;
                            border-radius: 50%;
                            font-size: 14px;
                            font-weight: 300;
                            line-height: 1.2;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
</style>