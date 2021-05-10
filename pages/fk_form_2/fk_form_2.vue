<template>
	<view class="content">
		<view class="top_title">
			职位匹配度问答
		</view>
		<view class="form_content">
			<view class="grader_top">
				<view>
					面试量化得分：
				</view>
				<view>
					<span class="grader_num">89</span>  <span>分</span>
				</view>
			</view>
			<view>
				<view class="question">
					<view class="question_item">
						<view class="title">
							* 1、加入我司意愿？
						</view>
						<view class="answer">
							<view :class="{'active': answer === 1}"> 
								<viwe>强烈 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view>
								<viwe>一般 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view>
								<viwe>表现不太有兴趣 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
						</view>
					</view>
					<view class="question_item">
						<view class="title">
							* 2、是否愿意为公司搬家？
						</view>
						<view class="answer">
							<view :class="{'active': answer === 1}"> 
								<viwe>是 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view>
								<viwe>否 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view :class="{'active': answer === 1}">
								<view class="answer_2">
									<viwe>距离近，不用搬家 </viwe>
									<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
								</view>
								<view class="distance">
									<view>现住址到公司车程：</view>
									<view>
										<view class="grader_input"><input type="number" value="" v-model="distance" max="100" placeholder="请输入"/></view>
									</view>
									<view>分钟</view>
								</view>
							</view>
						</view>
					</view>
					<view class="question_item">
						<view class="title">
							* 3、对突击加班的看法？
						</view>
						<view class="answer">
							<view :class="{'active': answer === 1}"> 
								<viwe>应该的，以前有过经历 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view>
								<viwe>没有太多加班经历，安排可以加班 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view>
								<viwe>不太愿意 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="from_1">
				<view class="form_top">
					<view>本轮面试结果</view>
					<view class="icon_2"><image src="../../static/img/to_top.png" mode=""></image></view>
				</view>
				<view class="question">
					<view class="question_item">
						<view class="answer">
							<view :class="{'active': answer === 1}"> 
								<viwe>通过 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view>
								<viwe>不通过 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view class="textarea">
								<textarea value="" placeholder="可简要填写不通过原因" />
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="radio_wrap">
			<label class="radio">
				<radio value="" :checked="isChecked" @click="selectRadio" color="#5C6FB4"/><text> 加入重点跟踪人才库 </text>
			</label>
		</view>
		<view class="bottom_btn">
			<view class="sub_btn">
				提 &nbsp; 交
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				answer: 1,
				grade1: '',
				grade2: '',
				isChecked: false
			};
		},
		methods:{
			selectRadio(){
				this.isChecked = !this.isChecked
			}
		}
	}
</script>

<style lang="less" scoped>
	.top_title{
		width: 100%;
		height: 97rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding: 0 25rpx;
		background-color: #5C6FB4;
		color: #FFFFFF;
		font-size: 28rpx;
	}
	.form_content {
		width: 100%;
		box-sizing: border-box;
		padding: 0 25rpx;
		padding-bottom: 28rpx;
		> view{
			margin-top: 28rpx;
			width: 100%;
			border-radius: 7rpx;
			background-color: #FFFFFF;
			overflow: hidden;
		}
	}
	.form_1{
		>view{
			&:first-child{
				min-height: 97rpx;
				border-bottom: 	1rpx solid #F1F1F9;
				box-sizing: border-box;
				padding: 0 35rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 28rpx;
				color: #333333;
			}
			&:nth-child(2){
				border-top: none !important;
			}
		}
	}
	.form_2{
		>view{
			&:first-child{
				min-height: 97rpx;
				border-bottom: 	1rpx solid #F1F1F9;
				box-sizing: border-box;
				padding: 0 35rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 28rpx;
				color: #333333;
			}
			&:nth-child(2){
				border-top: none !important;
			}
		}
	}
	.form_top{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 97rpx;
		box-sizing: border-box;
		padding: 0 35rpx;
		color: #FFFFFF !important;
		font-size: 28rpx;
		background-color: #5C6FB4;
	}
	.icon_2{
		width: 30rpx;
		height: 30rpx;
		margin-left: 22rpx;
		>image{
			width: 100%;
			height: 100%;
		}
	}
	.icon_3{
		display: none;
		width: 30rpx;
		height: 30rpx;
		>image{
			width: 100%;
			height: 100%;
		}
}
	.form_item{
		padding: 28rpx 0;
		>view{
			line-height: 55rpx;
			box-sizing: border-box;
			padding: 0 35rpx;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			font-size: 28rpx;
			color: #333333;
			>view{
				&:first-child{
					flex-shrink: 0;
					width: 140rpx;
					margin-right: 38rpx;
				}
				&:last-child{
					color: #777777;
				}
			}
		}
		input{
			text-align: right;
			font-size: 25rpx;
		}
	}

	.bottom_btn{
		width: 100%;
		box-sizing: border-box;
		padding: 0 25rpx;
		padding-bottom: 33rpx;
		.sub_btn{
			width: 100%;
			height: 83rpx;
			line-height: 83rpx;
			text-align: center;
			border-radius: 83rpx;
			color: #FFFFFF;
			background: linear-gradient(to left top, #5C6FB4, #758AD5);
		}
	}
	.question{
		width: 100%;
		box-sizing: border-box;
		padding: 45rpx 34rpx;
		>view{
			margin-bottom: 55rpx;
			&:last-child{
				margin-bottom: 0;
			}
		}
		.title{
			font-size: 28rpx;
			margin-bottom: 33rpx;
		}
		.answer{
			>view{
				font-size: 25rpx;
				width: 100%;
				min-height: 83rpx;
				box-sizing: border-box;
				padding: 0 31rpx;
				display: flex;
				align-items: center;
				background-color: #F9F9F9;
				border-radius: 7rpx;
				margin-bottom: 13rpx;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				&.active{
					background-color: #EEF0F7;
					color: #5C6FB4;
					.icon_3{
						display: block;
					}
					.grader_input{
						background-color: #F9F9F9 !important;
					}
				}
				&:last-child{
					margin-bottom: 0;
				}
			}
			.answer_2{
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 70rpx;
			}
		}
	}
	.grader{
		width: 100%;
		height: 97rpx;
		border-radius: 80rpx !important;
		box-sizing: border-box;
		padding:  0 33rpx;
		border: 1rpx solid #5C6FB4;
		color: #5C6FB4;
		display: flex;
		align-items: center;
		font-size: 28rpx;
		justify-content: space-between;
		.grader_input{
			width: 382rpx;
			height: 63rpx;
			border-radius: 63rpx;
			background-color: #EEF0F7;
			box-sizing: border-box;
			padding: 0 44rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.grader_top{
		height: 83rpx;
		background-color: #4CC360 !important;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 33rpx;
		font-size: 28rpx;
		.grader_num{
			font-size: 33rpx;
			margin-right: 192rpx;
		}
	}
	.distance{
		width: 100%;
		min-height: 96rpx;
		display: flex;
		align-items: center;
		border-top: 1rpx solid #E5E5E5;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #777777 !important;
		.grader_input{
			width: 264rpx;
			height: 63rpx;
			border-radius: 63rpx;
			background-color: #EEF0F7;
			box-sizing: border-box;
			padding: 0 44rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.textarea{
		padding-top: 28rpx !important;
		padding-bottom: 28rpx !important;
		textarea{
			resize: none;
		}
	}
	.radio_wrap{
		width: 100%;
		box-sizing: border-box;
		padding: 0 25rpx;
		display: flex;
		align-items: center;
		margin-bottom: 50rpx;
		color: #999999;
		font-size: 25rpx;
		label{
			display: flex;
			align-items: center;
		}
		radio{
			transform: scale(.8);
		}
	}
</style>
