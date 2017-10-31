<template>
    <div>
        <nav-header><img style="width:62.5px;height:22px;" src="/static/img/Home/nav_logo@2x.png"></nav-header>
        <el-row>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-col :xs="3" :sm="3" :md="3" :lg="3">
                    <el-menu-item index="1">
                        <div class="grid-content bg-purple">推荐</div>
                    </el-menu-item>
                </el-col>
                <el-col :xs="3" :sm="3" :md="4" :lg="3">
                    <el-menu-item index="2">
                        <div class="grid-content bg-purple-light">热门</div>
                    </el-menu-item>
                </el-col>
                <el-col :xs="3" :sm="3" :md="3" :lg="3">
                    <el-menu-item index="3">
                        <div class="grid-content bg-purple">图片</div>
                    </el-menu-item>
                </el-col>
                <el-col :xs="3" :sm="3" :md="3" :lg="3">
                    <el-menu-item index="4">
                        <div class="grid-content bg-purple-light">视频</div>
                    </el-menu-item>
                </el-col>
                <el-col :xs="3" :sm="3" :md="3" :lg="3">
                    <el-menu-item index="5">
                        <div class="grid-content bg-purple-light">娱乐</div>
                    </el-menu-item>
                </el-col>
                <el-col :xs="3" :sm="3" :md="3" :lg="3">
                    <el-menu-item index="6">
                        <div class="grid-content bg-purple-light">科技</div>
                    </el-menu-item>
                </el-col>
                <el-col :xs="3" :sm="3" :md="3" :lg="3">
                    <el-menu-item index="7">
                        <div class="grid-content bg-purple-light"><img class="menu_more" src="/static/img/Home/tool_more@2x.png" alt=""></div>
                    </el-menu-item>
                </el-col>
            </el-menu>
            <div class="line"></div>
        </el-row>
        <!--s content-->
        <el-row>
            <el-col :span="24">
                <ul class="home-content">
                    <li v-for="(item,index) in newsList" :key="index">
                        <div class="home-content-wrap">
                        <p clas="title">{{item.title}}</p>
                        <img src="/static/img/Home/home_img03@2x.png" alt="">
                        <div class="home-content-f">
                            <div class="li_left">
                                <span>{{item.newsSource}}</span>
                                <span>{{item.createtime | formatDate}}</span>
                            </div>
                            <div class="li_right">
                                    <img class="img1" src="/static/img/Home/home_icon_browse@2x.png" alt="">
                                    <span>{{item.viewCount}}</span>
                                    <img class="img1" src="/static/img/Home/home_icon_comment@2x.png" alt="">
                                    <span>{{item.viewCount}}</span> 
                            </div>
                        </div>
                        </div>
                    </li>
                </ul>
                <div class="grid-content"></div>
            </el-col>
        </el-row>
        <!--e content-->
        <!--s footer-->
        <div>

            <NavFooter/>
        </div>
        <!--e footer-->
    </div>
</template>
<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'
import { formatDate } from '../assets/js/totime';
import axios from 'axios'
export default {
    name: 'PersonalCenter',
    components: {
        NavHeader,
        NavFooter
    },

    data() {
        return {
            activeIndex: '1',
            active: true,
            newsList: ''

        };
    },
    created() {
        this.getNewsList()
    },
    filters: {
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
            // this.activeIndex=key;
        },
        getNewsList() {
            // axios.post('http://route.showapi.com/255-1',
            // {"showapi_appid":"45519","showapi_sign":"4e413232b2ac441b82eff87e813e6eac"})
            // .then(res=>{
            //     console.log(res);
            // })
            //          axios.post('http://route.showapi.com/255-1', {
            //     'showapi_appid': "45519",
            //     'showapi_sign': "4e413232b2ac441b82eff87e813e6eac"
            //   }).then(result => {
            axios.post('http://139.219.67.99:8080/YiQiBang/NewsServlet?action=newsList').then(result => {
                console.log(result);
                // let res = result.data;
                this.newsList = result.data.retData;
                console.log(this.newsList);
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.grid-content {
    /*width: 45px;*/
    text-align: center;
    /*font-size: 17px;*/
}

.el-menu-item.is-active {
    color: #409EFF !important;
    border-bottom: 2px solid #409EFF;
}



/*.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}*/
</style>
