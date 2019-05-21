<template>
    <div class="moviesList">
        <router-link  class="flex-items" v-for="(item,index) in list" :key="index" :to="'/movies/'+item.id">
            <div class="imgW"><img v-lazy="'https://images.weserv.nl/?url='+item.cover.url" alt=""></div>
            <p>{{item.title}}</p>
            <stars :rating='item.rating' imgwidth='11' fontsize='12'></stars>
        </router-link>
    </div>
</template>

<script>
import stars from '@/components/stars/stars'
export default {
    props:{
        list:{
            type:Array,
            default:null
        }
    },
    components:{
        stars
    }
}
</script>

<style lang="stylus" scoped>
.moviesList
    display:flex
    flex-direction:row
    flex-wrap:wrap
    justify-content:space-between
    padding: 0 4% 40px
    .flex-items
        max-width:91.2px
        margin-top:8%
        // margin-left:4%
        div.imgW
            height:137.23px
        img
            width:100%
            
    p
        font-size:13px
        color:#494949
        overflow:hidden
        text-overflow:ellipsis
        width:100%
        text-align:center
        -webkit-line-clamp: 1
        -webkit-box-orient: vertical
        white-space: nowrap
        padding-top:5px
            
</style>
