<template>
	<view class="content">
		<image src="../../static/img/qrcode_bg.jpg" mode="widthFix"></image>
		<view class="img_box">
			<image src="../../static/img/del.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.content{
		width: 100vw;
		height: 100vh;
		position: relative;
		background: linear-gradient(to left top, #7586F0, #9C86D3);
		>image{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		.img_box{
			position: absolute;
			top: 466.6rpx;
			left: 50%;
			transform: translate(-50%, 0%);
			width: 50.4vw;
			height: 50.4vw;
			>image{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
