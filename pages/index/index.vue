<template>
	<view class="content">
		<view class="top_notice">
			欢迎【{{phone}}】参加英迈思集团面试
		</view>
		<view class="index_box">
			<view class="index_box_1">
				<view>当前有</view>
				<view class="number_fs">{{ positions }}</view>
				<view>个岗位在招聘</view>
			</view>
			<view class="index_box_2">
				<view>当前您有</view>
				<view class="number_fs">{{ records }}</view>
				<view>条面试通知</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				positions: 0,
				records: 0,
				phone: ''
			}
		},
		onLoad() {
			this.phone = uni.getStorageSync('phone')
		},
		onShow() {
			console.log(uni.getStorageSync('token'))
			this.getIndex()
		},
		methods: {  
			getIndex(){
				this.$api.getIndex().then(res => {
					this.positions = res.result.positions;
					this.records = res.result.records;
				})
			}
		}
	}
</script>

<style lang="less" scoped>
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
