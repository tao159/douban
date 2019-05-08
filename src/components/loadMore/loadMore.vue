<template>
    <div class="loadMoudle"
        @touchstart="touchStart($event)"
        @touchmove="touchMove($event)"
        :style="{transform:'translate3d(0,'+top+'px,0)'}"
    >
        <slot></slot>
        <footer class="load-more">
            <slot name="load-more"></slot>
            <div class="moreData-tip">
                <span class="moreData-tip-text"></span>
            </div>
            <div class="loadingMoreData-tip">
                <span class="icon-loading"></span>
                <span class="loadingMoreData-tip-text"></span>
            </div>
            <div class="noMoreData-tip">
                <span class="connectingLine"></span>
                <span class="noMoreData-tip-text"></span>
                <span class="connectingLine"></span>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    props:{
        parentPullUpstate:{
            default:0
        },
        onInfiniteLoad:{
            type:Function,
            require:false
        }
    },
    data(){
        return{
            top:0,
            startY:0,
            pullUpState:0,
            isLoading:false,
            pullUpStateText:{
                moreDataTxt:'上拉加载更多',
                loadingMoreDataTxt:'加载中',
                noMoreDataTxt:'我是有底线的'
            }
        }
    },
    methods:{
        touchStart(e){
            this.startY=e.targetTouches[0].pageY
        },
        touchMove(e){
            if(e.targetTouches[0].pageY<this.startY){
                this.judgeScrollBarToTheEnd()
            }
        },
        judgeScrollBarToTheEnd(){
            let innerHeight=document.querySelector('.loadModule').clientHeight
            let scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop
            let scrollHeight=document.documentElement.clientHeight||document.body.scrollHeight
            if(scrollTop+scrollHeight>=innerHeight){
                if(this.pullUpState!==3&&!this.isLoading){
                    this.pullUpState=1
                    this.infiniteLoad()
                }
            }
        },
        infiniteLoad(){
            this.pullUpState=2
            this.isLoading=true
            setTimeout(()=>{
                this.onInfiniteLoad(this.infiniteLoadDone)
            },800)
        },
        infiniteLoadDone(){
            this.pullUpState=0
            this.isLoading=false
        }
    },
    watch:{
        parentPullUpDate(curVal,oldVal){
            this.pullUpState=curVal
        }
    }
}
</script>

<style lang="stylus" scoped>
.load-more
    width:100%
    color:#c0c0c0
    background #f7f7f7
    .moreData-tip,.loadingMoreData-tip,.noMoreData-tip
        display:flex
        align-item:center
        justify-content:center
        height:150px
        .icon-loading
            display:inline-flex
            width:35px
            height:35px
            background:url('../../common/images/loading_green.gif') no-repeat
            background-size:cover
            margin-right:5px
        .connectingLine
            display:inline-block
            width:150px
            height:2px
            background:#ddd
            margin-left:20px
            margin-right:20px
</style>
