<template>
	<view class="content">
		<ul>
			<li @click="goDetails" data-position="产品经理">产品经理</li>
			<li>产品经理</li>
			<li>产品经理</li>
			<li>产品经理</li>
			<li>产品经理</li>
			<li>产品经理</li>
			<li>产品经理</li>
			<li>产品经理</li>
			<li>产品经理产品经理</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goDetails(e){
				console.log(e.currentTarget.dataset.position)
				let position = e.currentTarget.dataset.position
				uni.navigateTo({
					url:'../interviewDetails/interviewDetails?position=' + position
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.content{
		padding: 28rpx 25rpx;
		ul{
			display: flex;
			flex-wrap: wrap;
			margin-right: -27rpx;
		}
		li{
			width: 215rpx;
			height: 111rpx;
			box-sizing: border-box;
			padding: 0 39rpx;
			display: flex;
			flex-direction: column;
			align-content: center;
			justify-content: center;
			background-color: #F0F0F0;
			color: #333333;
			font-size: 28rpx;
			border-radius: 7rpx;
			text-align: center;
			margin-right: 27rpx;
			margin-bottom: 27rpx;
		}
	}
</style>
