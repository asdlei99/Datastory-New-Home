<template>
  <div id="container">
    <index-banner></index-banner>
    <index-solution></index-solution>
    <tech-advantage></tech-advantage>
    <user-case></user-case>
    <partner></partner>
    <site-footer></site-footer>
  </div>
</template>

<script>
import IndexBanner from '../components/index/IndexBanner'
import IndexSolution from '../components/index/IndexSolution'
import TechAdvantage from '../components/index/TechAdvantage'
import UserCase from '../components/index/UserCase'
import Partner from '../components/index/Partner'
import SiteFooter from '../components/SiteFooter'

export default {
  ready: function() {
    // prevent drag event
    document.ondragstart = function(e) {
      e = e || window.event;
      e.preventDefault();
      return false;
    }
    // decline IE9<
    function IEMode() {
      var ua = navigator.userAgent.toLowerCase();
      var re_trident = /\btrident\/([0-9.])+/;
      var re_msie = /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/;
      var version;
      if (!re_msie.test(ua)) {
        return false;
      }
      var m = re_trident.exec(ua);
      if(m) {
        version = m[1].split(".");
        version[0] = parseInt(version[0], 10) + 4;
        version = version.join(".");
      } else {
        m = re_msie.exec(ua);
        version = m[1];
      }
      return parseFloat(version);
    }
    var ie = IEMode();
    console.log(ie);
    if (ie && ie <= 9) {
      alert("您的浏览器版本过低,为了获得更好的浏览体验,请使用最新版的IE、edge、chrome或firefox等浏览器。");
      console.log('you');
    }
  },
  components: {
    IndexBanner,
    IndexSolution,
    TechAdvantage,
    UserCase,
    Partner,
    SiteFooter
  }
}
</script>

<style lang="scss">
@import '../assets/scss/util.scss';
$mw: 1350px;
html, body {
  margin: 0;
  padding: 0;
  position: relative;
  min-width: $mw;
  font-family: "Microsoft YaHei", 微软雅黑, Arial, Helvetica, HelveticaNeue, "Helvetica Neue" !important;
  color: #2c3e50;
  overflow-x: hidden;
}

// site nav style 
$nav_h: 80px;
$nav_blue: #426cd8;
$nav_gray: #eaeaef;

#site-nav {
  padding: 0 10%;
  min-width: 1024px;
  width: 100%;
  height: $nav_h;
  #logo-div {
    float: left;
    padding: ($nav_h - 62px) / 2 0;
  }
  #nav {
    float: right;
    width: 865px;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      // @include flex-center;
      // align-items: stretch;
      width: 100%;
      height: $nav_h;
      letter-spacing: -10px;
      li:hover, .nav-item__active {
        cursor: pointer;
        border-top: solid 4px $nav_blue;
        color: $nav_blue !important;
        background: $nav_gray;
      }
      li {
        width: 25%;
        height: 100%;
        // @include flex-center;
        // flex-direction: column !important;
        display: inline-block;
        vertical-align: middle;
        letter-spacing: normal;
        box-sizing: border-box;
        border-top: solid 4px transparent;
        color: #949494;
      }
      li span {
        text-align: center;
        display: block;
      }
      li span.nav-zh {
        font-size: 18px;
        margin-top: 20px;
      }
      li span.nav-en {
        font-size: 10px;
        font-family: Arial, Helvetica;
      }
      @media screen and (max-width:1500px) {
        li span.nav-zh {
          font-size: 16px;
        }
        li span.nav-en {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
