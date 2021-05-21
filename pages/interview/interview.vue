<template>
	<view class="content">
		<view class="no_data" v-if="positionList.length === 0">
			暂无在招岗位
		</view>
		<ul>
			<li v-for="(item, index) in positionList" :key="index"
			@click="goDetails" 
			:data-position="item.post_name"
			:data-post_id="item.post_id"
			>{{item.post_name}}</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				positionList: []
			};
		},
		onLoad(){
			this.getPositionList()
		},
		methods:{
			goDetails(e){
				console.log(e.currentTarget.dataset.position)
				let position = e.currentTarget.dataset.position
				let post_id = e.currentTarget.dataset.post_id
				uni.navigateTo({
					url:`../interviewDetails/interviewDetails?position=${position}&post_id=${post_id}`
				})
			},
			getPositionList(){
				this.$api.statistics({}).then( res => {
					console.log(res)
					this.positionList = res.result
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.content{
		padding: 28rpx 25rpx;
		ul{
			display: flex;
			flex-wrap: wrap;
			margin-right: -27rpx;
		}
		li{
			width: 215rpx;
			height: 111rpx;
			box-sizing: border-box;
			padding: 0 30rpx;
			display: flex;
			flex-direction: column;
			align-content: center;
			justify-content: center;
			background-color: #F0F0F0;
			color: #333333;
			font-size: 28rpx;
			border-radius: 7rpx;
			text-align: center;
			margin-right: 27rpx;
			margin-bottom: 27rpx;
		}
	}
</style>
