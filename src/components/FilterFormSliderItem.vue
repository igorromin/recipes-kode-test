<template>
    <div class="slider__field">
        <span class="slider__field__title">{{itemName}}</span>
        <span class="slider__field__subtitle">{{value[0]}} {{measure}} - {{value[1]}} {{measure}}</span>
        <vue-slider
            class="slider__field__module"
            v-model="value"
            :order="false"
            :dotSize="25"
            tooltip="none"
            ></vue-slider>
    </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
    name: 'FilterFormSliderItem',
    props: {
        itemName: { type: String, required: true },
        min: { type: Number, required: true },
        max: { type: Number, required: true },
        measure: { type: String, required: true },
    },
    data: function () {
        return {
            value: [this.min, this.max],
        }
    },
    components: {VueSlider}
}
</script>

<style>
    @import '../assets/css/settings.css';
    .slider__field {
        font-family: Lato;
        font-size: 16px;
        &__title {           
            color: $(text-color-dark);
        }
        &__subtitle {
            color: $(text-color-lightdark);
            margin: 12px 0;
            display: block;
        }
        &__module {
            padding-left: 12.5px !important;
            padding-right: 12.5px !important;
        }
    }
    .vue-slider {
        &-rail {
            background-color: #bfbfbf;
        }
        &-process {
            background-color: $(main-color) !important;           
        }
        &-dot {
            &-handle {
                width: 25px;
                height: 25px;
                border-radius: 100%;
                background-color: white;
                border: 1px solid #fd9727 !important;
                box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.13), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
            }
        }
    }
</style>