<template>
    <div ref="recommendW" class="recommendW">
        <div class="recommend">
            <div class="classifyW">
                <ul>
                    <li><a href="">影院热映</a></li>
                    <li><a href="">最受关注图书</a></li>
                    <li><a href="">豆瓣时间</a></li>
                    <li><a href="">使用豆瓣APP</a></li>
                </ul>
            </div>
            <loading v-if="!recommendList.length"></loading>
            <div class="recommend-content">
                
                <a href="" v-for="(item,index) in recommendList" :key="index">
                    <div class="item-list" v-if="item.imgArr.length==3">
                        <div class="imgWrapper">
                            <div class="leftItem" :style="{backgroundImage:'url('+item.imgArr[0].img+')'}">
                        
                            </div>
                            <div class="rightItem">
                                <p :style="{backgroundImage:'url('+item.imgArr[1].img+')'}"></p>
                                <p :style="{backgroundImage:'url('+item.imgArr[2].img+')'}"></p>
                            </div>
                        </div>
                        <h3 class="title">{{item.title}}</h3>
                        <p class="abstract">{{item.abstract}}</p>
                    </div>
                    <div class="item-list" v-else-if="item.imgArr.length==2||item.imgArr.length==1">
                        <div class="imgWrapper_b">
                            <div class="leftabstract">
                                <h3 class="title">{{item.title}}</h3>
                                <p class="abstract">{{item.abstract}}</p>
                            </div>
                            <div class="rightImg" :style="{backgroundImage:'url('+item.imgArr[0].img+')'}"></div>
                        </div>
                    </div>
                    <div class="item-list" v-else>
                        <div class="imgWrapper_b">
                            <div class="leftabstract">
                                <h3 class="title">{{item.title}}</h3>
                                <p class="abstract">{{item.abstract}}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div> 
            <loading v-if="flag" class="loadMore"></loading>
        </div>
    </div>
</template>

<script>
import {getRecommend} from 'api/recommend'
import Loading from '@/components/loading/loading'
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            recommendList:[],
            flag:false,
            page:0,
            dropdown:false
        }
    },
    methods:{
        _recommend(){
            getRecommend(this.page).then(res=>{
                var _this=this
                
                res.items.forEach((item)=>{
                    var imgList=[]
                    _this.recommendList.push({
                        abstract:item.content.abstract,
                        author:item.content.author,
                        card:item.content.card,
                        id:item.content.id,
                        title:item.content.title,
                        type:item.content.type,
                        uri:item.content.uri,
                        url:item.content.url,
                        video_info:item.content.video_info,
                        imgArr:this.getImg(item.content.photos)
                    })
                    item.content.photos.forEach(a=>{
                        imgList.push({
                            img:a.image.normal.url
                        })
                    })          
                })
                this.flag=false
            })
        },
        getImg(obj1){
            var imgArr=[]
            obj1.forEach(item=>{
                imgArr.push({
                    img:'https://images.weserv.nl/?url='+item.image.normal.url
                })
            })
            return imgArr
        },
        _initScroll(){
            if (!this.scroll){
                // var _this=this
                // this.$nextTick(() => {
                //     this.scroll = new BScroll(this.$refs.recommendW, {
                //         probeType: 2,
                //         //下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
                //         //这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
                //         pullUpLoad: {
                //             threshold: 10
                //         },
                //         mouseWheel: { // pc端同样能滑动
                //             speed: 20,
                //             invert: false
                //         },
                //         useTransition: false // 防止iphone微信滑动卡顿
                //     })
                //     this.scroll.on("pullingUp", function() {
                //         _this.flag=true
                //         _this._recommend()
                //         _this.scroll.finishPullUp(); //可以多次执行上拉刷新
                //     });
                //     this.scroll.refresh();
                // }) 
                this.$nextTick(() => {
                    if(!this.scroll){
                        this.scroll=new BScroll(this.$refs.recommendW,{
                            scrollY:true,
                            probeType:2
                        })
                    }else{
                        this.scroll.refresh()
                    }
                    this.scroll.on('scroll',(pos)=>{
                         console.log(pos.y,this.dropDown)
                    })
                })    
            }
        }
    },
    components:{
        Loading
    },
    mounted(){
        const _this=this
        
       setTimeout(()=>{
            _this._initScroll()
       },200)
    },
    created(){
        const _this=this
       setTimeout(()=>{
            _this._recommend()
       })
    }
}
</script>

<style lang="stylus" scoped>
.recommendW
    position: absolute
    left: 0
    top: 0px
    overflow: hidden
    width:100%
    height:100%
    .recommend
        padding-top:47px
        .classifyW
            padding-top:20px
            ul     
                overflow:hidden
                margin:0px 18px 20px   
                li
                    text-align:center
                    padding:3px
                    box-sizing:border-box
                    float:left
                    width:50%
                    a
                        display:block
                        line-height:20px
                        padding:12px 0
                        background #f6f6f6
                        color:#494949
                        overflow: hidden
                        text-overflow: ellipsis
                        white-space: nowrap
                        word-wrap: normal
                        border-radius:2px
                        font-size:15px

        .recommend-content
            width:100%
            a
                display:block
                padding:25px 18px 25px 0
                margin-left:18px
                font-size:0
                position:relative
                &::before
                    height:1px
                    position:absolute
                    left:0
                    top:0
                    width:100%
                    background:#e3e3e3
                    content:''
                .item-list
                    .imgWrapper
                        display:flex
                        margin-bottom:10px
                        font-size:14px
                        .leftItem
                            flex:1
                            height:182.09px       
                            background-repeat:no-repeat
                            background-position: center center
                            background-size: cover 
                            margin-right:4px      
                        .rightItem
                            width:89.05px
                            p
                                width:100%
                                height:89.05px
                                background-repeat:no-repeat
                                background-position: center center
                                background-size: cover
                                &:first-child
                                    margin-bottom:4px
                    .title
                        font-size:17px
                        text-align:justify
                        font-weight:500
                        color:#484848
                        line-height:1.41
                        margin-bottom:6px
                    .abstract
                        text-align: justify
                        color: #aaa
                        font-size: 12px
                        line-height: 1.5
                        display: -webkit-box
                        overflow: hidden
                        -webkit-box-orient: vertical
                        -webkit-line-clamp: 3
                    .imgWrapper_b
                        display:flex
                        .rightImg
                            width:96.77px
                            height:96.77px
                            margin-left:25px
                            background-repeat:no-repeat
                            background-position: center center
                            background-size: cover
                        .leftabstract
                            flex:1
        .loadMore
            padding-bottom:40px
</style>
