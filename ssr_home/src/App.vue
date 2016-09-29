<template>
  <div id="app">
    <div class="site-nav clearfix" >
      <div class="site-nav_logo-div">
        <router-link to="/">
          <img src="./assets/imgs/index/logo.png" alt="logo" class="site-nav_logo"/>
        </router-link>
      </div>
      <div class="nav">
        <ul class="clearfix">
          <li>
            <router-link to="/" exact>
              <span class="nav-zh">首页</span>
              <span class="nav-en">HOME</span>
            </router-link> 
          </li>
          <li @mouseenter = "showSubNav" @mouseleave = "hideSubNav">
            <router-link to="/pands/solution">
              <span class="nav-zh">产品与服务</span>
              <span class="nav-en">PRODUCT AND SERVICE</span>
            </router-link>
              <div class="pands-sub-nav">
                <div class="pands-sub-nav_content clearfix">
                  <div class="content-column">
                    <div class="column-header">解决方案</div>
                    <a @click.prevent="pageGoTo('pands/solution', 'daiyanAnchor', 'solution-link1')" class="column-item">代言人甄选与监测</a>
                    <a @click.prevent="pageGoTo('pands/solution', 'zongyiAnchor', 'solution-link2')" class="column-item">综艺节目监测</a>
                    <a @click.prevent="pageGoTo('pands/solution', 'pinpaiAnchor', 'solution-link3')" class="column-item">品牌资产与健康度</a>
                    <a @click.prevent="pageGoTo('pands/solution', 'xiaofeizheAnchor', 'solution-link4')" class="column-item">消费者洞察</a>
                  </div>
        
                  <div class="content-column">
                    <div class="column-header">产品</div>
                    <a @click.prevent="pageGoTo('pands/product', 'radarAnchor', 'radar-link')" class="column-item">数说雷达</a>
                    <a @click.prevent="pageGoTo('pands/product', 'lifangAnchor', 'lifang-link')" class="column-item">数说立方</a>
                    <a @click.prevent="pageGoTo('pands/product', 'juheAnchor', 'juhe-link')" class="column-item">数说聚合</a>
                  </div>
        
                  <div class="content-column">
                    <div class="column-header">轻应用</div>
                    <a href="http://f.datastory.com.cn/" target="_blank" class="column-item">数说风云</a>
                    <a href="http://chuanbo.datastory.com.cn/" target="_blank" class="column-item">数说传播</a>
                    <a href="http://7.datastory.com.cn/" target="_blank" class="column-item">数说小七</a>
                  </div>
                </div>
              </div>
          </li>
          <li>
            <router-link to="/report">
              <span class="nav-zh">数说报告</span>
            <span class="nav-en">REPORT</span>
            </router-link> 
          </li>
          <li>
            <router-link to="/about">
              <span class="nav-zh">关于我们</span>
            <span class="nav-en">ABOUT US</span>
            </router-link> 
          </li>
        </ul>
      </div>
    </div>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
  import { pageJump } from './components/util'
  export default {
    methods: {
      pageGoTo: pageJump,
      showSubNav: () => {
        var subNav = $('.pands-sub-nav')[0];
        $(subNav).css({
          'opacity': '1.0',
          'visibility': 'visible'
        });
      },
      hideSubNav: () => {
        var subNav = $('.pands-sub-nav')[0];
        $(subNav).css({
          'opacity': '0',
          'visibility': 'hidden'
        });
      }
    }
  }
</script>

<style lang="scss">
@import './assets/scss/normalize.css';
@import './assets/scss/bootstrap.min.css';
@import './assets/scss/util.scss';

$mw: 1280px;
body,html {
  margin: 0;
  padding: 0;
  position: relative;
  min-width: $mw;
  font-family: "Microsoft YaHei", 微软雅黑, Arial, Helvetica, HelveticaNeue, "Helvetica Neue" !important;
  color: #2c3e50;
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

a:hover, a:visited {
  text-decoration: none;
}

// site-nav-style
$nav_h: 60px;
$nav_blue: #426cd8;
$nav_gray: #eaeaef;

.site-nav {
  width: 100%;
  height: $nav_h;
  padding: 0 10%;
  position: relative;
}
.site-nav_logo-div {
  float: left;
  width: 120px;
  height: 100%;
  position: relative;
}
.site-nav_logo-div .site-nav_logo {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.nav {
  float: right;
  width: 865px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: $nav_h;
    li a:hover, li a.router-link-active {
      cursor: pointer;
      border-top: solid 4px $nav_blue;
      background: $nav_gray;
      color: $nav_blue !important;    
    }
    li {
      width: 25%;
      height: 100%;
      display: table;
      float: left;
      box-sizing: border-box;
    }
    li a {
      display: table-cell;
      text-align: center;
      vertical-align: middle;
      width: 100%;
      height: 100%;
      text-decoration: none;
      border-top: solid 4px transparent;
      color: #949494;
      &:hover {
        text-decoration: none;
      }
    }
    li span {
      text-align: center;
      display: block;
    }
    li span.nav-zh {
      font-size: 16px;
    }
    li span.nav-en {
      font-size: 10px;
      font-family: Arial, Helvetica;
    }
    /*@media screen and (max-width:1500px) {
      li span.nav-zh {
        font-size: 16px;
      }
      li span.nav-en {
        font-size: 10px;
      }
    }*/
  }
}

.pands-sub-nav {
  width: 100%;
  height: 0;
  padding-bottom: 19.8%;
  background: url(./assets/imgs/pandsNavBg.png) no-repeat;
  background-size: cover;
  
  position: absolute;
  left: 0;
  top: $nav_h;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  @include transition(all .3s ease-in);
}
.pands-sub-nav_content {
  width: 865px;
  height: auto;
  margin-top: 25px;
  position: absolute;
  right: 12%;
}

.pands-sub-nav_content {
  .content-column {
    width: 30%;
    float: left;
    margin-right: 3%;
  }
  .column-header {
    font-size: 25px;
    color: #fff;
    padding-left: 20px;
    margin-bottom: 20px;
    text-align: left;
  }

  .column-item {
    display: block;
    color: #fff;
    padding: 10px 20px;
    margin-bottom: 10px;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.17);
    border: none;
    text-align: left;
    &:hover {
      background: #b4ca44;
      color: #fff !important;
      cursor: pointer;
      border: none;
    }
  }
}

@media screen and (min-width: 1440px) and (max-width: 1600px) {
  .pands-sub-nav_content {
    margin-top: 20px;
    .column-header {
      font-size: 22px;
      margin-bottom: 15px;
    }
    .column-item {

    }
  }
}
@media screen and (min-width: 1280px) and (max-width: 1440px) {
  .pands-sub-nav_content {
    margin-top: 20px;
    .column-header {
      font-size: 22px;
      margin-bottom: 15px;
    }
    .column-item {
      padding: 5px 10px;
    }
  }
}

@media screen and (max-width: 1280px) {
  .pands-sub-nav_content {
    margin-top: 20px;
    .column-header {
      font-size: 22px;
      margin-bottom: 15px;
    }
    .column-item {
      padding: 5px 10px;
    }
  }
}
</style>