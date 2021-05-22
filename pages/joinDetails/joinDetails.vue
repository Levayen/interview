<template>
	<view class="content">
		<view class="wrapper">
			<view :class="entrant_one > 0 ? 'item_2':'item_1'" @click="goForm1(entrant_one)">
				<view v-if="entrant_one > 0" class="icon_1"><image src="../../static/img/table_2.png" mode=""></image></view>
				<view v-else class="icon_1"><image src="../../static/img/table_1.png" mode=""></image></view>
				<view>入职登记表-1</view>
			</view>
			<view :class="entrant_two > 0 ? 'item_2':'item_1'" @click="goForm2(entrant_two)">
				<view v-if="entrant_two > 0" class="icon_1"><image src="../../static/img/table_2.png" mode=""></image></view>
				<view v-else class="icon_1"><image src="../../static/img/table_1.png" mode=""></image></view>
				<view>入职登记表-2</view>
			</view>
			<view :class="certificate_id > 0 ? 'item_2':'item_1'" @click="enclosure(certificate_id)">
				<view v-if="certificate_id > 0" class="icon_2"><image src="../../static/img/enclosure.png" mode=""></image></view>
				<view v-else class="icon_2"><image src="../../static/img/enclosure_2.png" mode=""></image></view>
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
				entrant_one: 0, //登记表1
				entrant_two: 0, //登记表2
				certificate_id: 0, //附件 
			}
		},
		onLoad(options) {
			uni.setNavigationBarTitle({
				title: `${ options.position } - 入职`
			});
		},
		onShow() {
			this.entryFormInfo()
		},
		methods: {
			goForm1(id){
				uni.navigateTo({
					url:`../rz_form_1/rz_form_1?id=${id}`
				})
			},
			goForm2(id){
				uni.navigateTo({
					url:`../rz_form_2/rz_form_2?id=${id}`
				})
			},
			enclosure(id){
				uni.navigateTo({
					url:`../enclosure/enclosure?id=${id}`
				})
			},
			goPages(url){
				uni.switchTab({
					url: `..${url}`
				})
			},
			entryFormInfo(){
				this.$api.entryFormInfo().then( res => {
					console.log(res)
					this.entrant_one = res.result.entrant_one
					this.entrant_two = res.result.entrant_two
					this.certificate_id = res.result.certificate_id
				})
			},
		},
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
