<template>
	<div id="tech-adv">
		<section-header zh="技术优势" en="TECHNICAL ADVANTAGE"></section-header>
		<div id="tech-bd" class="clearfix">
			<div id="content-div">
				<div class="section" v-for="item in content" v-if="$index == current">
					<div class="img-div">
						<img v-bind:src="item.imgSrc" v-bind:alt="item.imgAlt">
					</div>
					<ul>
						<li v-for="li in item.list" v-html="li"></li>
					</ul>
				</div>
			</div>
			<div id="ctrl-div">
				<ul>
					<li v-on:mouseover="toggleContent" data-id="0">
						<div class="ctrl-circle"></div>
						<span>数据采集</span>
					</li>
					<li v-on:mouseover="toggleContent" data-id="1">
						<div class="ctrl-circle"></div>
						<span>数据处理</span>
					</li>
					<li v-on:mouseover="toggleContent" data-id="2">
						<div class="ctrl-circle"></div>
						<span>数据挖掘</span>
					</li>
					<li v-on:mouseover="toggleContent" data-id="3">
						<div class="ctrl-circle"></div>
						<span>可视化分析</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import SectionHeader from '../SectionHeaderLight'
	export default {
		ready: function() {
			document.getElementById('ctrl-div').getElementsByTagName('li')[0].classList.add('active');
		},
		data: function() {
			return {
				content: [
					{
						'imgSrc': require('../../assets/imgs/index/techAdv1.png'),
						'imgAlt': '数据采集',
						'list': [
							'<span>-</span> 覆盖全面，占90%网络声量',
							'<span>-</span> 支持分钟级可配置采集频率',
							'<span>-</span> 完备服务监控、重试机制、数据校验',
							'<span>-</span> 地区、时间、内容、热度等细粒子字段'
						]
					},
					{
						'imgSrc': require('../../assets/imgs/index/techAdv2.png'),
						'imgAlt': '数据处理',
						'list': [
							'<span>-</span> 过滤水军、广告，独家微博僵尸粉识别',
							'<span>-</span> 识别品牌、品类、人物、地点等信息实体',
							'<span>-</span> 判断句子的情感正负面，准确率达90%',
							'<span>-</span> 对海量文本内容数据进行分类和聚类'
						]
					},
					{
						'imgSrc': require('../../assets/imgs/index/techAdv3.png'),
						'imgAlt': '数据挖掘',
						'list': [
							'<span>-</span> "主体-特征-情感"三元组，构建量化模型',
							'<span>-</span> 利用词向量模型，拓展词语的相近词汇',
							'<span>-</span> 构建领域知识图谱，实现智能挖掘分析',
							'<span>-</span> 基于30万社会化标签多层次刻画用户画像'
						]
					},
					{
						'imgSrc': require('../../assets/imgs/index/techAdv4.png'),
						'imgAlt': '可视化分析',
						'list': [
							'<span>-</span> 一站式数据抓取、存储、处理、分析平台',
							'<span>-</span> 关键词快速定位和过滤文本数据进行透视分析',
							'<span>-</span> 将数据分析结果自定义组合成大屏仪表盘'
						]
					}
				],
				current: 0
			}
		},
		methods: {
			toggleContent: function(e) {
				e = e || window.event;
				var id, target;
				var ctrls = document.getElementById('ctrl-div').getElementsByTagName('li');
				ctrls = Array.prototype.slice.call(ctrls);

				var node_name = e.target.nodeName.toLowerCase();
				if (node_name == 'span' || node_name == 'div') {
					id = e.target.parentNode.getAttribute('data-id');
					target = e.target.parentNode;
				} else if (node_name == 'li') {
					id = e.target.getAttribute('data-id');
					target = e.target;
				} else {
					e.stopPropagation();
					return;
				}
				this.current = +id;
				ctrls.forEach(function(item) {
					if (item.classList) {
						if (item.classList.contains('active')) {
							item.classList.remove('active');
						}
					} else {
						item.className = "";
					}
				});
				if (target.classList) {
					target.classList.add('active');
				} else {
					target.className = "active";
				}
			}
		},
		components: {
			SectionHeader
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/util.scss';
	#tech-adv {
		width: 100%;
		background: url('../../assets/imgs/index/techAdvBg.jpg') no-repeat;
		background-size: cover;
		padding-bottom: 70px;
		#tech-bd {
			width: 75%;
			margin: 0 auto;
			position: relative;
			#content-div {
				background: #fff;
				padding: 20px;
				width: 60%;
				height: 300px;
				float: left;
				margin-top: 20px;
				margin-left: 8%;
				.section {
					@include flex-center;
					display: table\9;
					height: 100%;
					.img-div {
						width: 40%;
						display: table-cell\9;
						vertical-align: middle\9;
						img {
							width: 100%;
						}
					}
					ul {
						list-style: none;
						padding: 0;
						margin: 0;
						margin-left: 20px;

						display: table-cell\9;
						vertical-align: middle\9;
						padding-left: 20px;
						li {
							font-size: 18px;
							color: #5579db;
							padding: 5px;
							-webkit-font-smoothing: antialiased;
						}
					}
				}
			}
			@media screen and (max-width:1500px) {
				#content-div {
					.section {
						.img-div {
							width: 42%;
						}
						ul {
							margin-left: 5px;
							padding-left: 10px;
							li {
								font-size: 14px;
								padding: 7px 5px;
							}
						}
					}
				}
			}
			#ctrl-div {
				float: left;
				margin-left: 50px;
				ul {
					margin: 0;
					padding: 0;
					list-style: none;
					li {
						font-size: 25px;
						color: #fff;
						@include flex-center;
						justify-content: flex-start !important;

						display: table\9;
						margin: 40px 0;
						cursor: pointer;
						span {
							display: table-cell\9;
							vertical-align: middle\9;
						}
						.ctrl-circle {
							float: left;
							display: inline-block;
							padding: 4px;
							border: solid 3px #fff;
							border-radius: 50%;
							margin-right: 20px;
							position: relative;
							top: -10px\9;
							&:after {
								content: '';
								display: block;
								width: 1px;
								height: 35px;
								position: absolute;
								top: 250%;
								left: 4px;
								background-color: rgba(255, 255, 255, 0.5);
							}
						}
						&:hover .ctrl-circle {
							box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2);
						}
						&:before {
							content: '';
							display: block;
							border-left: solid 15px #fff;
							border-bottom: solid 10px transparent;
							border-top: solid 10px transparent;
							position: relative;
							left: -50px;
							opacity: 0;
						}
					}
					li.active {
						&:before {
							opacity: 1;						
						}
						.ctrl-circle {
							box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2);
						}
					}

					// hide the last dash line
					li:nth-last-child(1) {
						.ctrl-circle {
							&:after {
								display: none;
							}
						}
					}
				}
			}
		}
	}

</style>
