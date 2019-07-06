<template>
    <div class="group__inner">
        <button class="group__inner__btn" @click="toggleList" :class="{'group__inner__btn__active': activeList}">{{titleHead}} <span class="group__inner__btn__icon" :class="{'group__inner__btn__active__icon': activeList}"><font-awesome-icon slot="icon" :icon="arrowIcon" /></span></button>
        <div class="group__container" :class="{'group__container__active': activeList}">
            <FilterFormCheckboxItem
                v-for="(item, index) in cousines"
                :key="index"
                :itemName="item"
                :item="'item' + index"
            />
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import FilterFormCheckboxItem from "@/components/FilterFormCheckboxItem.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

Vue.use(FilterFormCheckboxItem);

export default {
    name: 'FilterFormCheckboxGroup',
    props: {
        titleHead: { type: String, required: true },
        cousines: { type: Array, required: true }
    },
    data: function () {
        return {
            activeList: false,
            arrowIcon: faChevronDown,
        }
    },
    components: {FilterFormCheckboxItem, FontAwesomeIcon},
    methods: {
        toggleList: function() {
            this.activeList = (this.activeList ? false : true);
        },
    }
}
</script>

<style>
    .group {
        &__inner {
            &__btn {
                border: 0;
                background: transparent;
                position: relative;
                display: flex;              
                font-size: 16px;
                border-bottom: 1px solid #d8d8d8;
                width: 100%;
                color: #000;
                padding: 10px 0;
                outline: none;
                cursor: pointer;
                &__icon {
                    margin-left: auto;
                    transition: transform .3s;
                }
                &__active {
                    &__icon {
                        transform: rotate(180deg)
                    }
                }
            }
        }
        &__container {
            height: 0;
            overflow: hidden;
            &__active {
                height: 100%;
            }
        }
    }
</style>