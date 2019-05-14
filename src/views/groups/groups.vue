<template>
    <div class="groupW">
        <scroll class="group-container">
            <list-item></list-item>
        </scroll>
    </div>
</template>

<script>

import listItem from './item'
import Scroll from '@/components/scroll/scroll'
export default {
    data(){
        return{
            list:[]
        }
    },
    components:{
        listItem,
        Scroll
    },
    created(){
       
    }
}
</script>

<style lang="stylus" scoped>
    .groupW
        position:fixed
        width:100%
        top:47px
        bottom:0
        .group-container
            height:100%
            overflow:hidden
</style>
