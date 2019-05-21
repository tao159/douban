<template>
    <div class="recommend-detailW">
        
        <Loading v-if="show" class="iload"></Loading>
        <div v-if="detailList.length!=0">
            <tags v-if="!show" :list='detailList.tags'></tags>
            <h1 class="title">{{detailList.title}}</h1>
            <p class="author"><span>{{detailList.author['name']}}</span>{{detailList.create_time}}</p>
            <p class="source">来自话题<span>{{detailList.topic.name}}</span></p>
            <p v-html="detailList.content"></p>
        </div>
    </div>
</template>

<script>
import Loading from '@/components/loading/loading'
import Scroll from '@/components/scroll/scroll'
import {getRecommendDetail} from 'api/recommend'
import Tags from './tag'
export default {
    data(){
        return{
            show:true,
            detailList:[]
        }
    },
    methods:{
        _getRecommendDetail(){
            const id=this.$route.params.id
            const _this=this
            if(!id){
                this.$router.push('/recommend')
            }else{
                getRecommendDetail(id).then(res=>{
                    _this.show=false
                    _this.detailList=res
                    console.log(_this.detailList.content)
                })
            }
        }
    },
    components:{
        Tags,
        Loading
    },
    mounted(){
        this._getRecommendDetail()
    }
}
</script>

<style lang="stylus" scoped>
.recommend-detailW
    position: fixed;
    top:47px
    left:0
    right:0
    bottom:0
    background: #fff
    z-index: 10
    padding:0 18px
    .iload
        margin-top:30px
</style>

    