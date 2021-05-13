<template>
	<view class="content">
		<view class="top_notice">
			<view>
				会员ID：15992990321
			</view>
			<view class="login_out" @click="logOut">
				安全退出
			</view>
		</view>
		<view class="version">
			版本号：v1.0.1
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
			logOut(){
				this.$api.logOut({}).then( res => {
					uni.clearStorage()
					uni.navigateTo({
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
