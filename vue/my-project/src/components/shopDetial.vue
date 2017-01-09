<template>
   <div id="app-5">
     <p>{{ detial }}</p>
     <button v-on:click="reverseMessage">Reverse Message</button>
   </div>
</template>
<script>
    export default {
        name:'',
        data () {
            return {
                detial:'商品详情页面'
            }
        },
        methods:{
            reverseMessage:function(){
                this.detial = this.detial.split('').reverse().join('')
                console.log(this);
            }
        }

        
    }
   
</script>