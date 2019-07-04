<template>
    <m-text-field v-model="text" id="textfield">
        <m-floating-label for="textfield">Textfield label</m-floating-label>
        <m-line-ripple slot="bottomLine"/>
    </m-text-field>
</template>

<script>
import Vue from "vue";
import TextField from 'material-components-vue/dist/text-field';
import FloatingLabel from 'material-components-vue/dist/floating-label';
import LineRipple from 'material-components-vue/dist/line-ripple';

Vue.use(TextField)
Vue.use(FloatingLabel)
Vue.use(LineRipple)


export default {
  name: 'SearchForm',
}
</script>

<style lang="scss">
  @import "material-components-vue/dist/text-field/styles";
  @import "material-components-vue/dist/floating-label/styles";
  @import "material-components-vue/dist/line-ripple/styles";
</style>