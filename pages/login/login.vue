<template>
	<view class="content">
		<view class="banner">
			<image src="/static/img/img_001.png" mode=""></image>
		</view>
		<view class="login_box">
			<view class="login_nav">
				<view :class="{ 'active': isInterviewers == 1 }" class="login_nav_1" @click="changeIdentity(1)">
					面试者
				</view>
				<view :class="{ 'active': isInterviewers == 2 }" class="login_nav_2" @click="changeIdentity(2)">
					面试官
				</view>
			</view>
			<view class="login_form">
				<view class="login_form_1" v-if="isInterviewers == 1">
					<view>
						<view>手机号码：</view>
						<view>
							<input type="number" value="" v-model="phone" @input="inputChange"/>
						</view>
						<view v-if="showText" class="code_btn" @click="getAuthCode">验证码</view>
						<view v-else class="code_btn">{{second}}s重新发送</view>
					</view>
					<view v-if="!isExist">
						<view>*Email：</view>
						<view>
							<input type="text" value="" v-model="email" />
						</view>
					</view>
					<view>
						<view>请输入验证码：</view>
						<view>
							<input type="number" value="" v-model="code"/>
						</view>
					</view>
				</view>
				
				<view class="login_form_2" v-else>
					<view>
						<view>犀牛ID：</view>
						<view>
							<input type="number" value="" v-model="xiniu_id"/>
						</view>
					</view>
					<view>
						<view>密码：</view>
						<view>
							<input type="password" value="" v-model="password"/>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="login_btn">
			<view @click="isInterviewers == 1 ? userLogin() : intervieweerLogin()">
				登&nbsp;录
			</view>
		</view>
	</view>
</template>

<script>
	import { regularPhone, regularEmail } from '../../utils/global.js'
	export default {
		data() {
			return {
				isInterviewers: 1,
				phone: '',
				email: '', //邮箱
				code: '', //验证码
				isExist: true, //手机号是否存在
				second: 60,
				showText: true,
				xiniu_id: '',
				password: '',
			};
		},
		onLoad(options) {
			// uni.showModal({
			// 	content: JSON.stringify(options)
			// })  
			// let qrUrl = decodeURIComponent(options.path);//获取二维码中带的地址及参数       
			// this.isInterviewers = this.getQueryString(qrUrl, "isInterviewers");//解析二维码中地址中的参数   name为二维码中地址带的参数名  如index/index?name=XXX
			// console.log(this.isInterviewers);
			if(options.isInterviewers){
				this.isInterviewers = options.isInterviewers
			}
		},
		methods:{
			//解析链接方法
			getQueryString:function (url, name) {  
			var reg = new RegExp('(^|&|/?)' + name + '=([^&|/?]*)(&|/?|$)', 'i');  
			var r = url.substr(1).match(reg);  
			if (r != null) {      
				return r[2];  
			}  
				return null;
			},
			inputChange(e){
				if(this.phone.length === 11){
					this.checkPhone()
				}
			},
			//获取验证码
			getAuthCode(){
				let params = {
					phone: this.phone
				}
				if(!regularPhone(params.phone)){
					return 
				}
				this.$api.getAuthCode(params).then( res => {
					this.countDown()
				})
			},
			//倒计时
			countDown(){
			    this.showText = false
			    var interval = setInterval(() => {
			        let times = --this.second
			        this.second = times<10?'0'+times:times //小于10秒补 0
			    }, 1000)
			    setTimeout(() => {
			        clearInterval(interval)
			        this.second=60
			        this.showText = true
			    }, 60000)
			},   
			//检测手机号
			checkPhone(){
				let params = {
					phone: this.phone
				}
				this.$api.checkPhone(params).then( res => {
					this.isExist = res.result.isExist
				})
			},
			//面试者登录
			userLogin(){
				let params = {}
				if(this.isExist){
					params = {
						phone: this.phone,
						code: this.code
					}
				}else{
					params = {
						phone: this.phone,
						email: this.email,
						code: this.code
					}
				}
				if(!regularPhone(params.phone)){
					return 
				}
				if( !this.isExist && !regularEmail(params.email)){
					return 
				}
				if(params.code === ''){
					uni.showToast({
						title: "验证码不能为空",
						icon: "none"
					})
					return
				}
				uni.showLoading({
					title: "登录中"
				})
				this.$api.userLogin(params).then( res => {
					uni.hideLoading()
					uni.setStorageSync("phone", res.result.phone)
					uni.setStorage({
					    key: 'token',
					    data:  res.result.token,
					    success: function () {
							uni.switchTab({
								url:'../index/index'
							})
					    }
					});
				})
			},
			//面试官登录
			intervieweerLogin(){
				let params = {
					xiniu_id: this.xiniu_id,
					password: this.password
				}
				if(params.xiniu_id === ''){
					uni.showToast({
						title: "犀牛ID不能为空",
						icon: "none"
					})
					return
				}
				if(params.password === ''){
					uni.showToast({
						title: "密码不能为空",
						icon: "none"
					})
					return
				}
				uni.showLoading({
					title: "登录中"
				})
				this.$api.intervieweerLogin(params).then( res => {
					console.log(res) 
					uni.hideLoading()
					uni.setStorage({
					    key: 'token',
					    data:  res.result.token,
					    success: function () {
							uni.reLaunch({
								url:'../interviewerIndex/interviewerIndex'
							})
					    }
					});
				})
			},
			changeIdentity(val){
				this.isInterviewers = val
			}
		}
	}
</script>

<style lang="less" scoped>
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
			view{
				font-size: 31rpx;
				height: 100%;
				width: 100rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				box-sizing: border-box;
				margin-left:124rpx;
				&:first-child{
					margin-left:0;
				}
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
					min-width: 139rpx;
					padding: 0 10rpx;
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
