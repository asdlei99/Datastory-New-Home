<template>
	<div id="user-case">
		<section-header zh="他们都在使用数说故事提升业绩" en="CUSTOMER CASE"></section-header>
		<div id="wrapper" class="clearfix">
			<div id="case-bd" class="clearfix">
				<div id="img-div">
					<img v-bind:src="currentData.companyImg" alt="customer case"/>
				</div>
				<div id="text-div">
					<div class="section">
						<h2 class="header header1">项目背景</h2>
						<p transition="fade" v-for="para in currentData.projectBg" v-html="para"></p>
					</div>
					<div class="section">
						<h2 class="header header2">解决方案</h2>
						<p transition="fade" v-for="para in currentData.solution" v-html="para"></p>
					</div>
					<div class="section">
						<h2 class="header header3">价值</h2>
						<p transition="fade" v-for="para in currentData.value" v-html="para"></p>
					</div>
				</div>
			</div>
			<div id="ctrl-bar" class="ie-ctrl-bar">
				<div class="ctrl-item yili ie-ctrl-item" data-case="yili" v-on:mouseover="toggleCustomer">
					<img src="../../assets/imgs/index/yili.png" alt="yili">
				</div>
				<div class="ctrl-item midea ie-ctrl-item" data-case="midea" v-on:mouseover="toggleCustomer">
					<img src="../../assets/imgs/index/midea.png" alt="midea">
				</div>
				<div class="ctrl-item tencent ie-ctrl-item" data-case="tencent" v-on:mouseover="toggleCustomer">
					<img src="../../assets/imgs/index/tencent.png" alt="tencent">
				</div>
				<div class="ctrl-item pg ie-ctrl-item" data-case="pg" v-on:mouseover="toggleCustomer">
					<img src="../../assets/imgs/index/pg.png" alt="p&amp;g">
				</div>
				<div class="ctrl-item laf ie-ctrl-item" data-case="laf" v-on:mouseover="toggleCustomer">
					<img src="../../assets/imgs/index/laf.png" alt="laf">
				</div>
				<div class="ctrl-item kraftH ie-ctrl-item" data-case="kraftH" v-on:mouseover="toggleCustomer">
					<img src="../../assets/imgs/index/kraftH.png" alt="kraftH">
				</div>
				<div class="ctrl-item colgate ie-ctrl-item" data-case="colgate" v-on:mouseover="toggleCustomer">
					<img src="../../assets/imgs/index/colgate.png" alt="colgate">
				</div>
				<div class="ctrl-item lenovo ie-ctrl-item" data-case="lenovo" v-on:mouseover="toggleCustomer">
					<img src="../../assets/imgs/index/lenovo.png" alt="lenovo">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import SectionHeader from '../SectionHeaderDark'
	export default {
		ready: function() {
			var self = this;
			self.currentData = self.customerData.yili;

			var adjustCtrlItem = function() {
				var ctrlItems = $('.ctrl-item');
				ctrlItems = Array.from(ctrlItems);
				ctrlItems.forEach(function(item) {
					var w = $(item).width();
					var h = (w / 243.0) * 202;
					h = (h === 0) ? 120 : h;
					$(item).height(h);
				});
			};
			adjustCtrlItem();
			$(window).resize(function() {
				adjustCtrlItem();
			});
			$(document).ready(function() {
				adjustCtrlItem();
			});
		},
		data: function() {
			return {
				currentData: {},
				customerData: {
					yili: {
						name: 'yili',
						companyImg: require('../../assets/imgs/index/yiliCompany.png'),
						projectBg: [
							"作为全球领先的食品企业，伊利希望通过倾听消费者的心声，洞察市场机会，了解竞品动态，为公司的媒介投入、渠道管理、品牌建设等多种经营决策提供指导。"
						],
						solution: [
							"- 扫描全网，找到提及伊利、竞品、媒介资源、渠道终端的高价值声量；",
							"- 科学建模，设定与企业经营高相关度的监测指标；",
							"- 定制平台，让客户每一个相关员工能实时聆听消费者心声，快速作出响应。"
						],
						value: [
							"该解决方案为伊利累积了数亿级的数据，为不同事业部、不同业务部门所用，已成为企业最大的消费者洞察平台。"
						]
					},
					midea: {
						name: 'midea',
						companyImg: require('../../assets/imgs/index/mideaCompany.png'),
						projectBg: [
							"美的集团希望打造企业数据监控平台，对行业与自身产品进行全方位数据监测与分析。"
						],
						solution: [
							"- 采集国内外大型电商平台与网络社群的产品数据，包括销量、价格、评价等；",
							"- 建立空调、热水器等30个品类的口碑分析模型；",
							"- 搭建美的私有数据平台，提供持续实时的监控和分析。"
						],
						value: [
							"帮助美的梳理打通内外部数据，实现数据在行业的深度应用；",
							"帮助美的掌握竞品与行业动态，用数据支撑营销决策。"
						]
					},
					tencent: {
						name: 'tencent',
						companyImg: require('../../assets/imgs/index/tencentCompany.png'),
						projectBg: [
							"腾讯某部门长期投入品牌建设与多元化的新媒体营销，对如何系统化地监测及有效评估品牌及市场投入提出了要求。"
						],
						solution: [
							"- 提供定制平台与指数化分析，实时监测客户与竞品的线上社交平台数据；",
							"- 跟踪监测线上营销活动效果，协助客户建立线上传播项目ROI模型；",
							"- 通过数据与洞察的累积，帮助客户建立品牌数字资产的监测体系，为建立预测预警模块奠定基础。"
						],
						value: [
							"该解决方案为腾讯构建以监测-评估-洞察-决策-驱动为导向的信息生态系统，以支撑及不断完善自身的品牌数字资产体系。数字化营销提供科学客观的效果评估，指导品牌及营销策略规划。"
						]
					},
					pg: {
						name: 'pg',
						companyImg: require('../../assets/imgs/index/pgCompany.png'),
						projectBg: [
							"P&G希望利用互联网用户评价数据进行社群聆听，监控合作零售商店的网络口碑。"
						],
						solution: [
							"- 锁定主要数据源，采集100多万条消费者购物数据；",
							"- 利用自然语言处理技术，建立购物环境、服务、价格等60多个口碑模型，并对用户评价进行量化；",
							"- 对50多个零售渠道进行持续监控，提供DashBoard与周期性分析报告。"
						],
						value: [
							"帮助P&G的市场调研从线下向线上转型，首次实现完整的渠道策略线上数据评估；",
							"帮助P&G更好了解用户反馈，完整地掌握KA渠道整体情况；",
							"帮助P&G更好地进行渠道评级体系调整，更合理地规划产品促销活动。"
						]
					},
					laf: {
						name: 'laf',
						companyImg: require('../../assets/imgs/index/lafCompany.png'),
						projectBg: [
							"拉芳希望全面、快速掌握自身品牌与产品舆情信息，快速响应消费者意见。"
						],
						solution: [
							"- 锁定双微平台、论坛、电商等全网数据源，采集拉芳及旗下品牌的网络声音；",
							"- 由系统对信息自动分类，由人工分拣标注热点、负面，实时上报重要舆情信息；",
							"- 周期性提交数据日报、周报、月报。"
						],
						value: [
							"帮助拉芳7*24小时实时监测舆情信息，用数据支持快速负面处理和危机预警；",
							"帮助拉芳实现全网声量与情感值监测，为打造品牌形象提供数据支持。"
						]
					},
					kraftH: {
						name: 'kraftH',
						companyImg: require('../../assets/imgs/index/kraftHCompany.png'),
						projectBg: [
							"互联网在中国的高速发展，不仅带动客户行业的电商业务，更对舆论公关工作提出更高要求。"
						],
						solution: [
							"- 针对新闻媒体、社交平台、母婴网站、电商平台等建立舆情监测，并根据客户要求设置相应的分析模块，及时将舆情与客户反馈转化成客户关注的指标；",
							"- 定期对客户品牌及竞品进行品牌健康度分析、从不同的维度分析消费者（对品牌）情感变化及驱动；",
							"- 对大型营销活动进行效果监测与分析，帮助企业从中获取成功经验与失败教训，提升线上营销有效性。"
						],
						value: [
							"该解决方案为卡夫亨氏更及时更智能掌握行业及品牌相关的舆情舆论信息，定期分析电商的客户反馈，为公关部、品牌部、乃至市场研究部门的日常工作提供实时有效的洞察。"
						]
					},
					colgate: {
						name: 'colgate',
						companyImg: require('../../assets/imgs/index/colgateCompany.png'),
						projectBg: [
							"Colgate亚太区希望通过各大主流社会化媒体平台上的UGC聆听和研究，洞察消费者特征和品牌构成之间的关系。"
						],
						solution: [
							"- 扫描全网，获取各类新闻、论坛、问答、贴吧及双微等数据，作为用户及品牌洞察的数据基础；",
							"- 结合行业及品牌特征，构建各类研究主题，利用高灵活度和延展性的非结构化数据BI，实现实时洞察。"
						],
						value: [
							"系统性的评估品牌和产品口碑，准确的了解用户特征和动态；",
							"通过数据和用户洞察，为品牌构成和数据传递提供更多可能。"
						]
					},
					lenovo: {
						name: 'lenovo',
						companyImg: require('../../assets/imgs/index/lenovoCompany.png'),
						projectBg: [
							"联想希望对集团众多Social平台账号进行统一规划管理，全面监测Social平台运营情况。"
						],
						solution: [
							"- 对微博账号矩阵的运营数据进行监控，指标包括真粉数、短链点击量、增长趋势、粉丝分析等；",
							"- 对微信账号矩阵的运营数据进行监控，指标包括文章数、阅读数、点赞数、质量指数、影响力等；",
							"- 对营销活动、热点事件的声量、话题、参与用户等进行监测与分析。"
						],
						value: [
							"帮助联想掌握旗下品牌双微的运营情况，提供KPI考核数据支撑；",
							"帮助联想实时掌握营销活动效果，为活动优化提供数据支持。"
						]
					}
				}
			}
		},
		methods: {
			toggleCustomer: function(e) {
				var target = e.target;
				if (target.nodeName.toLowerCase() == 'img') {
					target = target.parentNode;
				}
				var customer = target.getAttribute('data-case');

				if (this.customerData[customer] != undefined) {
					this.currentData = this.customerData[customer];
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
	.fade-transition {
		transition: all .6s;
	}
	.fade-enter {
		display: block;
		opacity: 0;
		// padding-left: 10px;
	}
	.fade-leave {
		display: none;
	}

	#user-case {
		width: 100%;
		font-size: 16px;
		display: none\9;
		#wrapper {
			background-color: rgba(0,0,0,0.05);
			#case-bd {
				height: auto;
				#img-div {
					width: 44%;
					float: left;
					img {
						width: 100%;
						max-width: 100%;
						display: block;
					}
				}
				#text-div {
					width: 40%;
					min-height: 520px;
					padding: 10px;
					margin-left: 50px;
					float: left;
					.section {
						margin-bottom: 30px;
						.header {
							border-radius: 50px;
							width: 150px;
							padding: 8px;
							margin: 10px 0;
							text-align: center;
							font-size: 28px;
							color: #fff;
						}
						.header1 {
							background-color: #49a3e5;
						}
						.header2 {
							background-color: #ea7e33;
						}
						.header3 {
							width: 120px;
							background-color: #f8c739;
						}
						p {
							color: #6d7072;
							margin: 0;
							line-height: 25px;
							font-size: 18px;
						}
					}
				}
				@media screen and (max-width: 1600px) {
					#text-div {
						width: 47%;
						min-height: 300px;
						padding: 0;
						margin-left: 30px;
						.section {
							margin-bottom: 20px;
							.header {
								font-size: 20px;
								width: 110px;
							}
							.header3 {
								width: 80px;
							}
							p {
								font-size: 15px;
							}
						}
					}
					#ctrl-bar {
						padding-top: 20px;
					}
				}
			}
			#ctrl-bar {
				width: 100%;
				padding-top: 30px;
				overflow: visible;
				@include flex-center;
				.ctrl-item {
					cursor: pointer;
					width: 12.5%;
					background-size: cover;
					background-position: center center;
					background-repeat: no-repeat;
					position: relative;
					overflow: hidden;
					@include transition(transform .2s);
				}
				.ctrl-item.yili {
					background-image: url('../../assets/imgs/index/yili.jpg');
				}
				.ctrl-item.midea {
					background-image: url('../../assets/imgs/index/mideaGray.png');
				}
				.ctrl-item.tencent {
					background-image: url('../../assets/imgs/index/tencent.jpg');
				}
				.ctrl-item.pg {
					background-image: url('../../assets/imgs/index/pg.jpg');
				}
				.ctrl-item.laf {
					background-image: url('../../assets/imgs/index/laf.jpg');
				}
				.ctrl-item.kraftH {
					background-image: url('../../assets/imgs/index/kraftH.jpg');
				}
				.ctrl-item.colgate {
					background-image: url('../../assets/imgs/index/colgate.jpg');
				}
				.ctrl-item.lenovo {
					background-image: url('../../assets/imgs/index/lenovo.jpg');
				}
				.ctrl-item img {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					margin: auto;
					width: 60%;
					height: auto;
				}
				.ctrl-item:hover {
					@include transform(scale(1.1 ,1.1));
					background: #5c77c8;
					z-index: 100;
				}
			}
		}
	}


	/* IE HACK */
	#user-case {
		#wrapper {
			#ctrl-bar.ie-ctrl-bar {
				// min-height: 200px;
				width: 100%\9;
				letter-spacing: -10px\9;
				.ie-ctrl-item {
					display: inline-block\9;
					vertical-align: middle\9;
					letter-spacing: normal\9;
				}
			}
		}
	}
	
</style>