<template>
	<view class="content">
		<image src="../../static/img/qrcode_bg.jpg" mode="widthFix"></image>
		<view class="img_box" :style="{top: model === 1 ? '35%' : '28.5%'}">
			<!--  -->
			<image src="../../static/img/del.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				model: ''
			};
		},
		onLoad() {
			this.getClinet()
		},
		methods:{
			getClinet(){
				let that = this
				uni.getSystemInfo({
					success(res) {
						if(res.model.indexOf('iPhone X') != -1){
							that.model = 2
						}else{
							that.model = 1
						}
						console.log(res.model)
					}
				})
			}
		},
		
	}
</script>

<style lang="less" scoped>
	.content{
		width: 100vw;
		height: 100vh;
		position: relative;
		>image{
			position: absolute;
			top: 0;
			left: 0;
			width: 100vw;
			// height: 100%;
		}
		.img_box{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, 0);
			width: 50.4vw;
			height: 50.4vw;
			>image{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
