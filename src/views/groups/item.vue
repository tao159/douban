<template>
    <div class="list-item">
        <div class="items" v-for="(item,index) in list" :key='index'>
            <h3>{{item.name}}</h3>
            <a v-for="(a,b) in item.groups" href="" >
                <div class="flexw">
                    <img v-lazy="'https://images.weserv.nl/?url='+a.avatar" alt="">
                    <p class="item-title">{{a.name}}</p>
                    <p class="count">{{a.member_count}}人</p>
                </div>
                <p class="intro">{{a.desc_abstract}}</p>
            </a>
            <more></more>
        </div>
    </div>
</template>

<script>
import {getGroupList} from 'api/groups'
import more from './more'
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
        _getGroupList(){
            const _this=this
            getGroupList().then(res=>{
                _this.list=res.rec_groups[0].classified_groups
                
            })
        }
    },
    created(){
        const _this=this
       setTimeout(()=>{
           _this._getGroupList()
       },20)
    },
    components:{
        more
    }
}
</script>

<style lang="stylus" scoped>
.list-item
    padding: 0 18px 0;
    .items
        margin-top:14px
        h3
            color:#111
            font-size:18px
            padding:5px 0
        a
            display:block
            position:relative
            padding:15px 0
            &:after
                position:absolute
                right:-20px
                bottom:0
                height:1px
                background:#e8e8e8
                content:''
                width:105%
            .flexw
                display:flex
                align-items:center
                img 
                    width:42px
                    height:42px
                    border-radius:3px
                    border:1px solid #f1f1f1
                .item-title
                    flex:3
                    padding:0 10px
                    overflow:hidden
                    text-overflow:ellipsis
                    white-space nowrap
                    color:#111
                    font-size:18px
                .count
                    flex:1.5
                    text-align: right
                    color:#ccc
                    font-size:15px
                    
            .intro
                margin-top:15px
                color:#aaa
                font-size:15px
                overflow:hidden
                text-overflow:ellipsis
                white-space nowrap
</style>
