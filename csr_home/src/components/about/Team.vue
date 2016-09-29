<template>
	<div id="teamInfo" class="about-header about-header__intro">
		<h1 class="about-header_main">团队介绍</h1>
		<p class="about-header_slave">TEAM INTRODUCTION</p>
	</div>
	<div class="team">
		<div class="team_back">
			<img class="team_man-wall" src="../../assets/imgs/about/team.png">
		</div>
		<div class="team_intro-list-wrap">
			<ul class="team_intro-list">
				<li class="team_intro-item">
					<div class="team_intro-title">
						<p class="team_intro-title_main">数说故事</p>
						<p class="team_intro-title_slave">技术团队</p>
					</div>
					<div class="team_intro-main">
						<p>技术团队来自于腾讯、百度、华为、4399等知名互联网企业，秉承程序员的“工匠精神”，拥有丰富的研发管理以及产品商业化经验。分析团队来自于尼尔森、益普索、唯品会、威尔森咨询等知名企业，延续分析师的“严谨文化”，拥有强大的研究实力以及创新型的洞察能力。</p>
					</div>
				</li>
				<li class="team_intro-item">
					<div class="team_intro-title">
						<p class="team_intro-title_main">数说故事</p>
						<p class="team_intro-title_slave">核心研发团队</p>
					</div>
					<div class="team_intro-main">
						<p>核心研发团队超过100人，60%以上具有博士、硕士学位。团队长期从事自然语言处理和数据挖掘研究，具备强大的数据获取获取、工具产品能力以及商业洞察能力。团队成员拥有多项国内外技术专利，其中包括有2项美国和中国发明专利，16项软件著作，1项国家火炬计划立项，团队成员合计在国际著名会议和期刊上发表论文超过130篇。</p>
					</div>
				</li>
				<img class="team_cp-logo" src="../../assets/imgs/about/datastory-logo.png">
			</ul>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
.team {
	position: relative;
	background: #f5f8fa;
	margin-bottom: 124px;
}
.team_back {
	padding-top: 118px;
	overflow: hidden;
	
}
.team_cp-logo {
	position: absolute;
	left: 0;
	top: -210px;
}
.team_man-wall {
	width: 1920px;
	height: 681px;
}
//
.team_intro-list-wrap {
	width: 100%;
	position: absolute;
	top: 240px;
}
.team_intro-list {
	position: relative;
	width: 1200px;
	margin: 0;
	padding: 0;
	margin: 0 auto;
	&:before {
		content: '';
		position: absolute;
		left: 0;
		top: -258px;
		width: 32px;
		height: 32px;
		background: #f5f8fa;
		transform: rotate(45deg);
	}
}
.team_intro-item {
	position: relative;
	margin-bottom: 54px;
	// &:before {
	// 	content: '';
	//     position: absolute;
	//     left: 221px;
	//     top: 50%;
	//     margin-top: -25px;
	//     width: 50px;
	//     height: 50px;
	//     // background: rgba(255, 255, 255, 0.1);
	//     border: {
	//     	left: 1px dashed #9399a2;
	//     	top: 1px dashed transparent;
	//     	right: 1px dashed transparent;
	//     	bottom: 1px dashed #9399a2;
	//     }
	//     transform: rotate(45deg);
	//     z-index: 10;
	// }
}
.team_intro-title {
	position: absolute;
    left: 40px;
    top: 50%;
    color: #fff;
}
.team_intro-title_main, .team_intro-title_slave {
	line-height: 1;
    position: relative;
    top: -40px;
}
.team_intro-title_main {
    font-size: 30px;	
}
.team_intro-title_slave {
    font-size: 30px;
    font-weight: bold;	
}
.team_intro-main {
    color: #fff;
    margin-left: 246px;
    padding: 26px 35px 24px 47px;
    border: 1px dashed #9399a2;
    background: rgba(255,255,255,.1);
    font-size: 20px;
    line-height: 1.6;	
}
</style>
