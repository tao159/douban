<template>
    <div>
        <div class="header">
            <span class="iconfont icon-shouyeshouye"></span>
            <h2 class="title">演出列表</h2>
        </div>

        <!-- content -->
        <div class="list-wrapper list-wrapper-hook" ref="wrapper">
            <div>
            <!-- 顶部提示信息 -->
                <div class="top-tip">
                    <span class="refresh-hook">{{refreshMsg}}</span>
                </div>
            <!-- 列表 -->
                <ul class="list-content list-content-hook">
                    <li class="list-item">
                    <div class="avatar">
                        <img src="../common/images/1.png" width="100" height="100" />
                    </div>
                    <div class="text">
                        <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
                        <span>2016-11-23</span>
                    </div>
                    </li>
                    <li class="list-item">
                    <div class="avatar">
                        <img src="../common/images/2.png" width="100" height="100" />
                    </div>
                    <div class="text">
                        <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
                        <span>2016-11-23</span>
                    </div>
                    </li>
                    <li class="list-item">
                    <div class="avatar">
                        <img src="../common/images/3.png" width="100" height="100" />
                    </div>
                    <div class="text">
                        <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
                        <span>2016-11-23</span>
                    </div>
                    </li>
                    <li class="list-item">
                    <div class="avatar">
                        <img src="../common/images/1.png" width="100" height="100" />
                    </div>
                    <div class="text">
                        <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
                        <span>2016-11-23</span>
                    </div>
                    </li>
                    <li class="list-item">
                    <div class="avatar">
                        <img src="../common/images/2.png" width="100" height="100" />
                    </div>
                    <div class="text">
                        <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
                        <span>2016-11-23</span>
                    </div>
                    </li>
                    <li class="list-item">
                    <div class="avatar">
                        <img src="../common/images/3.png" width="100" height="100" />
                    </div>
                    <div class="text">
                        <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
                        <span>2016-11-23</span>
                    </div>
                    </li>
                    <li class="list-item">
                    <div class="avatar">
                        <img src="../common/images/1.png" width="100" height="100" />
                    </div>
                    <div class="text">
                        <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
                        <span>2016-11-23</span>
                    </div>
                    </li>
                    <li class="list-item">
                    <div class="avatar">
                        <img src="../common/images/2.png" width="100" height="100" />
                    </div>
                    <div class="text">
                        <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
                        <span>2016-11-23</span>
                    </div>
                    </li>
                    <li class="list-item">
                    <div class="avatar">
                        <img src="../common/images/3.png" width="100" height="100" />
                    </div>
                    <div class="text">
                        <h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>
                        <span>2016-11-23</span>
                    </div>
                    </li>
                </ul>
            <!-- 
                1、底部提示信息 
                2、这里有一种情况,就是没有更多数据时,这里的文本应该显示"暂无更多数据"
            -->
                <div class="bottom-tip">
                    <span class="loading-hook">{{loadMoreMsg}}</span>
                </div>
            </div>
        </div>
        <!-- content end  -->

       <div class="footer">
            <span class="iconfont icon-tuijian"></span>
            <span class="iconfont icon-shezhi"></span>
            <span class="iconfont icon-shoucangshixin"></span>
        </div> 

        <!-- alert -->
        <div class="alert alert-hook">刷新成功</div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default({
    data(){
        return{
            refreshMsg:'下拉刷新',
            loadMoreMsg:'加载更多'
        }
    },
    methods:{
        _initScroll(){
            this.scroll=new BScroll(this.$refs.wrapper,{
                probeType:1,
                click:true
            })
            this.scroll.on('scroll',(pos)=>{
                
               if(pos.y>30){
                   this.refreshMsg='释放立即刷新'
               }
            })
            this.scroll.on('touchEnd',pos=>{
                console.log(pos.y,this.scroll.maxScrollY-30)
                const _this=this
                if(pos.y>30){
                    setTimeout(()=>{
                        _this.refreshMsg='下拉刷新'
                        _this.refreshAlert('刷新成功')
                        _this.scroll.refresh()
                    },1000)
                }else if(pos.y<(this.scroll.maxScrollY-30)){
                    this.loadMoreMsg='加载中'
                    setTimeout(()=>{
                        _this.loadMoreMsg='加载更多'
                        _this.reloadData()
                        _this.scroll.refresh()
                    },1000)
                }
            })
        },
        refreshAlert(text){

        },
        reloadData(){
            console.log('加载数据添加')
        }
    },
    mounted(){
        this._initScroll()
    }
})
</script>

<style lang="">
  

/* header、footer */
.header, .footer{  
    position: fixed;  
    z-index: 2;  
    left: 0; 
    display: flex; 
    width: 100%;  
}  
  
.header{
    top: 0;
    height: 55px;  
    background: #35a251;
}

.header .icon-shouyeshouye{
    position: absolute;
    left: 10px;
    flex: 0 0 40px;
    width: 40px;
    height: 55px;
    line-height: 55px;
    font-size: 33px;
    color: #fff;
} 

.header .title{
    flex: 1;
    line-height: 55px;
    color: #fff;
    text-align: center;
}   

.footer{  
    bottom: 0;
    height: 50px;  
    line-height: 50px; 
    background: #1a1a1a; 
}

.footer span{  
   flex: 1;
   font-size: 20px;
   color: #fff;
   text-align: center;
}  

/* 列表容器 */ 
.list-wrapper {
    position: fixed;  
    z-index: 1;  
    top: 55px;  
    bottom: 50px;  
    left: 0;  
    width: 100%;  
    background: #ccc;  
    overflow: hidden;  
}

.list-wrapper .list-content {
    background: #fff;
}

.list-wrapper .list-item {
    display: flex;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid #ddd;
}

.list-wrapper .list-item .avatar{
    flex: 0 0 100px;
    border: 1px solid #ddd;
}

.list-wrapper .list-item .text{
    position: relative;
    flex: 1;
    padding-left: 10px;
}

.list-wrapper .list-item .text h2{
    font-size: 16px;
    font-weight: normal;
    color: rgb(7, 17, 27);
}

.list-wrapper .list-item .text span{
    position: absolute;
    bottom: 20px;
    color: rgba(7, 17, 27, 0.7);
}

/* 下拉、上拉提示信息 */
.top-tip{
    position: absolute;  
    top: -40px;  
    left: 0;
    z-index: 1;  
    width: 100%;  
    height:40px;  
    line-height:40px;  
    text-align:center;
    color: #555;
} 
  
.bottom-tip{
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #777;
    background: #f2f2f2;
}

/* 全局提示信息 */
.alert{
    display: none;
    position: fixed;
    top: 55px;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    background: rgba(7, 17, 27, 0.7);
}

</style>