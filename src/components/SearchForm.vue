<template>
    <div class="input input-transparent-icon">
        <m-icon slot="icon" icon="search" class="input-transparent-icon__icon"/>
        <m-text-field id="textfield" class="input input-transparent" placeholder="Search" aria-label="Search">
            <m-line-ripple slot="bottomLine"/>
        </m-text-field>
    </div>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from "vue";
import TextField from 'material-components-vue/dist/text-field';
import LineRipple from 'material-components-vue/dist/line-ripple';
import Icon from 'material-components-vue/dist/icon';

Vue.use(TextField);
Vue.use(LineRipple);
Vue.use(Icon);

export default {
  name: 'SearchForm',
}
</script>

<style lang="scss">
  $mdc-theme-primary: #fff;
  @import "material-components-vue/dist/text-field/styles";
  @import "material-components-vue/dist/line-ripple/styles";
  .input-transparent-icon {
      display: inline-block;
      &__icon {
            vertical-align: middle;
            color: #fff;
            margin-right: 2px;
            cursor: default;
      }
  }
  .input-transparent {
    @include mdc-text-field-shape-radius(0, false);     
    @include mdc-text-field-bottom-line-color(#adadad);
    @include mdc-text-field-hover-bottom-line-color(#adadad)
    @include mdc-text-field-ink-color(#fff);
    @include mdc-text-field-fill-color(rgba(0,0,0,0));
    width: 160px;
    height: 33px;
    & input::placeholder {
        color: #fff;
    }
  }
</style>