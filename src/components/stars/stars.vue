<template>
    <div class="starsW">
       <section v-if="rating!=null">
           <img v-for='(item,index) in valueArr' :key="index" :src="valueImg" :style="[imgW]">
           <img v-if="grayArr.length!=0" v-for='(item,index) in grayArr' :src="grayImg" :style="[imgW]">
           <span :style="[ratingFont]">{{rating.value.toFixed(1)}}</span>
       </section>
        <p v-else class="no_rating">暂无评分</p>
    </div>
</template>

<script>
import valueImg from 'common/images/star_full.png'
import hrefImg from 'common/images/star_href.png'
import grayImg from 'common/images/star.png'
export default {
    props:{
        rating:{
            type:Object,
            default:{}
        },
        imgwidth:{
            type:[String,Number],
            default:'11'
        },
        fontsize:{
            type:[String,Number],
            default:'12'
        }
    },
    computed:{
        imgW(){
            return {'width':this.imgwidth+'px'}
        },
        ratingFont(){
            return {'font-size':this.fontsize+'px'}
        }
    },
    data(){
        return{
            valueImg,
            grayImg,
            max:'',
            valueArr:[],
            grayArr:[],
            ratings:null

        }
    },
    methods:{
        _getStars(){
            if(this.rating!=null){
                this.max=this.rating.max/2
                const value=parseInt(this.rating.value/2)
                const gray=this.max-value
                for(let i=1;i<=value;i++){
                    this.valueArr.push(i);
                }
                for(let i=1;i<=gray;i++){
                    this.grayArr.push(i);
                }            
            }
           
        }
    },
    mounted(){
        const _this=this
        setTimeout(()=>{
            _this._getStars()
        },20)
    }
}
</script>

<style lang="stylus" scoped>
.starsW
    width:100%
    padding-top:5px
    section 
        width:100%
        font-size:0
        text-align:center
        img 
            width:11px
            display:inline-block
            vertical-align:top
        span 
            font-size:12px
            color:#9b9b9b
            vertical-align:top
            margin-left:6px
    .no_rating
        font-size:12px
        text-align:center
        color:#9b9b9b
</style>
