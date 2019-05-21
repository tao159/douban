<template>
    <div class="movieW">
        <scroll>
            <div class="movies-content">
                <h3 class="pageTitle">{{title}}</h3>
                <items :list='itemList'></items>
            </div>
        </scroll>
        <transition name="fade" made="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import scroll from '@/components/scroll/scroll'
import {getMoviesList} from 'api/movies'
import items from './items'
export default {
    data(){
        return{
            title:'',
            itemList:[]
        }
    },
    methods:{
        _getMoviesList(){
            getMoviesList(0).then(res=>{
                this.title=res.subject_collection.name
                this.itemList=res.subject_collection_items
            })
        }
    },
    components:{
        scroll,
        items
    },
    created(){
        const _this=this
       setTimeout(()=>{
            _this._getMoviesList()
       },20)
    }
}
</script>

<style lang="stylus" scoped>
.movieW
    position:fixed
    width:100%
    top:47px
    bottom:0
    .fade-enter,.fade-leave-to
        transform:translate3d(100%,0,0)
    .fade-enter-active,.fade-leave-active
        transition:all 0.3s
    .movies-content
        padding-top:20px
        .pageTitle
            font-size:24px
            color: #494949
            padding-left:4%
</style>
