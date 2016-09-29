<template>
	<div id="newsInfo" class="about-header about-header__intro">
		<h1 class="about-header_main">数说新闻</h1>
		<p class="about-header_slave">NEWS OF DATASTORY</p>
	</div>
	<div class="news-wrap">
		<ul class="news-list">
			<li v-for="post in news" class="news-item clearfix">
				<div class="news-post-time">
					<p class="news-post-time_m" v-text="post.date.substring(5, post.date.length)"></p>
					<div class="news-post-time_sep"></div>
					<p class="news-post-time_y" v-text="post.date.substring(0, 4)"></p>
				</div>
				<div class="news-cover">
					<img :src="post.cover">
				</div>
				<div class="news-content">
					<a :href="post.url" target="_blank">
						<p class="news-title" v-text="post.title"></p>
					</a>
					<p class="news-content-part" v-text="post.content"></p>
				</div>
			</li>
		</ul>
		<!-- <div class="news-pagination">
			<ul class="news-pager clearfix">
				<li class="news-pager-item news-pager-item_first"></li>
				<li class="news-pager-item news-pager-item_prev"></li>
				<li class="news-pager-item">1</li>
				<li class="news-pager-item">2</li>
				<li class="news-pager-item">3</li>
				<li class="news-pager-item">...</li>
				<li class="news-pager-item">4</li>
				<li class="news-pager-item">5</li>
				<li class="news-pager-item">6</li>
				<li class="news-pager-item news-pager-item_next"></li>
				<li class="news-pager-item news-pager-item_final"></li>
			</ul>
		</div> -->
	</div>
</template>
<script>
export default {
	data() {
		return {
			news: [{
				date: '2016-07-29',
				cover: require('../../assets/imgs/cover/2016-07-29.jpg'),
				title: '数说故事携手UCloud | 演练3场真实存在的混合云架构实战',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651374105&idx=1&sn=3d1ded44504a77e453d5b31040bf4405',
				content: '若你想了解或者深度了解混合云架构设计与实战，8月6日，请跟我来广州富力君悦大酒店，一起探讨技术流行元素——混合云实践，一场有深度的技术分享等着你！'
			}, {
				date:'2016-06-27',
				cover: require('../../assets/imgs/cover/2016-06-27.jpg'),
				title: '徐亚波博士：数据驱动下的市场研究将重塑创新流程',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651373929&idx=1&sn=f8f6f8746c62bd3b44b5aee94074f2df',
				content: '6月24日，2016青岛首届大数据论坛在青岛出版集团成功举行。本次论坛以“智赢数字时代”为主题，由数说故事与青岛财经日报主办，共同搭建大数据沟通交流平台。'
			}, {
				date:'2016-06-08',
				cover: require('../../assets/imgs/cover/2016-06-08.jpg'),
				title: '益普索与数说故事达成数据战略合作,共创互联网大数据价值',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651373884&idx=1&sn=ae2d3cd362aca71e4722b0bcb3fe0200',
				content: '全球领先的市场研究集团“益普索”与大数据服务与应用提供商“数说故事”正式签订大数据战略合作协议，共创互联网大数据价值。'
			}, {
				date:'2016-05-26',
				cover: require('../../assets/imgs/cover/2016-05-26.jpg'),
				title: '数说故事与易企秀达成数据战略合作关系',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651373770&idx=1&sn=f6a917e9119a57e3f262cbf4f380886d',
				content: '合作新突破丨数说故事与H5移动营销领导者之一易企秀达成战略合作伙伴。'
			}, {
				date:'2016-03-10',
				cover: require('../../assets/imgs/cover/2016-03-10.jpg'),
				title: '用H5做营销，必须回答的问题',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=402377204&idx=1&sn=f635873309523fc91d6873f14b7c877b',
				content: '【Simon阿文倾情推荐的】数说传播全方位解决H5广告效果监测问题，功能升级，免费奉献！'
			}, {
				date:'2016-01-05',
				cover: require('../../assets/imgs/cover/2016-01-05.jpg'),
				title: '数说故事与MAKA达成数据合作',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=401139300&idx=1&sn=847ac9c6f5baf85f2fb5a9300dba0b90',
				content: '数说故事与国内领先的H5创作平台MAKA结成战略合作伙伴，达成“数据合作”关系。'
			}]
		}
	}
}
</script>
<style lang="scss">
.news-list {
	margin: 0 auto 0 auto;
    padding: 0;
    width: 1200px;
    list-style-type: none;
}
.news-item {
    padding: 35px 5px 35px 22px;
    &:hover {
    	background: #f5f8fa;
    }
}
.news-post-time {
    position: relative;
    float: left;
    border: 1px solid #d8dbdd;
    padding: 34px 20px 24px 20px;
}
.news-post-time_m {
	line-height: 1;
    margin-bottom: 40px;
    font-size: 24px;
    color: #818486;
}
.news-post-time_sep {
	position: absolute;
    top: 75px;
    background: #dbdee0;
    height: 1px;
    width: 63.5px;
    transform: rotate(-18deg);
}
.news-post-time_y {
    line-height: 1;
    margin: 0;
    font-size: 16px;
    color: #818486;
}
//
.news-content-part {
	color: #818181;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 0;
}
.news-title {
	font-size: 24px;
    line-height: 1;
    margin-bottom: 18px;
}
.news-content {
    margin-left: 394px;
    padding-top: 20px;
	a {
		color: #2a2a2a;
		transition: .2s color ease;
    	&:hover {
    		color: #a0bc25;
    		text-decoration: none;	
    	}
	}
}
.news-cover {
	float: left;
    margin-left: 20px;
	width: 250px;
    height: 142px;
    img {
    	width: 100%;
    }
}
//
.news-pagination {
    width: 1200px;
    margin: 0 auto 80px auto;
    border-top: 1px solid #d3d3d6;
    padding-top: 30px;
}
.news-pager {
    margin: 0;
    padding: 0;
    list-style-type: none;
    float: right;
}
.news-pager-item {
	float: left;
	width: 34px;
	height: 34px;
	cursor: pointer;
	border: {
		top: 1px solid #e2e2e2;
		left: 1px solid #e2e2e2;
		bottom: 1px solid #e2e2e2;
	}
	&:last-child {
		border-right: 1px solid #e2e2e2;
	}
}
.news-pager-item_first, .news-pager-item_final, .news-pager-item_prev, .news-pager-item_next {
	&:before {
	    content: '';
	    width: 10px;
	    height: 10px;
	    display: inline-block;
	    position: relative;
	    left: 2px;
	    border: {
	    	left: 1px solid #b7b7b7;
			top: 1px solid #b7b7b7;
	    }
	    transform: rotate(-45deg);
	}
}
.news-pager-item_first, .news-pager-item_final {
	&:before {
		border: {
	    	left: 2px solid #b7b7b7;
			top: 2px solid #b7b7b7;
	    }
	}
}
.news-pager-item_next, .news-pager-item_final {
	&:before {
		left: -2px;
		transform: rotate(135deg);
	}
}

.news-pager-item {
	line-height: 34px;
	text-align: center;
	color: #b7b7b7;
}
</style>