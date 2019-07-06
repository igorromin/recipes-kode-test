<template>
    <div class="slider__inner">
        <agile :infinite="false">
            <div class="slider__slide" v-for="(item, index) in slides" v-bind:key="index">
                <img :src="item">
            </div>
        <template slot="prevButton"><font-awesome-icon :icon="arrow" /></template>
        <template slot="nextButton"><font-awesome-icon :icon="arrow" /></template>
        </agile>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { VueAgile } from 'vue-agile';
export default {
    name: 'SliderBlock',
    data () {
        return {
            arrow: faChevronRight
        }
    },
    components: {
        agile: VueAgile,
        FontAwesomeIcon
    },
    props: {
        slides: { type: Array, required: true }
    }
}
</script>

<style>
    @import '../assets/css/settings.css';
    .slider {
        margin-bottom: 20px;
        &__inner {
            box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.13), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
        }
        &__slide {
            display: block;
            height: 500px;
            object-fit: cover;
            width: 100%;
        }
    }
    .agile {
        &__nav-button {
            background: transparent;
            border: none;
            color: #fff;
            cursor: pointer;
            font-size: 40px;
            position: absolute;
            transition-duration: .3s;
            top: 50%;
            transform: translate(-50%,-50%);        
            &:disabled {
                opacity: 0;
            }
            &:hover {
                opacity: 1;
            }
            &--prev {
                left: 60px;
                transform: translate(-50%,-50%) scale(-1, 1);        
            }
            &--next {
                right: 60px;
            }
        }
        &__dots {
            bottom: 45px;
            left: 50%;
            position: absolute;
            transform: translateX(-50%);
        }
        &__dot {
            margin: 0 7px;

            button {
                background-color: $(text-color-lightdark);
                border-radius: 50%;
                cursor: pointer;
                display: block;
                height: 6px;
                width: 6px;
                font-size: 0;
                line-height: 0;
                margin: 0;
                padding: 0;
                transition-duration: .3s;     
                border: 0;        
            }
            &--current, &:hover {
                button {
                    background-color: #fff;
                    height: 8px;
                    width: 8px;
                }
            }
        }
    }	
</style>