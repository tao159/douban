<template>
    <div class="booksW">
        <scroll>
            <div class="books-content">
                <h3 class="page-title">最受关注图书｜非虚构类</h3>
                <items></items>
            </div>
        </scroll>
    </div>
</template>

<script>
import scroll from '@/components/scroll/scroll'
import items from './items'

export default {
    data(){
        return{}
    },
    
    components:{
        scroll,
        items
    }
}
</script>

<style lang="stylus" scoped>
.booksW 
    position:fixed
    width:100%
    top:47px
    bottom:0
    .books-content
        padding:20px 2% 0
        .page-title
            font-size:24px
            font-weight:normal
            box-sizing:border-box
            padding-left:4%
            color:#494949
</style>
