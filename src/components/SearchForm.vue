<template>
    <div class="input input-transparent-icon" :class="{'input-transparent-icon__active': activeForm}">
        <font-awesome-icon :icon="searchIcon" @click="toggleForm" class="input-transparent-icon__icon" />
        <font-awesome-icon :icon="exitIcon" @click="toggleForm" class="input-transparent-icon__icon input-transparent-icon__icon__exit" />
        <m-text-field id="textfield" class="input input-transparent" placeholder="Search" aria-label="Search">
            <m-line-ripple slot="bottomLine"/>
        </m-text-field>
    </div>
</template>

<script>
import Vue from "vue";
import TextField from 'material-components-vue/dist/text-field';
import LineRipple from 'material-components-vue/dist/line-ripple';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


Vue.use(TextField);
Vue.use(LineRipple);

export default {
  name: 'SearchForm',
  data () {
    return {
        searchIcon: faSearch,
        exitIcon: faTimes,
        activeForm: false
    }
  },
  components: {FontAwesomeIcon},
  methods: {
    toggleForm: function() {
        this.activeForm = (this.activeForm ? false : true);
    },
  }
}
</script>

<style lang="scss">
  $mdc-theme-primary: #fff;
  @import "material-components-vue/dist/text-field/styles";
  @import "material-components-vue/dist/line-ripple/styles";
  @import '../assets/css/settings.scss';
  .input-transparent-icon {
      display: flex;
      align-items: center;
      &__icon {
            color: #fff;
            margin-right: 2px;
            cursor: pointer;
            &__exit {
              display: none;            
            }
            
      }
      &:not(&__active) {
        & .input {
          @media (--mobile) { 
            display: none;
          }
        }
      }
      &__active {
        & .input-transparent-icon__icon {
          display: block;
          color: $text-color-lightdark;
        }
        & .input-transparent-icon__icon:not(.input-transparent-icon__icon__exit) {
            display: none;
          }
        
        & .input {      
          @media (--mobile) { 
            @include mdc-text-field-bottom-line-color(rgba(0,0,0,0));
            @include mdc-text-field-hover-bottom-line-color(rgba(0,0,0,0))
            @include mdc-text-field-ink-color($text-color-dark);
            margin-left: 20px;
            width: 100%;
            & input {             
              &::placeholder {
                color: $text-color-lightdark;
              }
            }
          }
        }
        @media (--mobile) { 
          position: absolute;
          width: 100%;
          left: 0;
          background: #fff;
          height: 64px;
          top: 0;
          padding: 16px;
          box-sizing: border-box;
        }
        & input::placeholder {
          @media (--mobile) { 
            color: $text-color-lightdark;
          }
        }
      }
      
  }
  .input-transparent {
    @include mdc-text-field-shape-radius(0, false);     
    @include mdc-text-field-bottom-line-color(#fff);
    @include mdc-text-field-hover-bottom-line-color(#adadad)
    @include mdc-text-field-ink-color(#fff);
    @include mdc-text-field-fill-color(rgba(0,0,0,0));
    width: 160px;
    height: 33px;
    transition: all 1s;
    & input::placeholder {
        color: #fff;
    }
  }
  #textfield {
    padding: 0;
    padding-left: 16px;
  }
  ::placeholder.mdc-text-field__input {
    color: #fff !important;
  }
</style>