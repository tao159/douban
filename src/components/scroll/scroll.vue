<template>
    <div class="scrollWrap" ref="scrollWrap">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:{
        probeType:{
            type:Number,
            default:3
        },
        click:{
            type:Boolean,
            default:true
        },
        listenScroll:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        const _this=this
       
        setTimeout(()=>{
            _this._initScroll()
        })
    },
    data(){
        return{
            
        }
    },
    methods:{
        _initScroll(){
            const _this=this
            this.$nextTick(() => {
                if(!this.$refs.scrollWrap) return
                    this.scroll=new BScroll(this.$refs.scrollWrap,{
                        probeType:this.probeType,
                        click:this.click   
                    })
                    if(this.listenScroll){
                        this.scroll.on('scroll',(pos)=>{
                            _this.$emit('scroll',pos,_this.scroll.maxScrollY)
                        })
                        this.scroll.on('touchEnd',(pos)=>{
                            _this.$emit('touchEnd',pos,_this.scroll.maxScrollY)
                            
                        })
                    }
            })
        },
        refresh(){
            this.scroll&&this.scroll.refresh()
        }
    },
    watch:{
        
    }
}
</script>

<style lang="stylus" scoped>
.scrollWrap
    height:100%
    overflow:hidden
</style>
