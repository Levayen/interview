<template>
	<view class="content">
		<view class="form_content">
			<view class="form_1">
				<view class="form_top">
					<view>基本信息</view>
					<view class="icon_2"><image src="../../static/img/to_top.png" mode=""></image></view>
				</view>
				<view class="form_item">
					<view>
						<view> 姓名：</view>
						<view> 张三 </view>
					</view>
					<view>
						<view> 性别：</view>
						<view> 女 </view>
					</view>
					<view>
						<view> 出生日期：</view>
						<view> 2020-5-05-10 </view>
					</view>
					<view>
						<view> 婚姻：</view>
						<view> 已婚 </view>
					</view>
					<view>
						<view> 户口：</view>
						<view> 城镇 </view>
					</view>
					<view>
						<view> 现住址：</view>
						<view> 深圳市宝安区 </view>
					</view>
				</view>
			</view>
			<view class="form_1">
				<view class="form_top">
					<view>岗位对应专业能力得分(100分，占比30%）</view>
					<view class="icon_2"><image src="../../static/img/to_top.png" mode=""></image></view>
				</view>
				<view class="question">
					<view class="question_item" v-for="(item, index) in 2" :key="index">
						<view class="title">
							已具备岗位专业能力（50分）
						</view>
						<view class="answer">
							<view :class="{'active': answer === 1}"> 
								<viwe>优秀：41-50分 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view>
								<viwe>优秀：41-50分 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view>
								<viwe>优秀：41-50分 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="form_2">
				<view class="form_top">
					<view>笔试（机试）得分（100分，占比40%）</view>
					<view class="icon_2"><image src="../../static/img/to_top.png" mode=""></image></view>
				</view>
				<view class="form_item_2">
					<view>
						<view> 笔试（机试）得分(分)：</view>
						<input type="text" value="" v-model="grade" max="100" placeholder="请填写分数"/>
					</view>
				</view>
			</view>
			<view class="form_1">
				<view class="form_top">
					<view>岗位对应专业能力得分(100分，占比30%）</view>
					<view class="icon_2"><image src="../../static/img/to_top.png" mode=""></image></view>
				</view>
				<view class="question">
					<view class="question_item" v-for="(item, index) in 2" :key="index">
						<view class="title">
							已具备岗位专业能力（50分）
						</view>
						<view class="answer">
							<view :class="{'active': answer === 1}"> 
								<viwe>优秀：41-50分 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view>
								<viwe>优秀：41-50分 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view>
								<viwe>优秀：41-50分 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="grader">
				<view>面试量化得分：</view>
				<view class="grader_input"><input type="number" value="" v-model="grade2" max="100" placeholder="请输入"/></view>
				<view>分</view>
			</view>
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
				grade2: ''
			};
		}
	}
</script>

<style lang="less" scoped>
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
	.form_top{
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
	.form_item_2{
		border-top: 20rpx solid #F6F6F6;
		>view{
			min-height: 97rpx;
			border-bottom: 	1rpx solid #F1F1F9;
			box-sizing: border-box;
			padding: 0 35rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 28rpx;
			color: #333333;
			&:last-child{
				border-bottom: none;
			}
			>view{
				&:first-child{
					flex-shrink: 0;
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
				height: 83rpx;
				box-sizing: border-box;
				padding: 0 31rpx;
				display: flex;
				align-items: center;
				background-color: #F9F9F9;
				border-radius: 7rpx;
				margin-bottom: 13rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				&.active{
					background-color: #EEF0F7;
					color: #5C6FB4;
					.icon_3{
						display: block;
					}
				}
				&:last-child{
					margin-bottom: 0;
				}
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
</style>
