<template>
	<view class="content">
		<view class="top_notice">
			<view>
				会员ID：{{phone}}
			</view>
			<view class="login_out" @click="logOut">
				安全退出
			</view>
		</view>
		<view class="version">
			版本号：v{{version || '1.0.0'}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:'',
				version: '1.0.0'
			}
		},
		onLoad() {
			this.phone = uni.getStorageSync('phone')
			uni.getSystemInfo({
			　　success: function (res) {      
			　　}
			});
			const accountInfo = uni.getAccountInfoSync();  
			this.version = accountInfo.miniProgram.version; // 小程序 版本号  
		},
		methods: {
			logOut(){
				this.$api.logOut({}).then( res => {
					uni.clearStorage()
					uni.reLaunch({
						url: '../login/login'
					})
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
		display: flex;
		justify-content: space-between;
		background-color: #5C6FB4;
		width: 100%;
		height: 97rpx;
		line-height: 97rpx;
		color: #FFFFFF;
		box-sizing: border-box;
		padding: 0 26rpx;
		font-size: 28rpx;
		.login_out{
			font-size: 25rpx;
		}
	}
	.version{
		position: absolute;
		bottom: 42rpx;
		font-size: 22rpx;
		color: #999999;
	}
</style>
