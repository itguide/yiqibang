<template>
    <div>
        <nav class="navbar navbar-default navbar-fixed-bottom">
            <div class="container">
                <div class="navs_pad"></div>
                <div class="navs">
                    <div class="nav">
                        <router-link to="/home">
                            <img src="/static/img/personal center/tab_home_default@2x.png" alt="">
                            <P>首页</P>
                        </router-link>
                    </div>
                    <div class="nav">
                        <img src="/static/img/personal center/tab_find_default@2x.png" alt="">
                        <P>发现</P>
                    </div>
                    <div class="nav nav3">
                        <img src="/static/img/Personal Center-login/tab_release@2x.png" alt="">
                    </div>
                    <div class="nav">
                        <img src="/static/img/personal center/tab_comment_default@2x.png" alt="">
                        <P>热评圈</P>
                    </div>
                    <div class="nav">
                        <router-link to="/myCenter">
                            <img src="/static/img/personal center/tab_ccount_select@2x.png" alt="">
                            <P>我的</P>
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'navfooter'
}
</script>

