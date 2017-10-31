<template>
  <div class="hello">
    <nav-header>我的</nav-header>
     <div class="container-fluid">
        <div class="row part1">
            <div class="col-xs-8 col-sm-6">
                <div class="user">
                    <div class="header_left">
                        <img src="/static/img/personal center/home_Head portrait@2x.png" alt="">
                    </div>
                    <div class="header_right">
                        <router-link to="/login">登录/注册</router-link>
                    </div>
                </div>
            </div>
            <!-- Optional: clear the XS cols if their content doesn't match in height -->
            <div class="clearfix visible-xs-block"></div>
        </div>
        <div class="row part2">
            <div class="col-xs-4 col-md-4">
                <p class="menu_font">收藏</p>
                <p>0</p>
            </div>

            <div class="col-xs-4 col-sm-4">
                <p class="menu_font">历史</p>
                <p>0</p>
            </div>
            <div class="col-xs-4 col-sm-4">
                <p class="menu_font">关注</p>
                <p>0</p>
            </div>
        </div>
        <div class="row part3">
            <div class="col-xs-10">我的消息</div>
            <div class="col-xs-2"><img src="/static/img/Personal Center-login/list_more@2x.png" alt=""></div>
        </div>
        <div class="row part4">
            <div class="col-xs-10 borderbom">我要爆料</div>
            <div class="col-xs-2 borderbom"><img src="/static/img/Personal Center-login/list_more@2x.png" alt=""></div>
            <div class="col-xs-10">在线商城</div>
            <div class="col-xs-2"><img src="/static/img/Personal Center-login/list_more@2x.png" alt=""></div>
        </div>
        <div class="row part5">
            <div class="col-xs-10 borderbom">个性换肤</div>
            <div class="col-xs-2 borderbom"><img src="/static/img/Personal Center-login/list_more@2x.png" alt=""></div>
            <div class="col-xs-10 borderbom">用户反馈</div>
            <div class="col-xs-2 borderbom"><img src="/static/img/Personal Center-login/list_more@2x.png" alt=""></div>
            <div class="col-xs-10">系统设置</div>
            <div class="col-xs-2"><img src="/static/img/Personal Center-login/list_more@2x.png" alt=""></div>
        </div>
    </div>
    <NavFooter/>

  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'

export default {
  name: 'PersonalCenter',
   components:{
      NavHeader,
      NavFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
</style>
