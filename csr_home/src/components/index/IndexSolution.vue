<template>
	<div id="index-solution">
		<div class="solution-source-wrap">
			<section-header zh="解决方案" en="SOLUTION"></section-header>
			<div class="section section1">
				<img src="../../assets/imgs/index/solutionSource.png" alt="">
			</div>
		</div>
		<div class="section section2">
			<div class="img-div">
				<img src="../../assets/imgs/index/arrowDown.png" alt="">
			</div>
			<!-- <div class="header-div">
				<h2>四大解决方案</h2>
			</div> -->
			<div class="item-div">
				<div class="item">
					<div class="img-div">
						<img src="../../assets/imgs/index/s1.png" alt="">
					</div>
					<h2>代言人甄选与监测</h2>
					<p>利用互联网大数据<br/>定位、甄选、监测品牌代言人</p>
				</div>
				<div class="item">
					<div class="img-div">
						<img src="../../assets/imgs/index/s2.png" alt="">
					</div>
					<h2>综艺节目监测</h2>
					<p>实时监测综艺节目全网声量<br/>挖掘话题、分析受众、评估效果</p>
				</div>
				<div class="item">
					<div class="img-div">
						<img src="../../assets/imgs/index/s3.png" alt="">
					</div>
					<h2>品牌资产与健康度</h2>
					<p>通过线上数据评估企业品牌资产<br/>监测跟踪品牌健康度</p>
				</div>
				<div class="item">
					<div class="img-div">
						<img src="../../assets/imgs/index/s4.png" alt="">
					</div>
					<h2>消费者洞察</h2>
					<p>社交数据库快速了解360°消费者画像</p>
				</div>
			</div>

			<div class="img-div">
				<a @click="emitPageGoTo()" class="my-button">
					<span>查看详情</span>
				</a>
			</div>
		</div>
	</div>
</template>
<script>
	import SectionHeader from '../SectionHeaderDark';
	export default {
		components: {
			SectionHeader
		},
		methods: {
			emitPageGoTo: function() {
				var data = {
					page: 'pands/solution',
					anchor: 'pandAnchor'
				};
				this.$dispatch('pageGoHook', data);
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../assets/scss/util.scss';
	#index-solution {
		width: 100%;
		.section {
			width: 100%;
		}
		.solution-source-wrap {
			background: url(../../assets/imgs/index/solution-bg.png) no-repeat;
			background-clip: content-box;
			background-size: cover;
		}
		.section1 {
			padding-bottom: 40px;
			img {
				display: block;
				width: 50%;
				margin: 0 auto;
				position: relative;
				left: 2.1%;
			}
		}
		.section2 {
			background-color: #efefef;
			padding-bottom: 50px;
			color: rgb(100,100,100);
			border-top: solid 1px #ccc;
			h2 {
				text-align: center;
				font-size: 28px;
			}
			p {
				text-align: center;
				font-size: 16px;
			}
			a {
				text-decoration: none;
				cursor: pointer;
			}
			.img-div {
				width:100%;
				position: relative;
				// @include flex-center;
				display: inline-block;
				text-align: center;
				vertical-align: middle;
				img {
					display: inline-block;
					@include transform(translateY(-1px));
				}
			}

			.header-div {
				margin: 30px 0 60px 0;
				h2 {
					font-size: 30px;
				}
			}
			.item-div {
				width: 100%;
				display: inline-block;
				text-align: center;
				padding: 60px 0;
				.item {
					width: 23%;
					border-right: solid 1.5px #ccc;
					vertical-align: top;
					display: inline-block;
				}
				.item:last-child {
					border: none;
				}
			}
			.my-button {
				width: 180px;
				height: 55px;
				color: #fff;
				background-color: #87c717;
				padding: 5px;
				border-radius: 10px;
				font-size: 22px;
				display: inline-block;
				text-align: center;
				line-height:45px;
				&:hover {
					cursor: pointer;
					opacity: 0.8;
				}
			}
		}
	}
</style>