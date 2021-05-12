<template>
	<view class="content">
		<view class="wrapper">
			<view class="item_1" @click="goForm1">
				<view class="icon_1"><image src="../../static/img/table_1.png" mode=""></image></view>
				<view>入职登记表-1</view>
			</view>
			<view class="item_2" @click="goForm2">
				<view class="icon_1"><image src="../../static/img/table_2.png" mode=""></view>
				<view>入职登记表-2</view>
			</view>
			<view class="item_2" @click="enclosure">
				<view class="icon_2"><image src="../../static/img/enclosure.png" mode=""></view>
				<view>附件</view>
			</view>
		</view>
		<view id="tabbar" class="cu-bar tabbar bg-white">
			<view class="action" @click="goPages('/index/index')">
				<view class="cuIcon-cu-image">
					<image src="/static/img/home.png"></image>
				</view>
				<view class="text-gray">首页</view>
			</view>
			<view class="action">
				<view class="cuIcon-cu-image">
					<image src="/static/img/interview.png"></image>
				</view>
				<view class="text-gray">面试</view>
			</view>
			<view class="action" @click="goPages('/notice/notice')">
				<view class="cuIcon-cu-image">
					<image src="/static/img/notice.png"></image>
					<!-- <view class="cu-tag badge"></view> -->
				</view>
				<view class="text-gray">通知</view>
			</view>
			<view class="action" @click="goPages('/join/join')">
				<view class="cuIcon-cu-image">
					<image src="/static/img/join_hl.png"></image>
					<!-- <view class="cu-tag badge"></view> -->
				</view>
				<view class="text-violet">入职</view>
			</view>
			<view class="action" @click="goPages('/my/my')">
				<view class="cuIcon-cu-image">
					<image src="/static/img/my.png"></image>
					<!-- <view class="cu-tag badge"></view> -->
				</view>
				<view class="text-gray">我的</view>
			</view>
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
					url:'../rz_form_1/rz_form_1'
				})
			},
			goForm2(){
				uni.navigateTo({
					url:'../rz_form_2/rz_form_2'
				})
			},
			enclosure(){
				uni.navigateTo({
					url:'../enclosure/enclosure'
				})
			},
			goPages(url){
				uni.switchTab({
					url: `..${url}`
				})
			}
		},
		onLoad(options) {
			uni.setNavigationBarTitle({
				title: `${ options.position } - 入职`
			});
		}
	}
</script>

<style lang="less" scoped>
	.wrapper{
		padding: 28rpx 25rpx;
		>view{
			display: flex;
			align-items: center;
			justify-content: flex-start;
			width: 361rpx;
			height: 111rpx;
			font-size: 28rpx;
			border-radius: 7rpx;
			margin-bottom: 28rpx;
			box-sizing: border-box;
			padding-left: 50rpx;
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
	.icon_2{
		width: 38rpx;
		height: 42rpx;
		margin-right: 48rpx;
		>image{
			width: 100%;
			height: 100%;
		}
	}
	#tabbar{
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		border-top: 1rpx solid #E3E3E3;
	}
</style>
