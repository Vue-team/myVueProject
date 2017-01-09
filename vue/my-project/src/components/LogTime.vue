<template>
  <div class="wrap">
    <header class="bar bar-nav">
      <h1 class='title'>创建任务</h1>
    </header>
    <div class="content">
      <div class="list-block">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-calendar"></i></div>
              <div class="item-inner">
                <div class="item-title label">日期</div>
                <div class="item-input">
                  <input type="date" placeholder="Birth day"  v-model="date">
                </div>
              </div>
            </div>
          </li>
          <li class="align-top">
            <div class="item-content">
                      <div class="item-media"><i class="icon icon-form-password"></i></div>
                      <div class="item-inner">
                        <div class="item-title label">备注</div>
                        <div class="item-input">
                          <input type="text" placeholder="备注" class=""   v-model="comment">
                        </div>
                      </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="content-block">
        <div class="row">
              <div class="col-50"><router-link to="/time-entries" class="button button-big button-fill button-danger">取消</router-link></div>
              <div class="col-50"><a href="#" class="button button-big button-fill button-success" @click="save()">保存</a></div>
        </div>
      </div>
    </div>
   
   
    <hr>
  </div>
</template>
<style>

</style>
<script>

    export default {
        name : '',
        data() {
            return {
                date : '',
                totalTime : '',
                comment : ''
            }
        },
        methods:{
          save() {
            const plan = {
              name : '端',
              image : 'https://pic.cnblogs.com/avatar/908680/20160406113514.png',
              date : this.date,
              totalTime : this.totalTime,
              comment : this.comment
            };
            this.$store.dispatch('savePlan', plan)
            this.$router.go(-1)
          }
        }
    }
</script>
<style>
  .wrap{
    height:180px;
  }
</style>
