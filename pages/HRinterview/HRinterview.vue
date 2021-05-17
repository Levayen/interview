<template>
	<view class="content">
		<InterviewNav :statistics="statistics" @changeTab="changeStatus"></InterviewNav>
		<view class="main">
			<view v-for="(item, index) in dataList" :key="index" v-if="paramsList.status === 0">
				<view class="item">
					<view class="item_top">
						<view class="title">
							{{ item.post_name }}
						</view>
						<view class="name">
							<view>{{ item.realname}}({{ item.sex }})</view>
							<view class="see" @click="openDocument(item.resume_file_url)">
								<view class="icon_2"><image src="/static/img/icon_1.png" mode=""></image></view>
								<view>查看简历</view>
							</view>
						</view>
						<view class="department">
							用人部门：{{ item.department_name }}
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
							填表时间：{{ item.write_time }}
						</view>
					</view>
					<view class="item_middle" v-for="(citem, cindex) in item.records" :key="cindex">
						<view v-if="cindex != (item.records.length - 1)">
						<!-- <view> -->
							<view class="middle_1">
								<view class="first_btn">{{ citem.current_interview_text }}</view>
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
								面试安排时间： <span>{{ citem.interview_time }}</span>
							</view>
							<view class="first_result">
								面试结果： 
								<span v-if="citem.status === 1" class="passed">通过</span>
								<span v-if="citem.status === 2" class="not_pass">未通过</span>
							</view>
						</view>
						<view v-else class="arrange">
						<!-- <view class="arrange"> -->
							<view class="btn">{{ citem.current_interview_text }}</view>
							<view class="arrange_time">
								<view>面试安排时间：</view>
								<view>{{ citem.interview_time }}</view>
							</view>
						</view>
					</view>
					<view class="item_bottom" v-if="paramsList.interview_round == 0 ">
						<view @click="fkForm3(item.recordId, item)">
							<view class="icon_1"><image src="../../static/img/edit.png" mode=""></image></view>
							<view>填写面试反馈表</view>
						</view>
					</view>
					<view class="item_bottom" v-else>
						<view @click="goBack(item.recordId, index)">
							<view class="icon_1"><image src="../../static/img/back_1.png" mode=""></image></view>
							<view>退回</view> 
						</view>
						<view @click="fkForm(item.recordId, item.intervieweeId)">
							<view class="icon_1"><image src="../../static/img/edit.png" mode=""></image></view>
							<view>填写面试反馈表</view>
						</view>
					</view>
				</view>
			</view>
			<view v-for="(item, index) in dataList" :key="index" v-if="paramsList.status === 1">
				<view class="item">
					<view class="item_top">
						<view class="title">
							{{ item.post_name }}
						</view>
						<view class="name">
							<view>{{ item.realname}}({{ item.sex }})</view>
							<view class="see" @click="openDocument(item.resume_file_url)">
								<view class="icon_2"><image src="/static/img/icon_1.png" mode=""></image></view>
								<view>查看简历</view>
							</view>
						</view>
						<view class="department">
							用人部门：{{ item.department_name }}
						</view>
						<view class="form">
							<view>
								<view v-if="item.one === 1" class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
								<view>应聘登记表-1</view>
							</view>
							<view>
								<view v-if="item.two === 1" class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
								<view>应聘登记表-2</view>
							</view>
						</view>
						<view class="time">
							填表时间：{{ item.write_time }}
						</view>
					</view>
					<view class="item_middle" v-for="(citem, cindex) in item.records" :key="cindex">
						<view>
							<view class="arrange_2">
								<view class="btn">{{ citem.current_interview_text }}</view>
								<view class="arrange_time">
									<view>面试安排时间：</view>
									<view>{{ citem.interview_time }}</view>
								</view>
							</view>
							<view class="interviewer" v-for="(sitem, sindex) in citem.details" :key="sindex">
								<view class="result_1">
									<view>面试官{{sindex + 1}}：{{sitem.name}}</view>
									<view>面试得分：{{ sitem.score }}</view>
								</view>
								<view class="form">
									<view v-if="sitem.one != 0">
										<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
										<view>面试反馈表-1</view>
									</view>
									<view v-if="sitem.two != 0">
										<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
										<view>面试反馈表-2</view>
									</view>
									<view  v-if="sitem.three != 0">
										<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
										<view>面试反馈表-3</view>
									</view>
								</view>
							</view>
						</view>
						<view class="result_2">
							<view>综合得分：<span>{{ citem.score }}</span></view>
							<view v-show="citem.status === 1">面试结果：<span>通过</span></view>
							<view v-show="citem.status === 2">面试结果：<span>未通过</span><span></span></view>
						</view>
					</view>
				</view>
			</view>
			<view v-for="(item, index) in dataList" :key="index" v-if="paramsList.status === 2">
				<view class="item">
					<view class="item_top">
						<view class="title">
							{{ item.post_name }}
						</view>
						<view class="name">
							<view>{{ item.realname}}({{ item.sex }})</view>
							<view class="see" @click="openDocument(item.resume_file_url)">
								<view class="icon_2"><image src="/static/img/icon_1.png" mode=""></image></view>
								<view>查看简历</view>
							</view>
						</view>
						<view class="department">
							用人部门：{{ item.department_name }}
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
							填表时间：{{ item.write_time }}
						</view>
					</view>
					<view class="item_middle" v-for="(citem, cindex) in item.records" :key="cindex">
						<view>
							<view class="arrange_2">
								<view class="btn">{{ citem.current_interview_text }}</view>
								<view class="arrange_time">
									<view>面试安排时间：</view>
									<view>{{ citem.interview_time }}</view>
								</view>
							</view>
							<view class="interviewer" v-for="(sitem, sindex) in citem.details" :key="sindex">
								<view class="result_1">
									<view>面试官{{sindex + 1}}：{{sitem.name}}</view>
									<view>面试得分：{{ sitem.score }}</view>
								</view>
								<view class="form">
									<view v-if="sitem.one != 0">
										<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
										<view>面试反馈表-1</view>
									</view>
									<view v-if="sitem.two != 0">
										<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
										<view>面试反馈表-2</view>
									</view>
									<view  v-if="sitem.three != 0">
										<view class="icon_3"><image src="/static/img/table_1.png" mode=""></image></view>
										<view>面试反馈表-3</view>
									</view>
								</view>
							</view>
						</view>
						<view class="result_2">
							<view>综合得分：<span>{{ citem.score }}</span></view>
							<view v-show="citem.status === 1">面试结果：<span>通过</span></view>
							<view v-show="citem.status === 2">面试结果：<span>未通过</span><span></span></view>
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
				dataList: [],
				statistics: {
					wait: 0,
					passed: 0,
					notPass: 0
				},
				paramsList: {
					status: 0,
					interview_round : 1,
					pageSize : 10,
					pageNumber : 1,
				},
				pageTitle:''
			};
		},
		onLoad(opt) {
			//0：HR面、1：一面、2：二面、3：三面、4：四面
			this.paramsList.interview_round = opt.round
			console.log(opt)
			if(opt.round === "0"){
				this.pageTitle = 'HR面'
			}else if(opt.round === "1"){
				this.pageTitle = '一面'
			}else if(opt.round === "2"){
				this.pageTitle = '二面'
			}else if(opt.round === "3"){
				this.pageTitle = '三面'
			}else if(opt.round === "4"){
				this.pageTitle = '四面'
			}
			uni.setNavigationBarTitle({
				title: this.pageTitle
			});
		},
		onShow() {
			this.getInterviewList()
		},
		methods:{
			//退回
			goBack(id, index){
				this.$api.goBack({recordId: id}).then( res => {
					console.log(res)
					this.dataList.splice(index, 1)
				})
			},
			getInterviewList(){
				this.$api.interviewList(this.paramsList).then( res => {
					console.log(res)
					this.dataList = res.result.data
					this.statistics = res.result.statistics

				})
			},
			changeStatus(val){
				this.paramsList.status = val
				this.getInterviewList()
			},
			fkForm(id, userId, item){
				uni.navigateTo({
					url: `../fk_form_1/fk_form_1?recordId=${id}&intervieweeId=${userId}`
				})
			},
			fkForm2(id){
				uni.navigateTo({
					url: `../fk_form_2/fk_form_2?recordId=${id}`
				})
			},
			fkForm3(id, item){
				console.log(id)
				let scoreTotal = 0
				let interviewer = 0
				let average = 0
				item.records.forEach( t => {
					interviewer += t.details.length
					t.details.forEach( d => {
						scoreTotal += d.score
					})
				})
				average = Math.round(scoreTotal/interviewer)
				console.log(average)
				uni.navigateTo({
					url: `../fk_form_3/fk_form_3?recordId=${id}&average=${average}`
				})
			},
			openDocument(url){
				uni.downloadFile({
				  url: url,
				  success: function (res) {
				    var filePath = res.tempFilePath;
				    uni.openDocument({
				      filePath: filePath,
				      success: function (res) {
				        console.log('打开文档成功');
				      }
				    });
				  }
				});
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
					width: 100%;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 25rpx;
					color: #5C6FB4;
					&:nth-child(2){
						color: #333333;
						border-left: 1rpx solid #f1f1f5;
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
		// margin-top: 35rpx;
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
	.item_middle_1{
		width: 100%;
		box-sizing: border-box;
		padding: 0 28rpx;
		.arrange{
			margin-top: 0 !important;
			margin-bottom: 35rpx;
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
				&.passed{
					color: #4CC360;
					margin-left: 60rpx;
				}
				&.not_pass{
					color: #FF0000;
					margin-left: 60rpx;
				}
				
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
