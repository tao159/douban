<template>
    <div class="starsW">
       <section>
           <img :src="img" alt="">
           <img :src="img" alt="">
           <img :src="img" alt="">
           <img :src="img" alt="">
           <img :src="img" alt="">
           <span>9.0</span>
       </section>

    </div>
</template>

<script>
import starImg from 'common/images/star_full.png'
export default {
    data(){
        return{
            img:starImg
        }
    }
}
</script>

<style lang="stylus" scoped>
.starsW
    width:100%
    padding-top:3px
    section 
        width:100%
        font-size:0
        text-align:center
        img 
            width:11px
            display:inline-block
            vertical-align:top
        span 
            font-size:12px
            color:#9b9b9b
            vertical-align:top
            margin-left:10px
</style>
