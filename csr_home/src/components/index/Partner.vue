<template>
	<div id="partner">
		<section-header zh="合作伙伴" en="PARTNER"></section-header>
		<div id="partner-carousel">
			<ul id="carousel-body">
				<li>
					<img src="../../assets/imgs/index/partner.png" alt=""/>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	// import unslider from '../../assets/js/unslider-min.js';
	import SectionHeader from '../SectionHeaderDark';
	export default {
		ready: function() {
			// $('#partner-carousel').unslider({
			// 	arrows: false,
			// 	// arrows: {
			// 	// 	prev: '<a class="unslider-arrow prev"></a>',
			// 	// 	next: '<a class="unslider-arrow next"></a>',
			// 	// },
			// 	nav: false,
			// 	infinite: true
			// });
		},
		components: {
			SectionHeader
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../assets/scss/util.scss';
	// @import '../../assets/scss/unslider.css';
	// @import '../../assets/scss/unslider-dots.css';
	#partner {
		width: 100%;
		#partner-carousel {
			width: 100%;
			padding-bottom: 50px;
			ul#carousel-body {
				width: 70%;
				margin: 0 auto;
				padding: 0;
				li {
					list-style: none;
					padding: 0;
					img {
						width: 100%;
					}
				}
			}
		}
	}
</style>