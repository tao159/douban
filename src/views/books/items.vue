<template>
    <div class="books-list">
        <loading v-if="onoff" class="loading"></loading>
        <div v-if="!onoff">
            <router-link class="books-list-items" v-for="(item,index) in booksList" to="" :key="index">
                <div class="item-left">
                    <img v-lazy="'https://images.weserv.nl/?url='+item.cover.url" alt="">
                </div>
                <div class="item-right">
                    <p class="books-title">{{item.title}}</p>
                    <stars :rating='item.rating' class="stars-component"></stars>
                    <p class="books-subtitle">{{item.card_subtitle}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import {getbooksList} from 'api/books'
import loading from '@/components/loading/loading'
import stars from '@/components/stars/stars'
export default {
    components:{
        loading,
        stars
    },
    data(){
        return{
            booksList:[],
            onoff:true
        }
    },
    methods:{
        _getbooksList(){
            const _this=this
            getbooksList().then(res=>{
                _this.onoff=false
                _this.booksList=res.subject_collection_items
            })
        }
    },
    mounted(){
        const _this=this
        setTimeout(()=>{
            _this._getbooksList()
        },20)
    }
}
</script>

<style lang="stylus" scoped>
.books-list
    .loading
        margin-top:30px
    div
        padding-top:5px
        .books-list-items
            padding:20px 4%
            display:flex
            position:relative
            &:after
                position:absolute
                left:0
                bottom:0
                content:''
                width:100%
                height:1px 
                background:#ccc
            .item-left
                margin-right:15px
                img 
                    width:100px
            .item-right
                .books-title
                    font-size:17px
                    padding:5px 0 5px
                    color:#494949
                    font-weight: bold
                .stars-component
                    width:90px
                    margin-left:-6px
                .books-subtitle
                    font-size:12px
                    padding-top:7px
                    color:#9b9b9b
                    line-height:17px
</style>
