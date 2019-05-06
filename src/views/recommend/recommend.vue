<template>
    <div class="recommend">
        <loading v-show="!recommendList.length"></loading>
        <div class="recommend-content">
            <a href="" v-for="(item,index) in recommendList" :key="index">
                <div class="imgWrapper">
                    <div class="larger-img">
                        <img  v-if="item.img.length" :src='"https://images.weserv.nl/?url="+item.img[0].image.normal.url' alt="">
                    </div>
                    <div class="left-img">
                        <img  v-if="item.img.length" :src='"https://images.weserv.nl/?url="+item.img[1].image.normal.url' alt="">
                        <img  v-if="item.img.length" :src='"https://images.weserv.nl/?url="+item.img[2].image.normal.url' alt="">
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import {getRecommend} from 'api/recommend'
import Loading from '@/components/loading/loading'
export default {
    data(){
        return{
            recommendList:[]
        }
    },
    methods:{
        _recommend(){
            
            getRecommend().then(res=>{
                
                const _this=this
                res.items.forEach((item)=>{ 
                   
                   _this.recommendList.push({
                       title:item.content.title,
                       abstract:item.content.abstract,
                       url:item.content.url,
                       img:item.content.photos.length!=0?item.content.photos:[]
                   })
                })
              
                console.log(this.recommendList)
            })
        }
    },
    components:{
        Loading
    },
    mounted(){
        const _this=this
       setTimeout(()=>{
           _this._recommend()
       },200)
       
    }
}
</script>

<style lang="stylus" scoped>
.recommend
    margin-top:47px
    a
        display:block
        padding:25px 18px 25px 0
        .imgWrapper
            display:flex
            .larger-img
                flex:3.2
            .left-img
                flex:1

</style>
