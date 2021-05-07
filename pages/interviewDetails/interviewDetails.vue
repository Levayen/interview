<template>
	<view class="content">
		<view class="item_1" @click="goForm1">
			<view class="icon_1"><image src="../../static/img/table_1.png" mode=""></image></view>
			<view>应聘登记表-1</view>
		</view>
		<view class="item_2">
			<view class="icon_1"><image src="../../static/img/table_2.png" mode=""></view>
			<view>应聘登记表-2</view>
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
			goForm1(){
				uni.navigateTo({
					url:'../yp_form_1/yp_form_1'
				})
			}
		},
		onLoad(options) {
			uni.setNavigationBarTitle({
				title: `${ options.position } -面试`
			});
		}
	}
</script>

<style lang="less" scoped>
	.content{
		padding: 28rpx 25rpx;
		>view{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 361rpx;
			height: 111rpx;
			font-size: 28rpx;
			border-radius: 7rpx;
			margin-bottom: 28rpx;
		}
	}
	.item_1{
		color: #333333;
		background-color: #F0F0F0;
	}
	.item_2{
		color: #FFFFFF;
		background-color: #4CC360;
	}
	.icon_1{
		width: 33rpx;
		height: 42rpx;
		margin-right: 48rpx;
		>image{
			width: 100%;
			height: 100%;
		}
	}
</style>
