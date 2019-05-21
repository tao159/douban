<template>
    <div class="detailW">
        <div class="item-header">
            <h3 class="title">{{headerList.title}}</h3>
            <div class="item-info">
                
            </div>
        </div>
    </div>
</template>

<script>
import {getItemDetail} from 'api/movies'
export default {
    data(){
        return{
            headerList:[]
        }
    },
    methods:{
        _getItemDetail(){
            const id=this.$route.params.id
            const _this=this
            getItemDetail(id).then(res=>{
                _this.headerList=res
            })
        }
    },
    mounted(){
        this._getItemDetail()
    }
}
</script>

<style lang="stylus" scoped>
.detailW
    position:fixed
    left:0
    top:47px
    bottom:0
    right:0
    z-index:10
    background:#fff
</style>
