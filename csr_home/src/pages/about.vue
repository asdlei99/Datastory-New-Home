<template>
	<div id="container">
		<curtain></curtain>
		<intro></intro>
		<team></team>
		<news></news>
		<site-footer></site-footer>
	</div>
</template>

<script>
import Curtain from '../components/Curtain'
import Intro from '../components/about/Intro'
import Team from '../components/about/Team'
import News from '../components/about/news'
import SiteFooter from '../components/SiteFooter'

export default {
	attached: function() {
		// prevent drag event
		document.ondragstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			return false;
		}

		function getQueryObj(str) {
			if (!str) {
				str = window.location.href; // get current page-url
			}
			var obj = {};
			if (str.indexOf('?') < 0) {
				return;
			}
			var queryStr = str.split('?')[1];
			var allQuerys = queryStr.split('&');
			allQuerys.forEach(function(item) {
				var key = item.split('=')[0];
				var value = item.split('=')[1];
				obj[key] = value;
			});
			return obj;
		}
		var query = getQueryObj();
		if (query) {
			var target = $('#' + query.anchor);
			if (target) {
				let t = setTimeout(function() {
					// window.scrollTo(0, target.offset().top - 50);
					$('html, body').animate({
						scrollTop: target.offset().top - 50
					}, 800);
				}, 150);
			} else {
				console.log('no anchor found');
			}
		}
	},
	components: {
		Curtain,
		Intro,
		Team,
		News,
		SiteFooter
	}
}
</script>

<style lang="scss">

</style>
