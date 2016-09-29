<template>
	<div class="curtain">
		<!-- <img class="curtain_wall" src="../assets/imgs/about/production.png"> -->
		<div id="pandAnchor" class="curtain_font">
			<div class="curtain_font-wrap">
				<div class="curtain_font__big">
					<p class="curtain_font__cn">产品与服务</p>
					<p class="curtain_font__en">PRODUCT AND SERVICE</p>
				</div>
			</div>
		</div>
	</div>
	<div class="switcher-area">
		<ul class="switcher-list clearfix">
			<li v-link="{ path: '/pands/solution', activeClass: 'switcher-item__active' }" class="switcher-item">
				解决方案
			</li>
			<li v-link="{ path: '/pands/product', activeClass: 'switcher-item__active' }" class="switcher-item">
				产品
			</li>
		</ul>
	</div>
	<router-view></router-view>
	<site-footer></site-footer>
</template>

<script>
import SiteFooter from '../components/SiteFooter'
export default {
	// ready: function() {
	// 	var w = $(document.body).width();
	// 	var h = w / 1920 * 500;
	// 	$('.curtain_wall').css('height', h + 'px');
	// },
	components: {
		SiteFooter
	}
}
</script>

<style lang="scss">
$theme-blue: #6481da;
.curtain {
	background: url(../assets/imgs/about/production.png) no-repeat;
	background-size: cover;
}
.switcher-area {
	background: #f7fafa;
	height: 60px;
}
.switcher-list {
	padding: 0;
	margin: 0 auto;
	width: 1200px;
	height: 100%;
	line-height: 60px;
	list-style-type: none;
}
.switcher-item {
	display: inline-block;
	width: 100px;
	height: 45px;
	margin-right: 27px;
	line-height: 45px;
	font-size: 18px;
	border-radius: 45px;
	text-align: center;
	cursor: pointer;
}
.switcher-item__active, .switcher-item:hover {
	border: 1px solid $theme-blue;
	color: $theme-blue;
}

</style>