<template>
  <div>
       <div class="topH"></div>
    <div class="loginTop">
      <h3>注册</h3>
      <div class="loginForm">
        <p class="loginTel"><input type="text" placeholder="手机号" /></p>
        <p class="loginPwd"><input type="text" placeholder="密码" /></p>
        <p class="loginSel">
          <span class="fl">
            <input type="checkbox" id="remPwd" />
            <label for="remPwd">记住密码</label>
          </span>
          <router-link to="/login" class="fr regBtn">立即登录</router-link>
        </p>
        <p class="loginBtn"><button @click="userRegister">注册</button></p>
      </div>
    </div>
    <div class="loginBot">
      <div class="botH"></div>
      <div class="botBox">
        <a class="wechatBtn" href=""><img src="/static/img/login/btn_icon_wechat@2x.png" alt=""></a>
        <a class="qqBtn" href=""><img src="/static/img/login/btn_icon_QQ@2x.png" alt=""></a>
        <a class="weiboBtn" href=""><img src="/static/img/login/btn_icon_weibo@2x.png" alt=""></a>
      </div>
    </div>
  </div>
</template>
<script>
    // import axios from 'axios'
    export default{
        name:'register',
        data () {
            return {
                 msg: '注册'
            }
        },
        created(){
            // this.userRegister();
        },
        methods:{
            userRegister(){
                console.log(this.$router);
                // var url ="/yiqibang/post_UserServlet_action";
                var url ="/api/YiQiBang/swagger/#!/yiqibang/post_UserServlet_action";
                var params = new URLSearchParams();
                params.append('kem_user_name', 'wangyifan');
                params.append('m_user_nick', '');
                params.append('m_user_password', '123456');
                var self = this;
                this.$http.post(url, params).then(function (response) {
                    console.log(response);
                    if(response.status==200){
                        // alert("注册成功");
                        self.$router.push("/login");
                    }
                }).catch(function (error) {
                     console.log(error);
                });
            }
        }
    }
</script>
<style>

</style>
