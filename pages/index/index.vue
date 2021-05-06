<template>
	<view class="content">
		<view class="top_notice">
			欢迎【15992990321】参加英迈思集团面试
		</view>
		<view class="index_box">
			<view class="index_box_1" @click="getFile">
				<view>当前有</view>
				<view class="number_fs">23</view>
				<view>个岗位在招聘</view>
			</view>
			<view class="index_box_2">
				<view>当前您有</view>
				<view class="number_fs">2</view>
				<view>条面试通知</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {  
			getFile(){
				console.log("A")
				this.$api.getAuthCode({'name':'张三'})
			}
		}
	}
</script>

<style lang="less">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.top_notice{
		background-color: #5C6FB4;
		width: 100%;
		height: 97rpx;
		line-height: 97rpx;
		color: #FFFFFF;
		box-sizing: border-box;
		padding: 0 26rpx;
		font-size: 28rpx;
	}
	.index_box{
		width: 100%;
		box-sizing: border-box;
		padding: 0 25rpx;
		display: flex;
		justify-content: space-between;
		margin-top: 28rpx;
		>view{
			width: 333rpx;
			height: 201rpx;
			border-radius: 7rpx;
			background-size: 103%;
			box-sizing: border-box;
			padding: 0 42rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: #FFFFFF;
			>view{
				font-size: 28rpx;
			}
			.number_fs{
				font-size: 50rpx;
			}
		}
		.index_box_1{
			background-image: url(../../static/img/index_bg_1.png);
		}
		.index_box_2{
			background-image: url(../../static/img/index_bg_2.png);
		}
	}
</style>
