<template>
	<view class="content">
		<view class="join_item" @click="goDetails" data-position="产品经理">
			<view class="icon_1"><image src="/static/img/join_icon.png" mode=""></image></view>
			<view>产品经理</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goDetails(e){
				console.log(e.currentTarget.dataset.position)
				let position = e.currentTarget.dataset.position
				uni.navigateTo({
					url:'../joinDetails/joinDetails?position=' + position
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.content{
		padding: 28rpx 25rpx;
	}
	.join_item{
		width: 333rpx;
		height: 111rpx;
		border-radius: 7rpx;
		background-color: #5C6FB4;
		color: #FFFFFF;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.icon_1{
		width: 41rpx;
		height: 42rpx;
		margin-right: 27rpx;
		>image{
			width: 100%;
			height: 100%;
		}
	}
</style>
