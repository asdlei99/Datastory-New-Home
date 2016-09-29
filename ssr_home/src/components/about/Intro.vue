<template>
<div>
	<div class="about-header about-header__intro">
	<a id="companyInfo" name="companyInfo"></a>
		<h1  class="about-header_main">公司简介</h1>
		<p class="about-header_slave">COMPANY PROFILE</p>
	</div>
	<div class="intro-canvas">
		<div class="intro-text">
			<p class="intro-text_p"><span class="intro-text_name">广州数说故事信息科技有限公司</span>（以下简称：数说故事）是国内领先的大数据研究服务公司，旨在通过互联网大数据成为生产高关注度产品，在互联网上拥有或期望拥有较高声量品牌客户了解市场、消费者的枢纽，并通过数据创造商业价值。</p>
			<p class="intro-text_p">数说故事致力于提供基于互联网大数据的市场研究产品和服务，围绕“人”、“货”、“场”、“介”，为品牌市场研究提供全方位的商业洞察服务。服务领域包括：消费者洞察、品牌资产研究、代言人/综艺节目/自媒体研究、营销活动研究、公关舆情监测、产品研究、渠道研究。旗下三大产品：<!-- <img class="intro-text_pic" src="../../assets/imgs/about/office.png"> -->数说聚合、数说立方和数说雷达分别从数据获取、挖掘、监测形成完整闭环为品牌企业提供一站式的互联网大数据解决方案。
			</p>
			<p class="intro-text_p">数说故事由7名北美博士2009年创立，于2015年独立运营，现成为新三板上市公司“互动派”（股票代号836928）全资子品牌。发展至今，数说故事已为包括宝洁、亨氏、伊利、美的、联想、拉芳等多个知名品牌企业提供数据研究服务，并与微博、阿里巴巴、电信运营商等数据上下游保持着密切合作关系。</p>
		</div>
	</div>
	<!-- <div class="intro-gallery clearfix">
		<div class="intro-gallery_col intro-gallery_col1">
			<div class="intro-gallery_row intro-gallery_row__half">
				<img src="../../assets/imgs/about/gallery-1.png">
			</div>
			<div class="intro-gallery_row intro-gallery_row__half">
				<img src="../../assets/imgs/about/gallery-1.png">
			</div>
		</div>
		<div class="intro-gallery_col intro-gallery_col2">
			<div class="intro-gallery_row">
				<img src="../../assets/imgs/about/gallery-2.png">
			</div>
		</div>
		<div class="intro-gallery_col intro-gallery_col1">
			<div class="intro-gallery_row">
				<img src="../../assets/imgs/about/gallery-3.png">
			</div>
		</div>
		<div class="intro-gallery_col intro-gallery_col1">
			<div class="intro-gallery_row intro-gallery_row__half">
				<img src="../../assets/imgs/about/gallery-1.png">
			</div>
			<div class="intro-gallery_row intro-gallery_row__half">
				<img src="../../assets/imgs/about/gallery-1.png">
			</div>
		</div>
	</div> -->
</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
.about-header {
	max-width: 1200px;
	margin: 0 auto;
	position: relative;
	&:before, &:after {
		content: '';
		position: absolute;
		background: #c3c3c3;
	}
	&:before {
		width: 90px;
	    height: 5px;
	    left: 190px;
	    top: 35px;
	}
	&:after {
		width: 920px;
		height: 1px;
		left: 280px;
		top: 37px;
	}
}
.about-header__intro {
	margin-top: 100px;
	margin-bottom: 65px;
}
.about-header_main {
	margin: 0;
    line-height: 1;
    color: #426cd8;
    font-weight: normal;
    font-size: 40px; 
}
.about-header_slave {
    margin: 10px 0 0 0;
    line-height: 1;
    color: #5b5b5b;
    font-size: 14px;
}
//
.intro-canvas{
	position: relative;
	background: #f5f8fa;
}
.intro-text {
	position: relative;
	max-width: 1200px;
	margin: 0 auto;
	padding: 40px 0 1px 0;
	&:before {
		content: '';
		position: absolute;
		top: -16.5px;
		left: 0;
		width: 32px;
		height: 32px;
		background: #f5f8fa;
		transform: rotate(45deg);
	}
}
.intro-text_p {
	font-size: 18px;
	color: #5c5c5c;
	line-height: 1.6;
	margin-bottom: 35px;
}
.intro-text_name {
	font-size: 20px;
	font-weight: bold;
}
.intro-text_pic {
	float: left;
    border: 12px solid #f4f7f9;
    margin: 25px 30px 0 0;
}
//
.intro-gallery {
	margin: 102px auto 175px auto;
    width: 1200px;
}
.intro-gallery_col {
	float: left;
}
$col-unit: 240px;
.intro-gallery_col1 {
	width: $col-unit;
}
.intro-gallery_col2 {
	width: $col-unit * 2;
}

.intro-gallery_row {
	position: relative;
	transition: .2s all ease;
	cursor: pointer;
	overflow: hidden;
	z-index: 0;
	&:hover {
		z-index: 10;
		box-shadow: 0 0 14px #828282;
		transform: scale(1.1, 1.1);
	}
	img {
		width: 100%;
		height: 100%;
	}
}
</style>