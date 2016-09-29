<template>
<div class="flow-card_radar-wrap">
	<div class="flow-card flow-card_radar">
		<div class="flow-content-wrap">
			<div class="flow-content clearfix">
				<div class="flow-content_left">
					<div class="produc-title clearfix">
						<div class="produc-title_logo">
							<img src="../../assets/imgs/production/radar-logo.png">
						</div>
						<div id="radarAnchor" class="produc-title_txt">数说雷达</div>
					</div>
					<div class="product-feature clearfix">
						<p>拎包入住的企业大数据平台</p>
					</div>
					<p class="product-feature_txt">数说雷达使企业能够快速构建自有的、体系化的外部大数据平台。它从互联网全网采集关于企业/品牌的各类数据，包括微博、微信、论坛、电商、视频、新闻、垂直门户等，经过数据的自动化清洗、处理、分析、存储之后，依据企业的消费者与市场研究需求，建立自有的、全面的数据体系，以SaaS化数据仪表盘的形式呈现，为企业提供市场决策依据。数说雷达的标准模块包括代言人监测、综艺节目监测、品牌健康度监测、电商监测、渠道监测、Campain监测等，也支持客制化数据模块的开发。</p>
					<!-- <a class="product-try-btn" href="">申请试用</a> -->
				</div>
				<div class="flow-content_right">
					<img src="../../assets/imgs/production/radar.png">
				</div>
			</div>
		</div>
	</div>
</div>

<div class="flow-card_cube-wrap">
	<div class="flow-card flow-card_cube">
		<div class="flow-content-wrap">
			<div class="flow-content clearfix">
				<div class="flow-content_left">
					<img src="../../assets/imgs/production/cube.png">
				</div>
				<div class="flow-content_right">
					<div class="produc-title clearfix">
						<div class="produc-title_logo">
							<img src="../../assets/imgs/production/cube-logo.png">
						</div>
						<div class="produc-title_txt">数说立方</div>
					</div>
					<div class="product-feature clearfix">
						<p>在线大数据商业智能产品</p>
					</div>
					<p class="product-feature_txt">数说立方是一款在线大数据BI产品，帮助商业数据分析师进行高效的互联网大数据挖掘分析。数说立方创造式搭载分布式搜索、语义分析、数据可视化三大引擎系统，解决互联网海量文本数据挖掘难题。不仅具备基础的数据布尔查询、OLAP、可视化，同时面对海量非结构化数据，可实现"秒级响应"和"简单操作"。量级上亿数据也要求秒级响应，轻点图表即可追溯到原始数据，文本挖掘算法成为标配。除此之外，数说立方还配备亿级Social人群洞察数据库，支持全网实时数据源的无缝接入，为数据分析师，特别是进行文本大数据挖掘的分析师，提供全新的优质BI体验。</p>
					<a class="product-try-btn" href="http://cube.datastory.com.cn/?dskid=ccc041" target="_blank">立即体验</a>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="flow-card_juhe-wrap">
	<div class="flow-card flow-card_juhe">
		<div class="flow-content-wrap">
			<div class="flow-content clearfix">
				<div class="flow-content_left">
					<div class="produc-title clearfix">
						<div class="produc-title_logo">
							<img src="../../assets/imgs/production/juhe-logo.png" alt="logo">
						</div>
						<div id="juheAnchor" class="produc-title_txt">数说聚合</div>
					</div>
					<div class="product-feature clearfix">
						<p>统一的互联网大数据API</p>
					</div>
					<p class="product-feature_txt">
						数说聚合通过提供统一标准格式的数据接口，让企业快速拥有一站式的外部数据获取能力。依靠强大的分布式爬虫引擎，保证了数据的全面性、实时性、一致性。数据源覆盖国内主流的新闻门户、社交、电商、点评、视频等类型的各大网站，提供最细颗粒度的数据维度，包括内容、时间、热度等信息属性，也包括地区、年龄、性别等用户属性。不同的数据源可配置不同的抓取频率，最快实现分钟级的更新速度。数说聚合还配备语义分析支撑的垃圾过滤算法，自动过滤水军、僵尸等干扰数据，减轻企业的数据清洗工作。
					</p>
					<a class="product-try-btn" href="http://api.datastory.com.cn/" target="_blank">立即体验</a>
				</div>

				<div class="flow-content_right">
					<img src="../../assets/imgs/production/juhe.png" alt="数说聚合">
				</div>
			</div>
		</div>
	</div>
</div>
</template>


<script>
	export default {
		ready: function() {
			function getQueryObj(str) {
				if (!str) {
					str = window.location.href; // get current page-url
				}
				var obj = {};
				if (str.indexOf('?') < 0) {
					return;
				}
				var queryStr = str.split('?')[1];
				var allQuerys = queryStr.split('&');
				allQuerys.forEach(function(item) {
					var key = item.split('=')[0];
					var value = item.split('=')[1];
					obj[key] = value;
				});
				return obj;
			}
			var query = getQueryObj();
			if (query) {
				var target = $('#' + query.anchor);
				if (target) {
					let t = setTimeout(function() {
						// window.scrollTo(0, target.offset().top - 50);
						$('html, body').animate({
							scrollTop: target.offset().top - 50
						}, 800);
					}, 150);
				} else {
				console.log('no anchor found');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	#app {
		overflow: hidden;
	}
</style>

<style lang="scss">
$theme-color: #6481da;
.flow-card_radar-wrap {
	overflow: hidden;
}
.flow-card_radar {
	height: 700px;
	background-clip: content-box;
	background: url(../../assets/imgs/production/radar-bg.png) no-repeat;
	.flow-content {
		position: relative;
	}
	.flow-content_left {
		width: 535px;
	}
	.flow-content_right {
		width: 480px;
		margin-top: 115px;
		margin-right: 145px;
	}
}
.flow-card_cube-wrap {
	overflow: hidden;
}
.flow-card_cube {
	height: 700px;
	// background-clip: content-box;
	background: url(../../assets/imgs/production/cube-bg.png) no-repeat;
	background-color: #f5f8fa;
	.flow-content {
		position: relative;
	}
	.flow-content_left {
		position: absolute;
		width: auto;
		left: -150px;
	}
	.flow-content_right {
		width: 515px;
		margin-right: 0;
	}
	@media screen and (max-width:1500px) {
		.flow-content_left {
			position: absolute;
			left: -120px;
		}
		.flow-content_right {
			margin-right: -20px;
		}
	}
}

.flow-card_juhe-wrap {
	overflow: hidden;
}

.flow-card_juhe {
	height: 700px;
	background-clip: content-box;
	background: url(../../assets/imgs/production/juhe-bg.png) no-repeat;
	.flow-content {
		position: relative;
	}
	.flow-content_left {
		width: 515px;
	}
	.flow-content_right {
		width: 480px;
		margin-top: 100px;
		margin-right: 100px;
	}
	@media screen and (max-width:1500px) {
		.flow-content_right {
			margin-right: 120px;
		}
	}
}

.produc-title {
	margin-bottom: 32px;
}
.produc-title_logo {
	float: left;
    width: 85px;
    line-height: 85px;
    text-align: center;
    height: 85px;
    border: 1px solid $theme-color;
    border-radius: 50%;
    background: rgba(100, 129, 218, .1);
    img {
    	margin-bottom: 7px;
    }
}
.produc-title_txt {
	float: left;
    color: $theme-color;
    font-size: 40px;
    height: 85px;
    line-height: 85px;
    margin-left: 37px;
}
.product-feature {
	margin-bottom: 8px;
	p {
		float: left;
		font-size: 30px;
		color: #383838;
		padding: 29px 0;
		border-top: 1px solid #bcbcbc;
		border-bottom: 1px solid #bcbcbc;
		line-height: 1;
		margin: 0;
	}
}
.product-feature_txt {
	font-size: 18px;
    color: #5b5b5b;
    line-height: 32px;
    margin-bottom: 26px;
}
.product-try-btn {
	$try-btn-color: #9cb61a;
	border-radius: 25px;
	border: 1px solid $try-btn-color;
	padding: 8px 32px;
	color: $try-btn-color;
	font-size: 16px;
    display: inline-block;
	&:hover, &:active, &:link, &:visited {
		text-decoration: none;
	}
	&:hover {
		color: #fff;
		background: $try-btn-color;	
	}
}
</style>