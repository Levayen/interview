<template>
	<view class="content">
		<InterviewNav @changeTab="changeStatus"></InterviewNav>
		<view class="main">
			<view v-for="(item, index) in 2" :key="index" v-if="status === 1">
				<view class="item">
					<view class="item_top">
						<view class="title">
							产品经理
						</view>
						<view class="name">
							<view>吴晓燕(女)</view>
							<view class="see">
								<view class="icon_2"><image src="/static/img/icon_1.png" mode=""></image></view>
								<view>查看简历</view>
							</view>
						</view>
						<view class="department">
							用人部门：英迈思-嗨美丽事业部-软件中心-开发部
						</view>
						<view class="form">
							<view>
								<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
								<view>应聘登记表-1</view>
							</view>
							<view>
								<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
								<view>应聘登记表-2</view>
							</view>
						</view>
						<view class="time">
							填表时间：2021年1月23日 12:59
						</view>
						
					</view>
					<view class="item_middle">
						<view>
							<view class="middle_1">
								<view class="first_btn">一面</view>
								<view class="form_2">
									<view>
										<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
										<view>面试反馈表-1</view>
									</view>
									<view>
										<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
										<view>面试反馈表-2</view>
									</view>
								</view>
							</view>
							<view class="first_time">
								面试安排时间： <span>2021年3月2日（周四）上午11点</span>
							</view>
							<view class="first_result">
								面试结果： <span>通过</span>
							</view>
						</view>
						<view class="arrange">
							<view class="btn">二面</view>
							<view class="arrange_time">
								<view>面试安排时间：</view>
								<view>2021年3月2日（周四）上午11点</view>
							</view>
						</view>
					</view>
					<view class="item_bottom">
						<view>
							<view class="icon_1"><image src="../../static/img/back_1.png" mode=""></image></view>
							<view>退回</view> 
						</view>
						<view>
							<view class="icon_1"><image src="../../static/img/edit.png" mode=""></image></view>
							<view>填写面试反馈表</view>
						</view>
					</view>
				</view>
			</view>
			<view v-for="(item, index) in 2" :key="index" v-if="status === 2">
				<view class="item">
					<view class="item_top">
						<view class="title">
							产品经理
						</view>
						<view class="name">
							<view>吴晓燕(女)</view>
							<view class="see">
								<view class="icon_2"><image src="/static/img/icon_1.png" mode=""></image></view>
								<view>查看简历</view>
							</view>
						</view>
						<view class="department">
							用人部门：英迈思-嗨美丽事业部-软件中心-开发部
						</view>
						<view class="form">
							<view>
								<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
								<view>应聘登记表-1</view>
							</view>
							<view>
								<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
								<view>应聘登记表-2</view>
							</view>
						</view>
						<view class="time">
							填表时间：2021年1月23日 12:59
						</view>
					</view>
					<view class="item_middle" v-for="(item, index) in 2" :key="index">
						<view>
							<view class="arrange_2">
								<view class="btn">一面</view>
								<view class="arrange_time">
									<view>面试安排时间：</view>
									<view>2021年3月2日（周四）上午11点</view>
								</view>
							</view>
							<view class="interviewer" v-for="(item, index) in 2" :key="index">
								<view class="result_1">
									<view>面试官1：陈学丹</view>
									<view>面试得分：98</view>
								</view>
								<view class="form">
									<view @click="fkForm">
										<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
										<view>面试反馈表-1</view>
									</view>
									<view @click="fkForm2">
										<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
										<view>面试反馈表-2</view>
									</view>
								</view>
							</view>
						</view>
						<view class="result_2">
							<view>综合得分：<span>97</span></view>
							<view v-show="status === 2">面试结果：<span>通过</span></view>
							<view v-show="status === 3">面试结果：<span>未通过</span> <span> (技术能力达不到)</span> </view>
						</view>
					</view>
				</view>
			</view>
			<view v-for="(item, index) in 2" :key="index" v-if="status === 3">
				<view class="item">
					<view class="item_top">
						<view class="title">
							产品经理
						</view>
						<view class="name">
							<view>吴晓燕(女)</view>
							<view class="see">
								<view class="icon_2"><image src="/static/img/icon_1.png" mode=""></image></view>
								<view>查看简历</view>
							</view>
						</view>
						<view class="department">
							用人部门：英迈思-嗨美丽事业部-软件中心-开发部
						</view>
						<view class="form">
							<view>
								<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
								<view>应聘登记表-1</view>
							</view>
							<view>
								<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
								<view>应聘登记表-2</view>
							</view>
						</view>
						<view class="time">
							填表时间：2021年1月23日 12:59
						</view>
					</view>
					<view class="item_middle" v-for="(item, index) in 2" :key="index">
						<view>
							<view class="arrange_2">
								<view class="btn">一面</view>
								<view class="arrange_time">
									<view>面试安排时间：</view>
									<view>2021年3月2日（周四）上午11点</view>
								</view>
							</view>
							<view class="interviewer" v-for="(item, index) in 2" :key="index">
								<view class="result_1">
									<view>面试官1：陈学丹</view>
									<view>面试得分：98</view>
								</view>
								<view class="form">
									<view @click="fkForm">
										<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
										<view>面试反馈表-1</view>
									</view>
									<view @click="fkForm2">
										<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
										<view>面试反馈表-2</view>
									</view>
								</view>
							</view>
						</view>
						<view class="result_2">
							<view>综合得分：<span>97</span></view>
							<view v-show="status === 2">面试结果：<span>通过</span></view>
							<view v-show="status === 3">面试结果：<span>未通过</span> <span> (技术能力达不到)</span> </view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="copy">
			Copyright@英迈思集团 2008-2021
		</view>
	</view>
</template>

<script>
	import InterviewNav from '@/components/interviewNav/interviewNav.vue'
	export default {
		components:{
			InterviewNav 
		},
		data() {
			return {
				status: 2
			};
		},
		methods:{
			changeStatus(val){
				this.status = val
				console.log(this.status)
			},
			fkForm(){
				uni.navigateTo({
					url: '../fk_form_1/fk_form_1'
				})
			},
			fkForm2(){
				uni.navigateTo({
					url: '../fk_form_2/fk_form_2'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.main{
		width: 100%;
		box-sizing: border-box;
		padding: 0 25rpx;
		padding-bottom: 28rpx;
		.item{
			margin-top: 28rpx;
			border-radius: 7rpx;
			background-color: #FFFFFF;

			.item_bottom{
				height: 83rpx;
				border-top: 1rpx solid #f1f1f5;
				display: flex;
				>view{
					width: 50%;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 25rpx;
					color: #5C6FB4;
					&:first-child{
						color: #333333;
						border-right: 1rpx solid #f1f1f5;
					}
					.icon_1{
						width: 30rpx;
						height: 30rpx;
						margin-right: 15rpx;
						image{
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}

		.item_top{
			box-sizing: border-box;
			padding: 40rpx 28rpx;
			.title{
				font-size: 31rpx;
				font-weight: 500;
			}
			.name{
				display: flex;
				font-size: 25rpx;
				margin-top: 35rpx;
			}
			.see{
				display: flex;
				align-items: center;
				margin-left: 28rpx;
				color: #5C6FB4;
			}
			
			.department{
				margin-top: 28rpx;
				font-size: 25rpx;
			}

			.time{
				margin-top: 28rpx;
				font-size: 22rpx;
				color: #777777;
			}


		}
	}
	.arrange{
		margin-top: 35rpx;
		width: 100%;
		min-height: 132rpx;
		background-color: #EEF0F7;
		border-radius: 7rpx;
		box-sizing: border-box;
		padding: 35rpx;
		display: flex;
		align-items: center;
		.btn{
			width: 111rpx;
			height: 62rpx;
			line-height: 62rpx;
			text-align: center;
			font-size: 25rpx;
			color: #FFFFFF;
			background-color: #5C6FB4;
			border-radius: 7rpx;
			margin-right: 27rpx;
		}
		.arrange_time{
			>view{
				&:first-child{
					font-size: 22rpx;
					color: #777777;
				}
				&:nth-child(2){
					font-size: 25rpx;
					color: #5C6FB4;
				}
				
			}
		}
	}
	.icon_2{
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.icon_3{
		width: 24rpx;
		height: 31rpx;
		margin-right: 21rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.form{
		display: flex;
		margin-top: 28rpx;
		>view{
			width: 257rpx;
			height: 69rpx;
			border-radius: 7rpx;
			margin-right: 28rpx;
			font-size: 25rpx;
			box-sizing: border-box;
			padding: 0 24rpx;
			background-color: #DDDDDD;
			display: flex;
			align-items: center;
			justify-content: flex-start;
		}
	}
	.form_2{
		display: flex;
		margin-right: -28rpx;
		>view{
			width: 229rpx;
			height: 69rpx;
			border-radius: 7rpx;
			margin-right: 15rpx;
			font-size: 25rpx;
			box-sizing: border-box;
			padding: 0 15rpx;
			background-color: #DDDDDD;
			display: flex;
			align-items: center;
			justify-content: flex-start;
		}
	}
	.item_middle{
		border-top: 1rpx solid #f1f1f5;
		width: 100%;
		box-sizing: border-box;
		padding: 28rpx;
		.middle_1{
			display: flex;
			align-items: center;
		}
		.arrange_2{
			width: 100%;
			border-radius: 7rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			margin-bottom: 30rpx;
			.btn{
				width: 111rpx;
				height: 62rpx;
				line-height: 62rpx;
				text-align: center;
				font-size: 25rpx;
				color: #FFFFFF;
				background-color: #5C6FB4;
				border-radius: 7rpx;
				margin-right: 27rpx;
			}
			.arrange_time{
				>view{
					&:first-child{
						font-size: 22rpx;
						color: #777777;
					}
					&:last-child{
						font-size: 25rpx;
						color: #5C6FB4;
					}
				}
			}
		}
		.interviewer{
			width: 100%;
			box-sizing: border-box;
			background-color: #F9F9F9;
			border-radius: 7rpx;
			margin-bottom: 22rpx;
			padding: 28rpx;
			.result_1{
				display: flex;
				align-items: center;
				font-size: 25rpx;
				>view{
					margin-right: 40rpx;
				}
			}
		}
		.result_2{
			width: 100%;
			box-sizing: border-box;
			padding: 0 28rpx;
			>view{
				font-size: 25rpx;
				&:first-child{
					margin-bottom: 26rpx;
					span{
						color: #7586C0;
					}
				}
				&:nth-child(2){
					margin-bottom: 26rpx;
					span{
						color: #4CC360;
					}
				}
				&:nth-child(3){
					span{
						&:first-child{
							color: #E54F4F;
						}
						&:nth-child(2){
							color: #777777;
						}
					}
				}
			}
		}
		.first_time{
			margin-top: 28rpx;
			font-size: 22rpx;
			color: #777777;
		}
		.first_result{
			font-size: 22rpx;
			color: #777777;
			margin-top: 21rpx;
			span{
				color: #4CC360;
				margin-left: 60rpx;
			}
		}
		.first_btn{
			width: 118rpx;
			height: 69rpx;
			line-height: 69rpx;
			text-align: center;
			border-radius: 7rpx;
			background-color: #A4AED5;
			color: #FFFFFF;
			margin-right: 13rpx;
		}
	}
	.copy{
		width: 100%;
		margin-bottom: 28rpx;
		text-align: center;
		font-size: 22rpx;
		color: #999999;
		position: relative;
		bottom: 0;
		left: 0;
	}
</style>
