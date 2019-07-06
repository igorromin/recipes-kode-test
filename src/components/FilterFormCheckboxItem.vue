<template>
    <div class="checkbox__field">
        <m-checkbox :id="item" class="checkbox__field__input"/>
        <label v-bind:for="item" class="checkbox__field__label">{{itemName}}</label>
    </div>
</template>

<script>
import Vue from "vue";
import Checkbox from 'material-components-vue/dist/checkbox';

Vue.use(Checkbox);

export default {
  name: 'FilterFormCheckboxItem',
  props: {
      itemName: { type: String, required: true },
      item: { type: String, required: true }
  }
}
</script>

<style lang="scss">
    @import '../assets/css/settings.scss';
    @import "material-components-vue/dist/checkbox/styles";
    .checkbox__field {
        margin-top: 20px;
        &__input {
            @include mdc-checkbox-container-colors($text-color-dark, #fff, $main-color, $main-color, false);
            width: 14px;
            height: 14px;
            margin-bottom: -8px;
            margin-left: -11px;
        }
        &__label {
            font-family: Lato;
            font-size: 16px;
            color: $text-color-lightdark;
            margin-left: 21px;
        }
    }
</style>