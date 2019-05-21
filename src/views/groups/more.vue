<template>
    <div class="moreW">
        <router-link class="more" to="">更多相关小组</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
    .moreW
        font-size:15px
        padding:14px 0
        text-align:center
        position:relative
        padding-left:18px
        margin-bottom:30px
        &:after
            position:absolute
            right :-20px
            bottom:0
            height:1px 
            background:#e8e8e8
            width:105%
            content:''
        .more
            color: #42bd56
</style>
