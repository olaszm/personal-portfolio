<template>
    <div class='container'>
        <div class="container__inner wrapper">

          <span class="close-btn hoverable" @click="closeImageViewer">
            <img src="@/assets/x.svg" alt="X"   />
          </span>

            <div class="image-container">
                <span class="chavron chavron--left" @click="prevImage">prev</span>
                <img v-for="(item, index) in images" :key="index" :src="`${publicPath}${item}.webp`" :class="currentImageIndex == index ? 'current' : 'null'">
                <span class="chavron chavron--right" @click="nextImage">next</span>
            </div>
        </div>
    </div>
</template>

<script>
import { EventBus } from "@/plugins/eventbus.js";
export default {
    props: ['images', 'curr'],
    data() {
        return {
            currentImageIndex: this.$props.curr, 
            publicPath: process.env.BASE_URL,
        }
    },

    methods: {
        closeImageViewer(){
            EventBus.$emit('toggleImageViewer', false)
        },
        nextImage(){
            if(this.currentImageIndex >= this.$props.images.length -1){
                this.currentImageIndex = 0
            } else {
                this.currentImageIndex++
            }
        },
        prevImage(){
             if(this.currentImageIndex <= 0){
                this.currentImageIndex = this.$props.images.length -1
            } else {
                this.currentImageIndex--
            }
        }
    },
}
</script>

<style scoped lang='scss'>
.container {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0,0.7);
}

.image-container {
    height: 550px;
    width: 100%;
    position: relative;
    img {
        position:absolute;
        left:50%;
        transform: translate(-50%);
        top:0;
        // height: 100%;
        width: 70%;
    }
}

.chavron {
    position: absolute;
    color:red;
    &--right{
        right: 0;
        top: 50%;
    }
    &--left{
        left: 0;
        top: 50%;
    }
}

.current{
    z-index: 200;
}
.null {
    opacity: 0;
    z-index: 0;
}
</style>
