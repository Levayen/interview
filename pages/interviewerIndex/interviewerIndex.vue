<template>
	<view class="content">
		<view class="main">
			<view class="main_item medium" @click="goFirstInterview">
				一面（ <span class="red">2</span> ）
			</view>
			<view class="main_item medium" @click="goSecondInterview">
				二面（ <span class="red">2</span> ）
			</view>
			<view class="main_item medium">
				三面（ <span class="red">2</span> ）
			</view>
			<view class="main_item medium">
				四面（ <span class="red">2</span> ）
			</view>
			<view class="main_last_item medium">
				HR面（ <span>2</span> ）
			</view>
		</view>
		<view class="copy">
			Copyright@英迈思集团 2008-2021
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goFirstInterview(){
				uni.navigateTo({
					url: '../firstInterview/firstInterview'
				})
			},
			goSecondInterview(){
				uni.navigateTo({
					url: '../secondInterview/secondInterview'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.content{
		min-height: 100vh;
	}
	.main{
		width: 100%;
		box-sizing: border-box;
		padding: 0 25rpx;
	}
	.main_item{
		width: 100%;
		height: 111rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		padding:  0 53rpx;
		color: #333333;
		margin-top: 28rpx;
		background-color: #FFFFFF;
		border-radius: 7rpx;
	}
	.main_last_item{
		width: 100%;
		height: 111rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		padding:  0 53rpx;
		color: #FFFFFF;
		margin-top: 28rpx;
		background-color: #5C6FB4;
		border-radius: 7rpx;
	}
	.copy{
		width: 100%;
		margin-bottom: 28rpx;
		text-align: center;
		font-size: 22rpx;
		color: #999999;
		position: absolute;
		bottom: 0;
		left: 0;
	}
</style>
