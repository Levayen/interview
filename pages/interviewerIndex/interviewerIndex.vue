<template>
	<view class="content">
		<view class="main">
			<view class="main_item medium">
				一面（ <span class="red">2</span> ）
			</view>
			<view class="main_item medium">
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
		<Copyright></Copyright>
	</view>
</template>

<script>
	import Copyright from '@/components/copyright/copyright.vue'
	export default {
		components:{
			Copyright
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
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
</style>
