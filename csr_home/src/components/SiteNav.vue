<!-- <template>
	<div id="site-nav" class="clearfix">
		<div id="logo-div">
			<img src="../assets/imgs/index/logo.png" alt="logo" id="logo"/>
		</div>
		<div id="nav">
			<ul>
				<li v-link="{ name: 'index' }">
					<span>首页</span>
					<span>HOME</span>
				</li>
				<li>
					<span>产品与方案</span>
					<span>PRODUCT AND SOLUTION</span>
				</li>
				<li>
					<span>数说报告</span>
					<span>REPORT</span>
				</li>
				<li v-link="{ name: 'about' }">
					<span>关于我们</span>
					<span>ABOUT US</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
	$nav_h: 80px;
	#site-nav {
		padding: 0 15%;
		min-width: 1024px;
		width: 100%;
		height: $nav_h;
		#logo-div {
			float: left;
			padding: ($nav_h - 62px) / 2 0;
		}
		#nav {
			float: right;
			width: 60%;
			ul {
				list-style: none;
				margin: 0;
				padding: 0;
				display: flex;
				display: -webkit-flex;
				flex-direction: row;
				justify-content: center;
				align-items: stretch;
				width: 100%;
				height: $nav_h;
				li {
					display: block;
					width: 24%;
					height: 100%;
					display: flex;
					display: -webkit-flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					box-sizing: border-box;
					border-bottom: solid 5px transparent;
					span:first-child {
						font-size: 16px;
					}
					span {
						text-align: center;
						font-size: 9.5px;
					}
					&:hover {
						cursor: pointer;
						border-bottom: solid 5px #426cd8;
						color: #426cd8;
						background: #eaeaef;
					}
				}
			}
		}
	}
</style> -->