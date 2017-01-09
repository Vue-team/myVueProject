<template>

    <div>
       <h1 v-text="title"></h1>
       <input type="text" v-model="newItem" v-on:keyup.enter="addNewItem"/>
       <ul>
           <li v-for="(item,index) in items" v-bind:class="{isDone:item.isDone}" v-on:click="toggleDone(item)">{{index}}.{{item.food}}</li>
       </ul>
    </div>
</template>
<script>
    export default{
        data () {
            return{
                title:'this is a todolist',
                items:[
                   /*{'isDone':true,'food':'show you list'}*///数据流
                ],
                newItem:''
                
            }
        },
        methods:{
            toggleDone:function(item){
                item.isDone = !item.isDone;
            },
            addNewItem:function(){
               
                this.items.push({
                    food:this.newItem,
                    isDone:false
                });
                this.newItem='';
            }
        }
    }
</script>
<style scoped>
    li{
        list-style:none;
        font-size:30px;
    }
    .isDone{
        color:green;
    }
</style>