<template>
<div class="wrap">
    <header class="bar bar-nav">
      <h1 class='title'>个人资料</h1>
    </header>
    <div class="content">
      <div class="list-block">
        <ul>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">姓名</div>
                <div class="item-input">
                  <input type="text" placeholder="Your name">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-email"></i></div>
              <div class="item-inner">
                <div class="item-title label">邮箱</div>
                <div class="item-input">
                  <input type="email" placeholder="E-mail">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-password"></i></div>
              <div class="item-inner">
                <div class="item-title label">密码</div>
                <div class="item-input">
                  <input type="password" placeholder="Password" class="">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-gender"></i></div>
              <div class="item-inner">
                <div class="item-title label">性别</div>
                <div class="item-input">
                  <select>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
    
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-calendar"></i></div>
              <div class="item-inner">
                <div class="item-title label">生日</div>
                <div class="item-input">
                  <input type="date" placeholder="Birth day" value="2014-04-30">
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-toggle"></i></div>
              <div class="item-inner">
                <div class="item-title label">Switch</div>
                <div class="item-input">
                  <label class="label-switch">
                    <input type="checkbox">
                    <div class="checkbox"></div>
                  </label>
                </div>
              </div>
            </div>
          </li>
          <li class="align-top">
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-comment"></i></div>
              <div class="item-inner">
                <div class="item-title label">个性签名</div>
                <div class="item-input">
                  <textarea></textarea>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="content-block">
        <div class="row">
          <div class="col-50"><a href="#" class="button button-big button-fill button-danger">取消</a></div>
          <div class="col-50"><a href="#" class="button button-big button-fill button-success">确定</a></div>
        </div>
      </div>
    </div>
</div>
    
</template>
<script>

export default {
   data () {
    return {

    }
   },
   components:{
    
   }
}
  

</script>


