<template>
  <div id="site-footer">
    <customer-service></customer-service>
    <div id="consult-sec" class="section">
      <div class="consult-wrap">
        <div id="consult-info">有任何需要请向我们咨询！</div>
        <a @click="emitConsult()" href="javascript:;" id="consult-button"><span><img src="../assets/imgs/index/consultIcon.png" alt="icon"></span>我要咨询</a>
      </div>
    </div>
    <div id="link-sec" class="section">
      <div class="link-col">
        <div class="ul-div">
          <div class="link-header">关于我们</div>
          <ul>
            <router-link to="/about#companyInfo" class="router-link" id="about-link1" tag="li">数说简介</router-link>
            <router-link to="/about#teamInfo" class="router-link" id="about-link2" tag="li">团队介绍</router-link>
            <router-link to="/about#newsInfo" class="router-link" id="about-link3" tag="li">数说新闻</router-link>
            <li><a @click.prevent="pageGoTo('about', 'companyInfo', 'about-link1')">数说简介</a></li>
            <li><a @click.prevent="pageGoTo('about', 'teamInfo', 'about-link2')">团队介绍</a></li>
            <li><a @click.prevent="pageGoTo('about', 'newsInfo', 'about-link3')">数说新闻</a></li>
          </ul>
        </div>
        <div class="ul-div">
          <div class="link-header">解决方案</div>
          <ul>
            <router-link to="/pands/solution#daiyanAnchor" class="router-link" id="solution-link1" tag="li">代言人甄选与监测</router-link>
            <router-link to="/pands/solution#zongyiAnchor" class="router-link" id="solution-link2" tag="li">综艺节目监测</router-link>
            <router-link to="/pands/solution#pinpaiAnchor" class="router-link" id="solution-link3" tag="li">品牌资产与健康度</router-link>
            <router-link to="/pands/solution#xiaofeizheAnchor" class="router-link" id="solution-link4" tag="li">消费者洞察</router-link>
            <li><a @click.prevent="pageGoTo('pands/solution', 'daiyanAnchor', 'solution-link1')">代言人甄选与监测</a></li>
            <li><a @click.prevent="pageGoTo('pands/solution', 'zongyiAnchor', 'solution-link2')">综艺节目监测</a></li>
            <li><a @click.prevent="pageGoTo('pands/solution', 'pinpaiAnchor', 'solution-link3')">品牌资产与健康度</a></li>
            <li><a @click.prevent="pageGoTo('pands/solution', 'xiaofeizheAnchor', 'solution-link4')">消费者洞察</a></li>
          </ul>
        </div>
        <div class="ul-div">
          <div class="link-header">数说产品</div>
          <ul>
            <router-link to="/pands/product#radarAnchor" class="router-link" id="radar-link" tag="li">数说雷达</router-link>
            <router-link to="/pands/product#lifangAnchor" class="router-link" id="lifang-link" tag="li">数说立方</router-link>
            <router-link to="/pands/product#juheAnchor" class="router-link" id="juhe-link" tag="li">数说聚合</router-link>
            <li><a @click.prevent="pageGoTo('pands/product', 'radarAnchor', 'radar-link')">数说雷达</a></li>
            <li><a href="http://cube.datastory.com.cn/?dskid=ccc" target="_blank">数说立方</a></li>
            <li><a href="http://api.datastory.com.cn/" target="_blank">数说聚合</a></li>
          </ul>
        </div>
        <div class="ul-div">
          <div class="link-header">轻应用</div>
          <ul>
            <li><a href="http://f.datastory.com.cn/" target="_blank">数说风云</a></li>
            <li><a href="http://chuanbo.datastory.com.cn/" target="_blank">数说传播</a></li>
            <li><a href="http://7.datastory.com.cn/" target="_blank">数说小七</a></li>
            <!-- <li><a href="http://iwom.datastory.com.cn/" target="_blank">数说口碑</a></li> -->
          </ul>
        </div>
      </div>

      <div class="link-col link-col_contact-col">
        <div class="contact-div">
          <div class="link-header"><span class="contact-icon"><img src="../assets/imgs/index/telIcon.png" alt=""></span>联系电话</div>
          <div class="contact-bd">
            <div class="contact-mes">电话：020-3846 8476</div>
            <div class="contact-mes">传真：020-38891740/41</div>
          </div>
        </div>
        <!-- <div class="contact-div">
          <div class="link-header">
            <span class="contact-icon"><img src="../assets/imgs/index/emailIcon.png" alt=""></span>
            联系邮箱
          </div>
          <div class="contact-bd">
            <div class="contact-mes">商务合作：partner@hudongpai.com</div>
            <div class="contact-mes">简历投递：hr@hudongpai.com</div>
          </div>
        </div> -->
        <div class="contact-div">
          <div class="link-header"><span class="contact-icon"><img src="../assets/imgs/index/addrIcon.png" alt=""></span>联系地址</div>
          <div class="contact-bd">
            <ul>
              <li v-for="item in contactAddr" v-text='item.city' v-bind:class='{selectedAddr: item.idNum == current}' v-on:click="toggleAddr(item.idNum)"></li>
            </ul>
            <div id="contact-addr-detail">
              <p v-for="item in contactAddr" v-html="item.addr" v-if="item.idNum == current"></p>
            </div>
          </div>
        </div>
      </div>

      <div class="link-col">
        <div class="static-map">
          <img src="../assets/imgs/map.png" alt="map">
        </div>
        <!-- map -->
        <div id="map-container"></div>
      </div>
    </div>
    <div id="copy-sec" class="section">
      <p>
        <span>友情链接&nbsp;</span>
        <a href="http://hudongpai.com/" target="_blank">&middot;&nbsp;互动派</a>
        <a href="http://www.datatub.com/" target="_blank">&middot;&nbsp;塔布数据</a>
      </p>
      <p>Copyright &copy; 2016广州数说故事信息科技有限公司 All Rights Reserved 版权所有 备案号：粤ICP备15073179号</p>
    </div>
  </div>
</template>

<script>
  import { pageJump } from './util'
  import CustomerService from './CustomerService/CustomerService'
  import store from '../vuex/store'
  export default {
    name: 'site-footer',
    components: {
      CustomerService
    },
    mounted: function() {
      var map = new AMap.Map('map-container', {
        zoom: 17,
        center: [113.3345291437,23.1257418898]
      });
      var marker = new AMap.Marker({
        position: [113.3346292457,23.1259418898],
        map: map
      });
      AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
          var toolBar = new AMap.ToolBar();
          var scale = new AMap.Scale();
          map.addControl(toolBar);
          map.addControl(scale);
      });
      // function locateMapContainer() {
      //  var contactAddr = $('.link-col-move-down')[0];
      //  if (!contactAddr) {
      //    contactAddr = document.getElementsByClassName('link-col-move-down')[0];
      //  }
      //  var l = $('.link-col-move-down').offset().left || contactAddr.offsetLeft;
      //  $('#map-container')[0].style.left = l - 30 + 'px';
      // }

      // locateMapContainer();
      // window.onresize = function() {
      //  locateMapContainer();
      // }*/
    },
    data: function() {
      return {
        contactAddr: [
          {
            'idNum': 0,
            'city': '广州总部',
            'addr': '广州市天河区珠江新城黄埔大道西100号富力盈泰A塔13A/7层'
          },
          {
            'idNum': 1,
            'city': '北京',
            'addr': '北京朝阳区立水桥北里2号塞纳维拉别墅2405栋'
          },
          {
            'idNum': 2,
            'city': '上海',
            'addr': '上海市长宁区愚园路1258号绿地商务1012室'
          }
        ],
        current: 0
      }
    },
    methods: {
      toggleAddr: function(index) {
        this.current = index;
      },
      pageGoTo: pageJump,
      emitConsult: () => {
        store.dispatch('changeConsultState')
      }
    }
  }
</script>
<style lang="scss">
  @import '../assets/scss/util.scss';
  #site-footer {
    width: 100%;
    font-size: 14px;
    .section {
      width: 100%;
    }
    #consult-sec {
      width: 100%;
      height: 120px;
      background: url(../assets/imgs/index/consultBackground.png) no-repeat;
      background-size: cover;
      // @include flex-center;
      // display: inline-block;
      // text-align: center;
      display: table;
      .consult-wrap {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
      }
      #consult-info {
        display: inline-block;
        color: #fff;
        font-size: 25px;
      }
      #consult-button {
        width: 150px;
        display: inline-block;
        text-decoration: none;
        color: #fff;
        border: solid 1px #fff;
        padding: 10px;
        border-radius: 30px;
        font-size: 20px;
        margin-left: 20px;
        span img {
          margin-top: -3px;
        }
      }
    }
    #link-sec {
      padding: 50px;
      height: 365px;
      background-color: #4a5c89;
      color: rgba(255,255,255,0.6);
      // @include flex-center;
      // align-items: stretch;
      position: relative;
      overflow: visible;
      display: inline-block;
      text-align: center;
      .link-col {
        text-align:left;
        margin-right: 100px;
        display: inline-block;
        vertical-align: top;
      }
      .link-col_contact-col {
        margin-right: 50px;
      }
      .link-col-move-down {
        margin-top: 100px;
      }
      .link-header {
        font-size: 16px;
        color: rgba(255,255,255,1.0);
        padding: 15px 0;
      }
      .ul-div {
        display: inline-block;
        vertical-align: top;
        margin-left: 30px;
        .link-header {
          padding-bottom: 5px;
          &:after {
            content: '';
            display: block;
            opacity: 0;
            width: 12px;
            border-top: solid 1px #fff;
            margin-top: 6px;
          }
        }
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          li {
            padding: 5px 0;
            a {
              color: rgba(255,255,255,0.6);
              text-decoration: none;
              font-size: 14px;
              cursor: pointer;
              &:hover {
                color: rgba(255,255,255,1.0);
              }
            }
          }
        }
      }
      .contact-div {
        margin-bottom: 10px;
        position: relative;
        .link-header span.contact-icon {
          display: block;
          background-color: #a0accb;
          width: 30px;
          height: 30px;
          padding: 5px;
          border-radius: 50%;
          position: absolute;
          top: 10px;
          left: -40px;
          img {
            width: 70%;
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
          }
        }
        .contact-bd {
          ul {
            padding: 0;
            margin: 0;
            list-style: none;
            li {
              display: inline;
              font-size: 14px;
              margin-right: 30px;
              padding: 3px;
              position: relative;
              &:after {
                content: '';
                height: 0;
                width: 0;
                padding: 0;
                margin: 0;
                display: none;
                position: absolute;
                top: 120%;
                left: 50%;
                @include transform(translateX(-50%));
                border-bottom: solid 10px #3a4c79;
                border-left: solid 8px transparent;
                border-right: solid 8px transparent;
              }
              &:hover {
                color: rgba(255, 255, 255, 1.0);
                cursor: pointer;
              }
            }
          }
          .selectedAddr {
            color: rgba(255, 255, 255, 1.0);
            // border-bottom: solid 1px #fff;
            &:after {
              display: block;
            }
          }
          #contact-addr-detail {
            margin-top: 15px;
            padding: 3px;
            width: 280px;
            background-color: #3a4c79;
            p {
              margin: 0;
              padding: 0;
              line-height: 20px;
            }
          }
          .contact-mes {
            font-size: 14px;
            padding: 5px 0;
          }
        }
      }

      @media screen and (max-width:1500px) {
        .link-col:first-child {
          margin-right: 80px;
          margin-left: -50px;
        }
        .link-col_contact-col {
          margin-right: 30px;
        }
        .ul-div {
          margin-left: 15px;
        }
        #map-container {
          width: 300px;
          height: 250px;
        }
      }
    }
    #copy-sec {
      padding: 20px;
      margin: 0;
      background-color: #fff;
      font-size: 14px;
      color: #848484;
      p {
        span {
          font-size: 18px;
          margin-right: 10px;
          &:after {
            content: '';
            display: inline-block;
            width: 10px;
            height: 10px;
            border-top: solid 1.5px #848484;
            border-right: solid 1.5px #848484;
            @include transform(rotate(45deg));
          }
        }
        a {
          text-decoration: none;
          color: #848484;
          padding: 2px;
          &:hover {
            color: #4a5c89;
            border-bottom: solid 1px #4a5c89;
          }
        }
        margin: 0;
        padding: 5px;
        text-align: center;
      }
    }

    #map-container {
      width: 350px;
      height: 220px;
      box-shadow: 0 0 0 10px rgba(255,255,255,0.4);
      display: none\9;
    }
    .static-map {
      display: none;
      display: block\9;
    }
    .router-link {
      display: none;
    }
  }
</style>
