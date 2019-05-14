<template>
    <div class="list-item">
        <div class="items" v-for="(item,index) in list" :key='index'>
            <h3>{{item.name}}</h3>
            <a v-for="(a,b) in item.groups" href="" >
                <div class="flexw">
                    <img v-lazy="'https://images.weserv.nl/?url='+a.avatar" alt="">
                    <p class="item-title">{{a.name}}</p>
                    <p class="count">{{a.member_count}}</p>
                </div>
                <p class="intro"></p>
            </a>
        </div>
    </div>
</template>

<script>
import {getGroupList} from 'api/groups'
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
       
    }
}
</script>

<style lang="stylus" scoped>
.list-item
    padding-left:18px
    padding-top:14px
    .items
        h3
            color:#111
            font-size:18px
            padding:5px 0
        a
            display:block
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
                .count
                    flex:1
</style>
