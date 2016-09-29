<template>
<div>
<div class="curtain">
	<!-- <img class="curtain_wall" src="../assets/imgs/report/report.png"></img> -->
	<div class="curtain_font">
		<div class="curtain_font-wrap">
			<div class="curtain_font__big">
				<p class="curtain_font__cn">数说报告</p>
				<p class="curtain_font__en">REPORT</p>
			</div>
		</div>
	</div>
</div>
<div class="report-wrap">
	<div class="report-sidebar">
		<ul class="report-sidebar_list">
			<li @click="switchReport('run')" :class="{ 'report-sidebar_list-item__active': currReportType === 'run' }" class="report-sidebar_list-item">
				<span>运营干货</span>
			</li>
			<li @click="switchReport('fun')" :class="{ 'report-sidebar_list-item__active': currReportType === 'fun' }" class="report-sidebar_list-item">
				<span>娱乐报告</span>
			</li>
			<li @click="switchReport('mall')" :class="{ 'report-sidebar_list-item__active': currReportType === 'mall' }" class="report-sidebar_list-item">
				<span>电商报告</span>
			</li>
			<li @click="switchReport('baby')" :class="{ 'report-sidebar_list-item__active': currReportType === 'baby' }" class="report-sidebar_list-item">
				<span>母婴报告</span>
			</li>
			<li @click="switchReport('other')" :class="{ 'report-sidebar_list-item__active': currReportType === 'other' }" class="report-sidebar_list-item">
				<span>其他报告</span>
			</li>
			
		</ul>
	</div>

	<div class="search-wrap clearfix">
		<div class="search-input clearfix">
			<input v-model="searchReportTxt" type="text" name="search">
			<div class="search-btn">
				<img src="../assets/imgs/report/search.png">
			</div>
		</div>
	</div>

	<ul class="report-list">
		<li v-for="report in currReport.data" class="report-info">
			<div class="report-info_date-wrap clearfix">
				<div class="report-info_date">
					<span class="report-info_date-day" v-text="report.date.substring(8, 10)"></span>{{ report.date.substring(0, 7) }}
				</div>
			</div>
			<div class="report-info_main clearfix">
				<div class="report-info_content">
					<h1 class="report-info_title">
						<a :href="report.url" target="_blank" v-text="report.title"></a>
					</h1>
					<p class="report-info_txt" v-text="report.content"></p>
				</div>
				<div class="report-info_cover">
					<img :src="report.cover">
				</div>
			</div>
		</li>
	</ul>
</div>
<div v-if="sizeLength < currReport_.data.length && searchReportTxt.length === 0" @click="loadMoreReport()" class="report-load-more">查看更多</div>
<site-footer></site-footer>
</div>
</template>

<script>
import SiteFooter from '../components/SiteFooter'

var vueData = {
	PERSIZE: 6,
	searchReportTxt: '',
	currReportType: 'run',
	currReport: {
		type: 'none',
		data: []
	},
	currReport_: {
		type: 'none',
		data: []
	},
	sizeLength: 0,
	reports: [{
		type: 'baby',
		data: [{
			date: '2016-07-04',
			cover: require('../assets/imgs/cover/2016-07-04.jpg'),
			title: '数说防蚊丨宝宝夏季防蚊大比拼，宝爸宝妈来接招！',
			url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651373963&idx=1&sn=91379a6a744ad4c75a8044d88a569165',
			content: '夏天，蚊子又出来“作恶”了。被叮不仅瘙痒难受，还可能染上恶性疾病的风险，如登革热等。宝宝细皮柔嫩特容易招惹蚊子，宝爸宝妈对此操碎了心。为此，数说君收集了微博、电商等网站上的海量数据，给大家总结了宝爸宝妈们的防蚊经验，以及各类防蚊产品的差异。'
		}, {
			date: '2016-03-25',
			cover: require('../assets/imgs/cover/2016-03-25.jpg'),
			title: '2015婴儿辅食消费市场研究报告',
			url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=402733906&idx=1&sn=d0e9dab2aca40a107eae7c2d858d87cd',
			content: '大多数宝宝会在第4个月开始吃辅食；嘉宝是被妈妈们提及宝宝辅食的品牌top1'
		}, {
			date: '2015-11-20',
			cover: require('../assets/imgs/cover/2015-11-20.jpg'),
			title: '一分钟，教你看懂准妈妈的日常生活',
			url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=400399354&idx=1&sn=3b403e9c0fd32e4ed9c328d128eaa10a',
			content: '怀孕后，准妈妈的身体状况和生活习惯都发生了什么改变，数说故事用大数据告诉你准妈妈的日常生活。'
		}]
	}, {
		type: 'fun',
		data: [{
				date: '2016-08-16',
				cover: require('../assets/imgs/cover/2016-08-16.jpg'),
				title: '除了#晶刚发狗粮#，看《极速前进》如何借力奥运冲出重围',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651374293&idx=1&sn=19b5ab7faf0089998260faf55e172666',
				content: '2016年电视体育综艺节目齐齐发力助推奥运年，近20档体育综艺节目扎堆。《极速前进》以节目自身的奥运基因实现口碑与收视双赢。今天，数说故事为你还原《极速前进》联姻奥运背后的数据奥秘。'
			}, {
				date: '2016-08-15',
				cover: require('../assets/imgs/cover/2016-08-15.jpg'),
				title: '#宝马离婚#爆料可能有假，但这些数据都是真的',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651374274&idx=1&sn=c7b5063108739c0b2225776b32bc4ad4',
				content: '8月14号凌晨娱乐圈砸下深夜炸弹。王宝强微博发布500字左右的离婚声明，短短半个小时留言超过20万，热度直逼长时间占据话题榜首的里约奥运会，让我们通过大数据来对这个事件进行分析。'
			}, {
				date: '2016-06-06',
				cover: require('../assets/imgs/cover/2016-06-06.jpg'),
				title: '数说粉丝丨哪个明星是最强粉丝收割机？',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651373861&idx=1&sn=c228d2ce2c0fc7d4ace9a9968c590769',
				content: '本文选取微博平台粉丝数最多的100位热门明星，根据不同属性的粉丝在其热门明星粉丝中的占比，判断热门明星的粉丝偏向性，并对各属性排行榜第一的明星粉丝进行分析。'
			}, {
				date: '2016-04-01',
				cover: require('../assets/imgs/cover/2016-04-01.jpg'),
				title: '柳岩发微博道歉，还有天理吗？！',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=402808584&idx=1&sn=853b7d39b084f4e47c53edf0c932fb14',
				content: '谁最想成为柳岩的护花使者'
			}, {
				date: '2015-10-11',
				cover: require('../assets/imgs/cover/2015-10-11.jpg'),
				title: '数据告诉你：《夏洛特烦恼》是如何逆袭《港囧》',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=207968348&idx=1&sn=111df41070fe2230829333203dff9fe9',
				content: '电影预测《港囧》破14亿！！挺准滴有木有~现在我们用数据分析”夏洛“是如何“无烦恼“~~'
			}, {
				date: '2015-09-26',
				cover: require('../assets/imgs/cover/2015-09-26.jpg'),
				title: '大数据预测：港囧票房14亿！',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=207846280&idx=1&sn=589e6967da60b92e65e967186806fe92',
				content: '《捉妖记》之后，国庆华语片能否再登票房新高？《港囧》《九层妖塔》《解救吾先生》《夏洛特烦恼》《第三种爱情》，谁能领跑国庆档？让数据告诉你！'
			}]
	}, {
		type: 'mall',
		data: [{
			date: '2015-11-12',
			cover: require('../assets/imgs/cover/2015-11-12.jpg'),
			title: '双11网络购车节解读',
			url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=400293791&idx=1&sn=527467472c7fab022744553b2bc896d5',
			content: '猫狗大战的购物狂欢节正如火如荼，那另一边厢的汽车电商战场如何呢？让我们用数据来分析一下他们的军情吧。'
		}, {
			date: '2015-11-10',
			cover: require('../assets/imgs/cover/2015-11-10.jpg'),
			title: '【数据抢先知】2015年双十一女装热销品牌：韩都衣舍得第一',
			url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=400273901&idx=1&sn=31d64062273b43f0f48c12e5a83655ab',
			content: '那么今年双十一女装的热销品牌会是谁呢？小编通过品牌筛选、指标分析、预测结果，大胆预测：韩都衣舍得第一。'
		}]
	}, {
		type: 'other',
		data: [{
				date: '2016-08-22',
				cover: require('../assets/imgs/cover/2016-08-22.jpg'),
				title: '在美国干掉Adidas的UA：黑马逆袭靠超级IP？大数据告诉你如何玩！',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651374365&idx=1&sn=0cc3557bda83a0deb1e5600ef153bf0b',
				content: '2014年，作为最大的黑马，仅有18年历史的新锐品牌Under Armour  (下文简称 UA) 的销售额超越 Adidas。在中国这个全新的战场上，它的动作仍旧值得我们关注。数说故事将从大数据角度给大家洞察一个新贵体育品牌的商业运营。'
			}, {
				date: '2016-08-19',
				cover: require('../assets/imgs/cover/2016-08-19.jpg'),
				title: '数说奥运|仅6.4%青少年观看体操，无金可夺或有道理可循',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651374319&idx=1&sn=72638eac9d97027fd7954e7ff630b0b4',
				content: '北京奥运会上，中国体操队拿到9金，宣告一个王朝的诞生。伦敦也拿到4金，如今1银难求，创造了32年来最差战绩。为何金牌之师却无金可夺？中国体操正面临前所未有的挑战，不仅仅是外部压分的问题，内部选手青黄不接也是一个巨大的隐患。'
			}, {
				date: '2016-08-13',
				cover: require('../assets/imgs/cover/2016-08-13.jpg'),
				title: '未进决赛，孙杨回归1500米王者之位道阻且长',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651374254&idx=1&sn=4bebc61bb3cf47bb1ac67ccd3a8f0260',
				content: '里约奥运会上，卫冕冠军孙杨在1500米比赛开始前感冒，影响了状态，最终在预赛中发挥不佳无缘决赛。以中长距离起家的孙杨要在自己的代表项目1500米上回归王者地位，未来仍有不小的挑战。'
			}, {
				date: '2016-08-09',
				cover: require('../assets/imgs/cover/2016-08-09.jpg'),
				title: '七夕爱“运动”|人均43只套套的里约奥运终于壕了一把',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651374225&idx=1&sn=2e1780eae9e9857c80ef8c2122adb883',
				content: '性已经是奥运会不可避免的话题。据说每届奥运会都会消耗大量的避孕套，而主办方也会给运动员们发放免费的避孕套。虽然里约奥运面临安全、寨卡病毒、水污染等诸多棘手的问题，但是里约决定在避孕套数量上打一场翻身仗！'
			}, {
				date: '2016-08-08',
				cover: require('../assets/imgs/cover/2016-08-08.jpg'),
				title: '数说奥运|里约开幕式热点数据分析报告',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651374214&idx=1&sn=0616f20fb77aad021ee9efec20c78c5f',
				content: '尽管前期历经了全民大吐槽，但里约奥运开幕式还是惊艳了世界一把。巴西人用一种素面朝天的姿态，用独具南美风情的表演，和无处不在的环保理念，讲述了自己的故事，也为观众带来史上最纯粹、最简单和最快乐的开幕式。今天数说故事为你展示里约奥运开幕式。'
			}, {
				date: '2016-08-05',
				cover: require('../assets/imgs/cover/2016-08-05.jpg'),
				title: '奥运数据π|“白菜价”里约开幕式就靠这6大精彩看点逆袭！',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651374170&idx=1&sn=0c9d60feaf8e806ee42ec9103915bfbc',
				content: '四年一次的奥运盛会即将在热情的桑巴之城巴西里约拉开帷幕。开幕式历来是奥运会的重头戏，作为文化与视觉的饕餮飨宴，是万众瞩目的焦点。近来巴西经济较为低迷，开幕式也勒紧裤腰带缩减了预算，这样省钱的里约奥运会开幕式还有何是值得一探究竟的呢？'
			}, {
				date: '2016-08-01',
				cover: require('../assets/imgs/cover/2016-08-01.jpg'),
				title: '数说运动 | 大数据带你了解马拉松“追风少年”',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651374123&idx=1&sn=2979f1a5a619bb68132fd4fd1f1aa277',
				content: '近年来，“马拉松热”席卷全国。“马拉松热”持续升温最为显著的表现就是马拉松吸引了越来越多普通人加入跑者行列。今天，数说故事为你全方位展示马拉松跑者们的人群画像分析。'
			}, {
				date: '2016-07-26',
				cover: require('../assets/imgs/cover/2016-07-26.jpg'),
				title: '数据视角丨腾讯体育携手数说故事解读里约奥运',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651374042&idx=1&sn=c759ec2b10e512112704dc9e6d293dc5',
				content: '近日，腾讯体育携手数说故事联合发布《里约奥运-中国90后全面上位》数据报告，在奥运热潮即将席卷全球的8月，数说故事也将以其专业的数据洞察能力联合腾讯体育持续发力，针对热门赛事、人群等发布一系列数据研究报告。'
			}, {
				date: '2016-07-25',
				cover: require('../assets/imgs/cover/2016-07-25.jpg'),
				title: '数说明星 | 大数据揭秘马拉松遇上明星的化学反应',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651374031&idx=1&sn=2a0f5b46108aecf375d4f1dafd9bc230',
				content: '随着公众健康意识的不断提高，跑步热潮席卷全国，民众对于跑步的热情空前高涨，马拉松赛事的数量也水涨船高。而在各大赛事中，无论是宣传助阵还是领跑参赛，都可看见明星踪影。今天数说故事就马拉松明星风潮进行全方位的数据分析。'
			}, {
				date: '2016-06-20',
				cover: require('../assets/imgs/cover/2016-06-20.jpg'),
				title: '数说新一代 | 85后们，你了解95后吗',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651373914&idx=1&sn=b2c85dcc218f5d39e1d593c247f23ed6',
				content: '85后，已然成为各行各业的职场中坚力量，肩负重任；而在未来几年，95后必将成为消费市场的主力群体。因此，数说故事就带着85后的亲们，跨越5个代沟来研究一下95后。'
			}, {
				date: '2016-03-07',
				cover: require('../assets/imgs/cover/2016-03-07.jpg'),
				title: '女生节，you can you bibi',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=402349335&idx=1&sn=70995ce782bed6f363f1da6a67c0654d',
				content: '这场女生节之争难道是萝莉和熟女之间的战争？真是彼之蜜糖我之砒霜。'
			}, {
				date: '2016-02-03',
				cover: require('../assets/imgs/cover/2016-02-03.jpg'),
				title: '【语言的艺术】除了表情包，还有“呵呵、哈哈”打败你',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=401393202&idx=1&sn=f4aefa6af955d1c14902099f5e41297a',
				content: '翻脸比翻书还快：在喜欢说“呵呵”和“哈哈”的人群中，女性的占比都远远高于男性'
			}, {
				date: '2016-01-29',
				cover: require('../assets/imgs/cover/2016-01-29.jpg'),
				title: '【数说xiong罩】中国女性文胸消费洞察报告',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=401317364&idx=1&sn=aff15954b53b9cab28853923eacdab7e',
				content: '数据显示，七成中国女性文胸在B罩以上。所以，你拖后腿了吗？！'
			}, {
				date: '2016-01-22',
				cover: require('../assets/imgs/cover/2016-01-22.jpg'),
				title: '【数说妹子】 一分钟告诉你钱是怎么被败光的！',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=401264161&idx=1&sn=2e372cc586fb047793d49aaef9947632',
				content: '拥有佛像、人妖的泰国人气竟然超过了出产长腿欧巴的韩国，连有“樱花之都”和购物天堂之称的日本都败啦，更多消息点开文章告诉你'
			}, {
				date: '2016-01-14',
				cover: require('../assets/imgs/cover/2016-01-14.jpg'),
				title: '【数说堵车】逢节必堵，节日堵车记',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=401202510&idx=1&sn=6f9370a59c40a99c7b57025402f90b91',
				content: '【数说堵车】国庆和春节堵出新高度、北上广深堵车任性、女性是吐槽主力……'
			}, {
				date: '2015-12-11',
				cover: require('../assets/imgs/cover/2015-12-11.jpg'),
				title: '数据话吃：吃货生活大调查',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=400703424&idx=1&sn=06886745c6a95661600b054a7e7da597',
				content: '因为奉行“人是铁  饭是钢  一顿不吃饿得慌”的律令，吃货对美食有一种独特的向往和追求，这篇报告，让我们来聊聊吃货的那些事。'
			}, {
				date: '2015-11-30',
				cover: require('../assets/imgs/cover/2015-11-30.jpg'),
				title: '还在烦堵车？广州限行时间大猜想',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=400536084&idx=1&sn=1d5742a6eb85577fbc07e71e8690e808',
				content: '广州实在太！堵！了！告诉你广州限行时间大猜想'
			}, {
				date: '2015-11-13',
				cover: require('../assets/imgs/cover/2015-11-13.jpg'),
				title: '70、80、90人群特征洞察',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=400306951&idx=1&sn=581f163972e181e75e98822f0988b081',
				content: '俗话说“三年一小沟，五年一大沟”，那么年龄差距整整十年的70后、80后、90后又会有多大的差异呢？'
			}, {
				date: '2015-11-06',
				cover: require('../assets/imgs/cover/2015-11-06.jpg'),
				title: '大数据：哟哟，切克闹，二胎到底要不要！？',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=400230585&idx=1&sn=b330e8f161814f0ff0d27f3922c34a1f',
				content: '关于二胎，有多少人愿意生，又有多少人不愿意生？生不生的理由又是什么？这组大数据为你讲述背后的故事'
			}, {
				date: '2015-07-25',
				cover: require('../assets/imgs/cover/2015-07-25.jpg'),
				title: '拼车App 拼的到底是什么？',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=207257837&idx=1&sn=74d9d436b040bd2737f3daa505651dab',
				content: '6月1号，滴滴打车正式推出“滴滴顺风车”服务，拼车大战再次打响。那么拼车App拼的究竟是什么呢？'
			}, {
				date: '2015-07-10',
				cover: require('../assets/imgs/cover/2015-07-10.jpg'),
				title: '《我是路人甲》是鸡汤还是毒药？',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=207129301&idx=1&sn=feaa4e4a5adc045d56de9a9f202fecff',
				content: '作为一部零明星宣传的电影，开播三天究竟口碑如何，头三天观看这部电影的人又是怎样的一群人呢？'
			}, {
				date: '2015-07-06',
				cover: require('../assets/imgs/cover/2015-07-06.jpg'),
				title: '世界这么大，我想去看看——中国各地区旅游爱好者人群分析报告',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=207048377&idx=1&sn=70660ee3275e001fbc025a10e01ebbbf',
				content: '暑假又到了，总有种出走的心。同是旅游爱好者，各地区人群特征却是不一样的。世界这么大，我们应该多去看看！'
			}, {
				date: '2015-06-24',
				cover: require('../assets/imgs/cover/2015-06-24.jpg'),
				title: '【探究】“走私僵尸肉”事件背后隐藏着什么？',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=206563301&idx=1&sn=6491b9537e0bf8902a4e92e4d4d4d332',
				content: '通过对“走私僵尸肉”事件进行数据分析，探秘事件背后的隐藏的信息。'
			}]
	}, {
		type: 'run',
		data: [{
				date: '2016-07-18',
				cover: require('../assets/imgs/cover/2016-07-18.jpg'),
				title: '数说微博丨十张图解读微博旅游大号',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651374020&idx=1&sn=b87ed33398a51df8ea3973c860f5dd05',
				content: '近年来，国家旅游局专责推广旅游的部门，通过组织各种活动，增强人们对国家独特风土人情的了解，并吸引他们前来观光旅游，因此国家旅游局的重要性不言而喻，如何捕捉消费者的想法也成为它们考虑的事情之一。今天我们就澳大利亚微博运营情况进行分析解读。'
			}, {
				date: '2016-07-13',
				cover: require('../assets/imgs/cover/2016-07-13.jpg'),
				title: '独家数据 | 347万次浏览，33万次分享，大数据告诉你腾讯爆款H5《穿越故宫来看你》有多红',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651373989&idx=1&sn=b997bdc080252e241798631885f1a52b',
				content: '作为2016年下半年第一个爆火的H5，《穿越故宫来看你》堪称得上是一条现象级H5广告。作为腾讯指定数据监测服务商，数说故事对这次故宫H5的传播效果进行了全程监控。'
			}, {
				date: '2016-06-28',
				cover: require('../assets/imgs/cover/2016-06-28.jpg'),
				title: '数说揭秘 | 如何用“事件+明星”直播，创下300万观众？',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651373955&idx=1&sn=ba8549978062647c5125de1904f42fe5',
				content: '在戛纳电影节中，欧莱雅成功策划了“直播+明星+品牌”的营销新模式，利用李宇春的超级流量，创下了311万观看人数，1.6亿总点赞数以及72万总评论数的各项数据纪录。'
			}, {
				date: '2016-05-09',
				cover: require('../assets/imgs/cover/2016-05-09.jpg'),
				title: '2016年第一季度微信品牌公众号运营报告【下】',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651373757&idx=1&sn=8f7f346c7d712ea78025e02583e52d32',
				content: '这也许是最详细的2016第一季度微信品牌公众号运营情况，【手机、汽车、银行、美妆护肤】四大行业精彩内容大放送。'
			}, {
				date: '2016-05-03',
				cover: require('../assets/imgs/cover/2016-05-03.jpg'),
				title: '2016年第一季度微信品牌公众号运营报告',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=2651373748&idx=1&sn=3027834e6c08166165716903f89ab32d',
				content: '我们监测了游戏、汽车、手机等18个行业，4,783个账号,562,678篇文章。'
			}, {
				date: '2016-03-15',
				cover: require('../assets/imgs/cover/2016-03-15.jpg'),
				title: '315揭秘 | 数据曝光微信刷量黑幕',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=402420865&idx=1&sn=c5ee6107f8de1f14af6324bb4a14535e',
				content: '“微博照妖镜”曾红极一时，微信“照妖镜”又何时能够出现？'
			}, {
				date: '2016-03-10',
				cover: require('../assets/imgs/cover/2016-03-10.jpg'),
				title: '用H5做营销，必须回答的问题',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=402377204&idx=1&sn=f635873309523fc91d6873f14b7c877b',
				content: '【Simon阿文倾情推荐的】数说传播全方位解决H5广告效果监测问题，功能升级，免费奉献！'
			}, {
				date: '2016-03-04',
				cover: require('../assets/imgs/cover/2016-03-04.jpg'),
				title: '银行品牌微信公众号运营报告',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=402289597&idx=1&sn=fbafb6c6dc2856bbaf151b1c6c25ce30',
				content: '数说故事发布《银行品牌微信公众号运营报告》，为银行品牌公众号运营提供参考。'
			}, {
				date: '2016-01-07',
				cover: require('../assets/imgs/cover/2016-01-07.jpg'),
				title: '爆款H5是如何炼成的？',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=401154288&idx=1&sn=bc1e904b66eb80fc8f19851a71bdf5e3',
				content: 'H5应该加音乐吗？最重要的内容应该放在第几页？数说故事与MAKA联合发布H5洞察报告，为您揭秘爆款H5的成长之路。'
			}, {
				date: '2015-11-18',
				cover: require('../assets/imgs/cover/2015-11-18.jpg'),
				title: '【微信琅琊榜】观察3,485个品牌公众号后，我们发现？',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=400369210&idx=1&sn=fcdf5a28f1df66b3fde19e510c07eaa5',
				content: '品牌公众号是品牌与用户直接沟通的最有效的渠道之一，那么哪些行业的公众号覆盖率最广？哪些关键词对文章贡献率最大？来，这组数据告诉你想知道的秘密。'
			}, {
				date: '2015-06-23',
				cover: require('../assets/imgs/cover/2015-06-23.jpg'),
				title: '黑马文章大点评：如何提高微信文章的影响力？',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=206530112&idx=1&sn=0202fa2ca47e3524fb618971b0e211f8',
				content: '通过对5月份的微信黑马文章进行深入分析，为您揭秘一篇高影响力文章背后的秘密。'
			}, {
				date: '2015-06-19',
				cover: require('../assets/imgs/cover/2015-06-19.jpg'),
				title: '如何监测你的H5？数说传播带你走出H5传播盲区',
				url: 'http://mp.weixin.qq.com/s?__biz=MzA5ODM4NjM3OQ==&mid=206412446&idx=1&sn=ced7cabcccdeb3473957466f46e13d25',
				content: '想知道你的H5是否在朋友圈引起了尖叫？KOL又为传播推广提供了多大助力？数说传播SpreadStory为你揭开H5背后的数据秘密。'
			}]
		}
	]
};
export default {
	data: function() {
		return vueData;
	},
	watch: {
		'searchReportTxt': (val, oldVal) => {
			var reportItems = $('.report-list').find('li');
			for (let i = 0; i < reportItems.length; i++) {
				var cur = $(reportItems[i]);
				cur.css('display', 'none');

				let title = cur.find('.report-info_title a').html().trim() + '';
				let content = cur.find('.report-info_txt').html().trim() + '';
				val = '' + val;
				if ((title.indexOf(val) != -1) || (content.indexOf(val) != -1)) {
					cur.css('display', 'block');
				}
			}
		}
	},
	mounted: function() {

		var self = this;
		self.reports.forEach(function(report, i) {
			if (self.currReportType === report.type) {
				self.currReport_ = report;
				if (report.data.length > self.PERSIZE) {
					self.currReport.type = report.type
					self.currReport.data = report.data.slice(0, self.PERSIZE)
					self.sizeLength = self.PERSIZE
				} else {
					self.currReport.type = report.type;
					self.currReport.data = report.data;
				}
			}
		});
	},
	methods: {
		switchReport: function(reportType) {
			var self = this;
			self.reports.forEach(function(report, i) {
				if (report.type === reportType) {
					self.currReport_ = report;

					if (report.data.length > self.PERSIZE) {
						self.currReport.type = report.type;
						self.currReport.data = report.data.slice(0, self.PERSIZE);
						self.sizeLength = self.PERSIZE;
					} else {
						self.currReport.type = report.type;
						self.currReport.data = report.data;
					}
					self.currReportType = report.type;
				}
			});
		},
		loadMoreReport: function() {
			var self = this
			if (self.sizeLength < self.currReport_.data.length) {
				self.currReport.data = self.currReport_.data.slice(0, self.sizeLength + self.PERSIZE);
				self.sizeLength += self.PERSIZE;
			}
		}
	},
	components: {
		SiteFooter
	}
}
</script>

<style lang="scss">
.curtain {
	background: url(../assets/imgs/report/report.png) no-repeat;
	background-size: cover;
}

.report-wrap {
	position: relative;
	width: 1200px;
    margin: 0 auto;
}
//
.report-sidebar {
	top: 85px;
    position: absolute;
    left: 0;
}
.report-sidebar_list {
	margin: 0;
    padding: 0;
    list-style-type: none;
}
.report-sidebar_list-item {
	position: relative;
	cursor: pointer;
	width: 115px;
    font-size: 18px;
    color: #5b5b5b;
    padding: 23px 10px;
    background: #f7f7f7;
    line-height: 1;
    margin-bottom: 5px;
}
.report-sidebar_list-item__active, .report-sidebar_list-item:hover {
	background: #416ed8;
	color: #fff;
	&:before {
		content: '';
		position: absolute;
		right: 13px;
		top: 26px;
		width: 0;
		height: 0;
		font-size: 0;
		line-height: 0;
		border: {
			left: 6px solid #fff;
			top: 6px solid transparent;
			right: 6px solid transparent;
			bottom: 6px solid transparent;
		}
	}
}
//
.search-input {
	float: right;
	margin: 25px 0 26px 0;
	border: 1px solid #dbdbdb;
    border-radius: 16px;
    overflow: hidden;
    input {
    	float: left;
	    border: none;
	    outline: none;
	    padding: 7px;
	    color: #dbdbdb;
    }
}
.search-btn {
	float: right;
    padding: 7px 9px;
    background: #f2f2f2;
    border-left: 1px solid #dbdbdb;
}
//
.report-list {
	margin: 0 0 0 162px;
    padding: 0;
    list-style-type: none;
    min-height: 500px;
}
.report-info {
	border-top: 1px solid #dcdcdc;
	&:last-child {
		border-bottom: 1px solid #dcdcdc;
	}
}
.report-info_date {
	color: #8f8f8f;
    font-size: 14px;
    padding: 0 10px;
	float: left;
    background: #e7e7e7;
    height: 32px;
    line-height: 32px;
}
.report-info_date-day {
	font-size: 20px;
    color: #353535;
    margin-right: 10px;
    position: relative;
    top: 2px;
}
.report-info_title {
	font-size: 24px;
    margin: 35px 0 18px 0;
    a {
    	line-height: 1;	
    	&:hover, &:active, &:link, &:visited {
    		color: #444;
    		text-decoration: none;
    	}
    	&:hover {
    		color: #a2be1a;
    	}
    }
}
.report-info_txt {
	font-size: 16px;
    line-height: 32px;
    color: #5b5b5b;
    // margin-bottom: 45px;
}
.report-info_main {
	padding-bottom: 45px;
}
.report-info_content {
	float: left;
    min-width: 200px;
    max-width: 760px;
}
.report-info_cover {
	float: right;
    width: 230px;
    height: 130px;
    margin: 23px 0 0 48px;
    img {
    	width: 100%;
    	height: 100%;
    }
}
//
.report-load-more {
    width: 134px;
    height: 42px;
    cursor: pointer;
    line-height: 42px;
    text-align: center;
    margin: 55px auto 57px auto;
    padding-right: 18px;
    color: #fff;
    font-size: 14px;
    background: #a2be1a;
    border-radius: 25px;
    position: relative;
    &:after {
		content: '';
		position: absolute;
		top: 13px;
		right: 28px;
		width: 10px;
		height: 10px;
		background-color: transparent;
		transform: rotate(-135deg);
		-ms-transform: rotate(-135deg);
		-webkit-transform: rotate(-135deg);
		-moz-transform: rotate(-135deg);
		-o-transform: rotate(-135deg);
		border: {
			left: 1px solid #fff;
			top: 1px solid #fff;
		}
    }
}
</style>