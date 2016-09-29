<template>
<div class="page-help-container">
    <div class="page-help">
        <a @click="toggleMenu()" class="help-chat" href="javascript:;">
            <i class="icon-img icon-chat"></i>
            <p>在线客服</p>
        </a>

        <div v-show="isShow" class="help-detail">
            <ul>
                <li>
                    <i class="icon-img icon-phone"></i>
                    <p class="m-left">020-38468476</p>
                </li>
                <li>
                    <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1722054484&amp;site=qq&amp;menu=yes" target="_blank" class="js_openQQ" data-qq="1722054484">
                        <i class="icon-img icon-qq"></i>
                        <p class="m-left">1722054484</p>
                    </a>
                </li>
                <li>
                    <a href="http://weibo.com/vfenxi" target="_blank">
                        <i class="icon-img icon-weibo"></i>
                        <p class="m-left">@数说故事</p>
                    </a>
                </li>
                <li>
                    <p>工作时间:9:30-18:30</p>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
	data: function() {
		return {
			isShow: false
		}
	},
	methods: {
		toggleMenu: function() {
      this.isShow = !this.isShow
    }
	},
  events: {
    emitService: function() {
      this.isShow = !this.isShow;
    }
  }
}
</script>


<style lang="scss">
.page-help-container {
  position: fixed;
  right: 0;
  top: 50%;
  z-index: 999;
  margin-top: -57px;
  a {
    &:hover, &:active, &:link, &:visited {
      text-decoration: none;
    }
  }
}
.page-help-container .page-help a.help-chat {
  background: #4da2e3 none repeat scroll 0% 0%;
  width: 32px;
  height: 121px;
  float: left;
  display: block;
  padding-top: 22px;
  text-align: center;
  font-size: 0px;
}
.page-help-container .page-help a.help-chat p {
  font-size: 14px;
  line-height: 14px;
  color: #fff;
  width: 1em;
  margin: 0 auto;
  margin-top: 6px;
}
.page-help-container .page-help .help-detail {
  border-left: 1px solid #fff;
  float: left;
  background: #4da2e3 none repeat scroll 0% 0%;
  width: 135px;
  height: 121px;
  padding: 15px 7px;
}
.page-help-container .page-help .help-detail ul {
  list-style-type: none;
  padding: 0;
  display: inline-block;
}
.page-help-container .page-help .help-detail ul li {
  position: relative;
}
.page-help-container .page-help .help-detail ul li i {
  position: absolute;
}
.page-help-container .page-help .help-detail ul li p {
  font-size: 12px;
  line-height: 12px;
  color: #fff;
}
.page-help-container .page-help .help-detail ul li p.m-left {
  margin-left: 30px;
  height: 18px;
  line-height: 18px;
}
.page-help-container .page-help .help-detail ul li:not(:last-child) {
  margin-bottom: 9px;
}
//
.icon-img {
  background: url(./img.png) no-repeat;
  display: inline-block;
}
.icon-phone, .icon-qq, .icon-weibo {
  height: 18px;
    width: 18px;
}
.icon-chat {
      height: 16px;
    width: 16px;
    background-position: 0 -30px;
}
.icon-phone {
    background-position: 0 -215px;
}
.icon-qq {
    background-position: 0 -165px;
}
.icon-weibo {
    background-position: 0 -233px;  
}
</style>