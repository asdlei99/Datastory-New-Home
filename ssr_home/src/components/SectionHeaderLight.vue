<template>
	<div class="section-header-light">
		<!-- <p><span class="geo geo1"></span></p> -->
		<h2>{{zh}}</h2>
		<p>{{en}}</p>
		<!-- <p><span class="geo geo2"></span></p> -->
	</div>
</template>

<script>
	export default {
		props: ['zh', 'en']
	}
</script>

<style lang="scss">
	.section-header-light {
		$cc: rgb(255,255,255);
		min-width: 1024px;
		width: 100%;
		color: $cc;
		padding: 53px;
		h2 {
			font-size: 40px;
			text-align: center;
			padding: 0;
			margin: 0;
		}
		p {
			font-size: 16px;
			font-family: Arial, Helvetica;
			text-align: center;
			padding: 0;
			margin: 0;
			span.geo {
				display: inline-block;
				width: 6px;
				height: 6px;
				border-radius: 50%;
				background-color: $cc;
				position: relative;
			}
			span.geo1:before {
				display: block;
				content: '';
				width: 2px;
				height: 12px;
				border: solid 1px $cc;
				position: absolute;
				bottom: 6px;
				left: 2px;
			}
			span.geo2:before {
				display: block;
				content: '';
				width: 2px;
				height: 12px;
				border: solid 1px $cc;
				position: absolute;
				top: 6px;
				left: 2px;
			}
		}
	}
</style>