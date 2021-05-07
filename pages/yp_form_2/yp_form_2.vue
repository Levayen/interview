<template>
	<view class="content">
		<view class="top_title">
			<view class="top_left">
				<view class="icon_1"><image src="/static/img/table_2.png" mode=""></image></view>
				<view>应聘登记表-2</view>
			</view>
			<view class="top_right">
				<view class="select_btn">
					产品经理
				</view>
			</view>
		</view>
		<view class="mian">
			<view class="title_1">
				职位匹配度问答（共10题）
			</view>
			<view class="question">
				<view><span style="margin-right: 10rpx;" class="red">*</span> 1、您现在是否在职？</view>
			</view>
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
	.top_title{
		width: 100%;
		height: 111rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 25rpx;
		background-color: #5C6FB4;
		color: #FFFFFF;
		font-size: 28rpx;
	}
	.top_left{
		display: flex;
		align-items: center;
	}
	.top_right{
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 208rpx;
		padding: 0 10rpx;
		height: 60rpx;
		background-color: #6D7EBC;
		border-radius: 7rpx;
	}
	.icon_1{
		width: 22rpx;
		height: 28rpx;
		margin-right: 15rpx;
		>image{
			width: 100%;
			height: 100%;
		}
	}
	.select_btn{
		display: flex;
		align-items: center;
		color: #FFFFFF;
	}
	.mian{
		box-sizing: border-box;
		padding: 0 25rpx;
	}
	.title_1{
		margin-top: 58rpx;
		margin-bottom: 40rpx;
		font-size: 28rpx;
		color: #333333;
	}
	.question{
		font-size: 28rpx;
		color: #333333;
		width: 100%;
		height: 83rpx;
		border-radius: 7rpx 7rpx 0 0;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding: 0 38rpx;
		background-color: #F0f0f0;
	}
</style>
