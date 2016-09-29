<template>
	<div id="index-carousel">
		<div id="carousel-control">
			<ul>
				<li v-for="ctrl in controls" v-bind:class="{ctrlActive: ctrl.active}" v-on:click="toggleSlide(ctrl)"></li>
			</ul>
		</div>

		<div class="slide slide1" v-if="slide.slide1" transition="fade">
			<img src="../assets/u74.jpg" alt="slide1">
		</div>
		<div class="slide slide2" v-if="slide.slide2" transition="fade">
			<img src="../assets/u61.jpg" alt="slide2">
		</div>
		<div class="slide slide3" v-if="slide.slide3" transition="fade">
			<img src="../assets/u87.jpg" alt="slide3">
		</div>
		<div class="slide slide4" v-if="slide.slide4" transition="fade">
			<img src="../assets/u100.jpg" alt="slide4">
		</div>
	</div>
</template>

<script>
export default {
	// ready hook
	ready: function() {
		var carousel = document.getElementById('index-carousel');
		window.onload = function() {
			carousel.style.height = document.getElementsByClassName('slide')[0].clientHeight + 'px';
		}
		window.onresize = function() {
			carousel.style.height = document.getElementsByClassName('slide')[0].clientHeight + 'px';
		}
	},
	data: function() {
		return {
			controls: [
				{id: '1', active: true},
				{id: '2', active: false},
				{id: '3', active: false},
				{id: '4', active: false}
			],
			slide: {
				slide1: true,
				slide2: false,
				slide3: false,
				slide4: false
			}
		}
	},
	methods: {
		toggleSlide: function(ctrl) {
			var id = +ctrl.id;
			switch(id) {
				case 1:
					this.slide.slide1 = true;
					this.slide.slide2 = this.slide.slide3 = this.slide.slide4 = false;
					this.controls[0].active = true;
					this.controls[1].active = this.controls[2].active = this.controls[3].active = false;
					break;
				case 2:
					this.slide.slide2 = true;
					this.slide.slide1 = this.slide.slide3 = this.slide.slide4 = false;
					this.controls[1].active = true;
					this.controls[0].active = this.controls[2].active = this.controls[3].active = false;
					break;
				case 3:
					this.slide.slide3 = true;
					this.slide.slide1 = this.slide.slide2 = this.slide.slide4 = false;
					this.controls[2].active = true;
					this.controls[1].active = this.controls[0].active = this.controls[3].active = false;
					break;
				case 4:
					this.slide.slide4 = true;
					this.slide.slide1 = this.slide.slide2 = this.slide.slide3 = false;
					this.controls[3].active = true;
					this.controls[1].active = this.controls[2].active = this.controls[0].active = false;
					break;
				default:
					break;
			}
		}
	}
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/util.scss';
.fade-transition {
	transition: all .7s ease;
}
.fade-enter, .fade-leave {
	opacity: 0;
	visibility: hidden;
}
	
#index-carousel {
	position: relative;
	width: 100%;
	.slide {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		img {
			width: 100%;
		}
	}
	#carousel-control {
		z-index: 100;
		position: absolute;
		bottom: 10px;
		left: 50%;
		@include transform(translateX(-50%));
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
			li {
				display: inline-block;
				width: 15px;
				height: 15px;
				margin: 0 5px;
				border-radius: 50%;
				text-align: center;
				background: #fff;
				cursor: pointer;
				box-shadow: inset 0 1px 5px #666;
			}
			li.ctrlActive {
				background: #00f;
				opacity: 0.5;
			}
		}
	}
}
</style>