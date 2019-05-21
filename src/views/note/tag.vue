<template>
    <ul class="tags-list">
        <li v-for="(item,index) in tagList" :key="index">
            {{item.name}}
        </li>
    </ul>
</template>

<script>
export default {
    props:{
        list:{
            type:Array,
            default:null
        }
    },
    data(){
        return{
            tagList:[]
        }
    },
    methods:{
        
    },
    mounted(){
        const _this=this
        setTimeout(()=>{
            _this.tagList=_this.list
        },200)
    }
}
</script>

<style lang="stylus" scoped>
.tags-list
    display:flex
    flex:wrap
    justify-content:left
    margin-top:20px
    li
        margin:0 10px 10px 0
        font-size:13px
        padding:5px 10px
        background:#effaf0 url('https://img3.doubanio.com/f/talion/bfe0e094023e9382c7d5707219476c2713f2aa94/pics/card/green_arrow.png') no-repeat
        background-position:40px center
        background-size:9px
        border:1px solid #42bd56
        color:#42bd56
        border-radius:15px
        width: 40px
        line-height: 18px
        height: 18px
</style>
