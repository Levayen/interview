<template>
	<view class="content">
		<view class="no_data" v-if="noticeList.length === 0">
			暂无通知消息
		</view>
		<view class="notice_item" v-for="(item, index) in noticeList" :key="index">
			<view class="nitice_item_1">
				<view class="position">
					{{ item.post_name }}
				</view>
				<view class="ordinal">
					{{ item.current_interview }}
				</view>
			</view>
			<view class="notice_item_2">
				<view v-if="item.one > 0">
					<view><image src="/static/img/table_1.png" mode=""></image></view>
					<view>应聘登记表-1</view>
				</view>
				<view v-if="item.two > 0">
					<view><image src="/static/img/table_1.png" mode=""></image></view>
					<view>应聘登记表-2</view>
				</view>
			</view>
			<view class="notice_item_3">
				填表时间：{{ item.write_time }}
			</view>
			<view class="border_1"></view>
			<view class="notice_item_4">
				<view>
					<view class="item_name">面试时间：</view>
					<view class="item_content">{{ item.interview_time }}</view>
				</view>
				<view>
					<view class="item_name">面试地点：</view>
					<view class="item_content">{{ item.address }}</view>
				</view>
			</view>
			<view class="border_1"></view>
			<view class="notice_item_4">
				<view>
					<view class="item_name">交通路线：</view>
					<view class="item_content_red">{{ item.city_name }}</view>
				</view>
				<view>
					<view class="item_name">乘坐地铁：</view>
					<view class="item_content">{{item.subway_station_line}}{{ item.subway_station_name }}</view>
				</view>
				<view>
					<view class="item_name">乘坐公交：</view>
					<view class="item_content_1">
						<view>站台名称：{{ item.bus_station_name }} </view>	
						<view>公交车次：{{ item.bus_station_line }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				params:{
					pageSize: 10,
					pageNumber: 1
				},
				noticeList: [],
				noticeCount: 0
			}
		},
		onLoad() {
			this.getNotice()
		},
		onShow() {
			
		},
		onReachBottom(){
			this.params.pageNumber++
			this.getNotice()
		},
		methods: {
			getNotice(){
				this.$api.getNotice(this.params).then( res => {
					let arr = res.result.data
					for(let i in arr){
						this.noticeList.push(arr[i])
					}
					this.noticeCount = res.result.count
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.content{
		box-sizing: border-box;
		padding: 0 25rpx;
		padding-bottom: 30rpx;
	}
	.notice_item{
		width: 100%;
		margin-top: 28rpx;
		background-color: #FFFFFF;
		border-radius: 7rpx;
		box-sizing: border-box;
		padding: 35rpx 27rpx;
		box-shadow: 0 10rpx 10rpx rgba(92, 111, 180, 0.06);
	}
	.nitice_item_1{
		display: flex;
		align-items: center;
		.position{
			font-weight: bold;
		}
		.ordinal{
			width: 90rpx;
			height: 35rpx;
			line-height: 35rpx;
			text-align: center;
			font-size: 22rpx;
			border-radius: 3rpx;
			background-color: #5C6FB4;
			color: #FFFFFF;
			margin-left: 28rpx;
		}
	}
	.notice_item_2{
		display: flex;
		margin-top: 35rpx;
		>view{
			width: 257rpx;
			height: 69rpx;
			border-radius: 7rpx;
			background-color: #F9F9F9;
			margin-right: 29rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			>view{
				font-size: 25rpx;
				color: #333333;
				&:first-child{
					width: 24rpx;
					height: 31rpx;
					margin-right: 26rpx;
				}
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.notice_item_3{
		margin-top: 25rpx;
		font-size: 22rpx;
		color: #777777;
	}
	.border_1{
		width: 100%;
		height: 1rpx;
		background-color: #E5E5E5;
		margin: 30rpx 0;
	}
	.notice_item_4{
		font-size: 25rpx;
		>view{
			display: flex;
			margin-bottom: 33rpx;
			&:last-child{
				margin-bottom: 0;
			}
		}
		.item_content{
			color: #777777;
		}
		.item_content_1{
			color: #777777;
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			>view{
				word-break: break-word;
			}
		}
		.item_content_red{
			color: #E91616;
		}
		.item_name{
			flex-shrink: 0;
			color: #333333;
			margin-right: 23rpx;
		}
	}
	
</style>
