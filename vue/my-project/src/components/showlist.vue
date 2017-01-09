<template>
<div class="page show">
    <header class="bar bar-nav">
        <h1 class="title">{{title}}</h1>
        
    </header>
    <div class="goods-serch">
        <input type="text" placeholder="搜索商品" v-model="goods">
        <span class="icon icon-search click_serch"></span>
    </div>
       <!--  商品展示 -->
    <div class="content infinite-scroll" data-distance="100" @scroll="onScroll($event)">
        <div class="list-block">
            <ul class="list-container">
                <div class="app" v-for="(item,index) in computedmi_item">
                    <div class="app__icon">
                        <img class="app__icon__img" :src="item.src">
                    </div>
                    <div class="app__text">
                        <h2 class="app__text__title">{{item.alt}}</h2>
                        <p class="app__text__summary">￥{{item.price}}元</p>
                    </div>
                 <!--    <a class="app__button" href="#">购买</a> -->
                    <div>
                        <p class='app-flex'>
                            <button @click='reduce'>-</button>
                            <input type="text" v-model='count' class="app-input" />
                            <button @click='add'>+</button>
                        </p>
                    </div>
                    <div class="app__button ">
                        <router-link 
                          to="/shop-detial"
                          class="btn btn-primary buy_color">
                         购买
                        </router-link>
                    </div>
                    <i class="app__label"></i>
                </div>

                <div class="infinite-scroll-preloader" v-show="">
                    <div class="preloader"></div>
                </div>
            </ul>
        </div>
        <!-- preloader -->
        
    </div>
</div>
</template>
<script>

    export default {
        data (){
            return {
                mi_item:[{"alt":"小米5s Plus","src":"http://i3.mifile.cn/a4/e991f1e2-20d8-40c3-bf1d-012b122c986b","price":"2299"},
                {"alt":"红米Note4","src":"http://i3.mifile.cn/a4/f24c0788-e6c2-4139-8f53-c0d4524eda09","price":"999"},
                {"alt":"小米Max","src":"http://i3.mifile.cn/a4/0df5d106-ab01-4013-87de-a9793094245d","price":"1299"},
                {"alt":"小米笔记本","src":"http://i3.mifile.cn/a4/725a37e3-78b7-4298-8098-c40097bf179d","price":"3499"},
                {"alt":"小米电视3s 60英寸","src":"http://i3.mifile.cn/a4/0656af5b-146f-4700-9fe7-f8f701d30019","price":"4499"},
                {"alt":"小米平板2 16GB现货","src":"http://i3.mifile.cn/a4/4c68c352-fbd3-452d-be90-7b47e4f6ce76","price":"999"},
                {"alt":"小米手环 2","src":"http://i3.mifile.cn/a4/6ef55907-bbed-49be-a2bb-be0821b5f7b8","price":"149"},
                {"alt":"小米盒子3 增强版","src":"//i3.mifile.cn/a4/T146YgBKhv1RXrhCrK.jpg","price":"399"},
                {"alt":"小米移动电源2","src":"http://i3.mifile.cn/a4/17fc57e5-e332-4452-bba4-ef341f6e59fd","price":"79"},
                {"alt":"小米圈铁耳机Pro","src":"http://i3.mifile.cn/a4/302f2608-655a-489c-a0c5-a3b9172defd1","price":"149"}],
                title:'商品列表',
                goods:'',
                count:'1'
               
            }
        },
        computed: {
                    computedmi_item: function () {
                      var vm = this
                      return this.mi_item.filter(function (item) {
                        return item.alt.toLowerCase().indexOf(vm.goods.toLowerCase()) !== -1
                            
                      })
                    }
                },
        methods:{
            onScroll(event){
                var offsetHeight = event.currentTarget.offsetHeight,
                     scrollHeight = event.target.scrollHeight,
                     scrollTop = event.target.scrollTop,
                     scrollBottom = offsetHeight + scrollTop
                     if(scrollBottom===scrollHeight || scrollBottom===scrollHeight+2){
                        
                     }
                    
            },
            add:function(){
               console.log(this);
                this.count++
            },
            reduce:function(){
                this.count--;
                if(this.count==0){
                    this.count=1;
                }
            }
        }
        
    }
    
</script>

<style scoped>
   * {
       box-sizing: border-box;
       margin: 0;
       -webkit-text-size-adjust: none;
   }
   .app-flex{
        display:flex;
        margin-right:.5rem;
   }
   .app-flex button{
    border-radius:0.2rem;
   }
   html {
       background-color: #f7f7f7;
   }
  
    .show{
        display:block;
    }
    .goods-serch{
        position:relative;
        top:44px;
        width:100%;
        z-index:100;
    }
    .goods-serch input{
        width: 100%;
        height: 1.7rem;

    }
    .app-input{
        width:1rem!important;
        height:1.5rem!important;
        border:1px solid #ddd !important;
    }
    .click_serch{
        position:absolute;
        top:20%;
        right:0;
    }

   .app {
       position: relative;
       display: -webkit-flex;
       align-items: center;
       padding: 0.65rem 0.5rem;
       border-bottom: 1px solid #cfcfcf;
       
   }
   .app__icon {
       width: 2.35rem;
       height: 2.35rem;
       border-radius: 0.4rem;
       overflow: hidden;
   }
   .app__icon__img {
       display: block;
       width: 100%;
   }

   .app__text {
       margin-left: 0.45rem;
       margin-right: auto;
       width:5rem;
   }
   .app__text__title {
       font-size: 0.7rem;
       color: #181818;
   }
   .app__text__summary {
       font-size: 0.6rem;
       color: #EB1D00;
   }

   .app__button {
       display: block;
       padding: 0.2rem 0.65rem;
       font-size: 0.65rem;
       text-align: center;
       color: #fff;
       background-color: #3cba1a;
       border-radius: 0.2rem;
       text-decoration: none;
   }

   .app__label {
       position: absolute;
       left: 0;
       top: 0;
       width: 2.2rem;
       height: 1.6rem;
       
   }
  .buy_color{
    color:white!important;
    font-size:14px;
  }

</style>