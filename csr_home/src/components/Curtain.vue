<template>
	<div class="curtain">
		<div class="curtain_font">
			<div class="curtain_font-wrap">
				<div class="curtain_font__big">
					<p class="curtain_font__cn">关于我们</p>
					<p class="curtain_font__en">ABOUT US</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	ready: function() {
		// using js to control img responsive size
		// var w = $(document.body).width();
		// var h = w / 1920 * 500;
		// $('.curtain_wall').css('height', h + 'px');
	}
}
</script>

<style lang="scss">
.curtain {
	position: relative;
	overflow: hidden;
	height: 0;
	padding-bottom: 26%;
	background: url(../assets/imgs/about/aboutme.png) no-repeat;
	background-size: cover;
}
.curtain_wall {
	width: 100%;
}

$font-color: #e1ecf0;
.curtain_font {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}
.curtain_font-wrap {
	display: table;
    height: 100%;
    width: 100%;
}
.curtain_font__big {
	line-height: 1;
	position: relative;
	color: $font-color;
	display: table-cell;
    vertical-align: middle;
	text-align: center;
}
.curtain_font__cn, .curtain_font__en {
	position: relative;
}
.curtain_font__cn {
	font-weight: bold;
	line-height: 1;
	margin-bottom: 10px;
    font-size: 80px;
	&:before {
		content: '';
	    position: absolute;
	    top: -47px;
	    left: 50%;
	    margin-left: -50px;
	    width: 100px;
	    height: 6px;
	    background: $font-color;
	}
}
.curtain_font__en {
	font-style: italic;
    font-size: 44px;
    line-height: .8;
    &:after {
	    content: '';
	    position: absolute;
	    top: 74px;
	    left: 50%;
	    margin-left: -50px;
	    width: 100px;
	    height: 6px;
	    background: $font-color;
    }
}
</style>