<template>
    <div class="movieW">
        <h3 class="pageTitle">{{title}}</h3>
        <items :list='itemList'></items>
    </div>
</template>

<script>
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
                console.log(res)
                this.title=res.subject_collection.name
                this.itemList=res.subject_collection_items
            })
        }
    },
    components:{
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
    .pageTitle
        font-size:24px
        color: #494949
        margin:16.08px 0 6px 0
        padding-left:4%
</style>
