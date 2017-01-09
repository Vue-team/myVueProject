<template>
    <div>
        <nav class="bar bar-tab bottom-nav flex" >
            <div>
                <router-link to="/home" class="tab-item">
                  <span class="icon icon-home"></span>
                  <span class="tab-label">首页</span>
                 </router-link>
            </div>
            <div>
                <router-link to="/time-entries" class="tab-item">
             <span class="icon icon-star"></span>
             <span class="tab-label">列表</span>
            </router-link>
            </div>
           
            <div>
                <router-link to="/shop" class="tab-item">
                <span class="icon icon-cart"></span>
                <span class="tab-label">商品</span>
                </router-link>
            </div>  
            <div>
                <router-link to="/my-info" class="tab-item">
                <span class="icon icon-settings"></span>
                <span class="tab-label">我的</span>
                </router-link>
            </div>
              
           
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>
        <div>
            
        </div>
    </div>

</template>
<script>


export default {
  name: 'app',
  data (){
    return {
       
    }
  },
  components: {
 
  
  
  },
  methods:{
   
  }
}
</script>
<style>
    .bottom-nav{
        position:fixed!important;
        left: 0;
        right: 0;
        bottom: 0;
        border-top: .8rem solid transparent;
    }
    .flex{
        display:flex;
    }
</style>




