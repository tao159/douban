<template>
    <div class="loading">
        <img :src="imgUrl" :style='[style]'alt="">
    </div>
</template>
<script>
import loadingGreen from '@/common/images/loading_green.gif'
import loadingGrey from '@/common/images/loading_grey.gif'
export default {
    props:{
        type:{
            type:[String,Number],
            default:1
        },
        iWidth:{
            type:String,
            default:'40'
        }
    },
    data(){
        return{
            imgUrl:this.type=='2'?loadingGrey:loadingGreen
        }
    },
    computed:{
        style(){
            return{
                width:this.iWidth+'px'
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.loading
    width:100%
    height:30px
    background:transparent
    text-align:center
</style>
