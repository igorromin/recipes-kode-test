<template>
    <div class="group__inner">
        <button class="group__inner__btn">{{titleHead}} <span class="group__inner__btn__icon"><m-icon slot="icon" icon="keyboard_arrow_down"/></span></button>
        <FilterFormCheckboxItem
            v-for="(item, index) in cousines"
            :key="index"
            :itemName="item"
            :item="'item' + index"
        />
    </div>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from "vue";
import Icon from 'material-components-vue/dist/icon';
import FilterFormCheckboxItem from "@/components/FilterFormCheckboxItem.vue";


Vue.use(Icon);

export default {
    name: 'FilterFormCheckboxGroup',
    props: {
        titleHead: { type: String, required: true },
        cousines: { type: Array, required: true }
    },
    components: {FilterFormCheckboxItem}
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
                padding: 0;
                &__icon {
                    margin-left: auto;
                }
            }
        }
    }
</style>