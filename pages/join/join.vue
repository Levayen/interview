<template>
	<view class="content">
		<view class="no_data" v-if="post_name === ''">
			暂无入职信息
		</view>
		<view v-if="post_name" class="join_item" @click="goDetails" :data-position="post_name">
			<view class="icon_1"><image src="/static/img/join_icon.png" mode=""></image></view>
			<view>{{post_name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				post_name: '',
				post_id: '',
			}
		},
		onLoad(){
			
		},
		onShow() {
			this.joinIndex()
		},
		methods: {
			joinIndex(){
				this.$api.joinIndex({}).then( res => {
					console.log(res)
					if(res.result){
						this.post_name = res.result.post_name;
						this.post_id = res.result.post_id;
					}
				})
			},
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
		padding-top: 0;
	}
	.join_item{
		margin-top: 28rpx;
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
