<template>
	<div id="index-banner">
		<!-- <img id="banner-img" src="../../assets/imgs/index/indexBanner.jpg" alt=" 数说故事">-->
		<div id="banner-title">
			<h1>讲述数据背后的故事</h1>
			<h2 id="banner-subtitle">领先的大数据市场研究服务商</h2>
		</div>
		
	</div>
</template>

<script>
	export default {
		// using js to control img responsive size
		// ready: function() {
		// 	var w = $(document.body).width();
		// 	var h = w / 1920 * 702;
		// 	$('#index-banner').css('height', h + 'px');
		// }
	}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/util.scss';
#index-banner {
	width: 100%;
	height: 0;
	padding-bottom: 36.5%;
	position: relative;
	overflow: hidden;
	background: url(../../assets/imgs/index/indexBanner.jpg) no-repeat;
	background-size: cover;
	#banner-title {
		width: 100%;
		color: #fff;
		position: absolute;
		top: 30%;
		left: 0;
		h1 {
			text-align: center;
			font-size: 96px;
			font-weight: bold;
			line-height: 1;
		}
		h2#banner-subtitle {
			width: 600px;
			margin: 20px auto;
			font-size: 38px;
			border: solid 1px #fff;
			padding: 10px;
			text-align: center;
			@include border-radius(50px);
		}
	}

	@media screen and (max-width:1500px) {
		#banner-title {
			top: 20%;
			#banner-subtitle {
				margin: 10px auto;
				padding: 5px;
				width: 500px;
				font-size: 30px;
			}
		}
	}
	@media screen and (max-width:1280px) {
		#banner-title {
			top: 20%;
			h1 {
				font-size: 75px;
			}
			h2 {
				margin: 0 auto;
				padding: 5px;
				width: 500px;
				font-size: 30px;
			}
		}
	}
	@media screen and (min-width:1280px) and (max-width:1440px) {
		#banner-title {
			top: 20%;
			h1 {
				font-size: 80px;
			}
			h2 {
				margin: 0 auto;
				padding: 5px;
				width: 500px;
				font-size: 30px;
			}
		}
	}
	@media screen and (min-width:1440px) and (max-width:1600px) {
		#banner-title {
			top: 25%;
			h1 {
				font-size: 85px;
			}
			h2 {
				margin: 0 auto;
				padding: 5px;
				width: 500px;
				font-size: 35px;
			}
		}
	}
	@media screen and (min-width:1600px) {
		#banner-title {
			top: 30%;
			h1 {
				font-size: 90px;
			}
			h2 {
				margin: 0 auto;
				padding: 5px;
				width: 500px;
				font-size: 40px;
			}
		}
	}
}
</style>