<template>
    <div class="filter">
        <div class="form-button">
            <m-fab class="form-button__button">
                <m-icon slot="icon" icon="filter_list"/>
            </m-fab>
        </div>
    </div>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from "vue";
import Fab from 'material-components-vue/dist/fab';
import Icon from 'material-components-vue/dist/icon';

Vue.use(Fab);
Vue.use(Icon);

export default {
  name: 'FilterForm',
}
</script>

<style lang="scss">
    @import '../assets/css/settings.scss';
    @import "material-components-vue/dist/fab/styles";
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
</style>