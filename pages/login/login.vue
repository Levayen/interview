<template>
	<view class="content">
		<view class="banner">
			<image src="/static/img/img_001.png" mode=""></image>
		</view>
		<view class="login_box">
			<view class="login_nav">
				<view :class="{ 'active': isInterviewers === 1 }" class="login_nav_1" @click="changeIdentity(1)">
					面试者
				</view>
				<view :class="{ 'active': isInterviewers === 2 }" class="login_nav_2" @click="changeIdentity(2)">
					面试官
				</view>
			</view>
			<view class="login_form">
				<view class="login_form_1" v-if="isInterviewers === 1">
					<view>
						<view>手机号码：</view>
						<view>
							<input type="number" value="" />
						</view>
						<view class="code_btn">验证码</view>
					</view>
					<view>
						<view>*Email：</view>
						<view>
							<input type="text" value="" />
						</view>
					</view>
					<view>
						<view>请输入验证码：</view>
						<view>
							<input type="number" value="" />
						</view>
					</view>
				</view>
				<view class="login_form_2" v-else>
					<view>
						<view>犀牛ID：</view>
						<view>
							<input type="number" value="" />
						</view>
					</view>
					<view>
						<view>密码：</view>
						<view>
							<input type="text" value="" />
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="login_btn">
			<view>
				登&nbsp;录
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isInterviewers: 1
			};
		},
		methods:{
			changeIdentity(val){
				this.isInterviewers = val
			}
		}
	}
</script>

<style lang="less">
	.banner{
		width: 100%;
		height: 285rpx;
		image{
			width: 100%;
			height: 100%;
		}
	} 
	.login_box{
		width: 100%;
		padding: 0 25rpx;
		box-sizing: border-box;
		.login_nav{
			width: 100%;
			height: 105.5rpx;
			display: flex;
			justify-content: center;
			gap:124rpx;
			view{
				font-size: 31rpx;
				height: 100%;
				width: 100rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				&.active{
					color: #5C6FB4;
					border-bottom: 5rpx solid #5C6FB4;
				}
			}
			
		} 
		.login_form{
			width: 100%;
			border-radius: 21rpx;
			box-shadow: 0 5rpx 10rpx #cccccc;
			background-color: #FFFFFF;
			.login_form_1 {
				>view{
					width: 100%;
					height: 97rpx;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					border-bottom: 1rpx solid #E3E7F6;
					box-sizing: border-box;
					padding: 0 35rpx;
					font-size: 28rpx;
					position: relative;
				}
				.code_btn{
					position: absolute;
					right: 35rpx;
					width: 139rpx;
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
					border-radius: 7rpx;
					color: #5C6FB4;
					font-size: 25rpx;
					background-color: #EEF1FA;
				}
			}
			.login_form_2 {
				>view{
					width: 100%;
					height: 97rpx;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					border-bottom: 1rpx solid #E3E7F6;
					box-sizing: border-box;
					padding: 0 35rpx;
					font-size: 28rpx;
					position: relative;
				}
			}
		}
	}
	.login_btn{
		position: fixed;
		bottom: 28rpx;
		width: 100%;
		padding: 0 25px;
		box-sizing: border-box;
		view{
			width: 100%;
			height: 83rpx;
			line-height: 83rpx;
			border-radius: 83rpx;
			text-align: center;
			background: linear-gradient(to left top, #5C6FB4, #758AD5);
			font-size: 31rpx;
			color: #FFFFFF;
		}
	}
</style>
