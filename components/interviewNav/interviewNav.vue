<template>
	<view class="content">
		<view class="nav">
			<view @click="changeStatus(1)" :class="{ 'active': status === 1 }">待面试(0)</view>
			<view @click="changeStatus(2)" :class="{ 'active': status === 2 }">通过(0)</view>
			<view @click="changeStatus(3)" :class="{ 'active': status === 3 }">未通过(0)</view>
		</view>
		<view class="search">
			<view class="search_box">
				<view class="search_input"><input type="text" value="" placeholder="请输入面试者姓名"/></view>
				<view class="search_btn">搜索</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 1
			};
		},
		props:[
			
		],
		methods:{
			changeStatus(val){
				this.status = val
				this.$emit('changeTab', val)
			}
		}
	}
</script>

<style lang="less" scoped>
	.nav{
		width: 100%;
		height: 97rpx;
		box-sizing: border-box;
		background-color: #5C6FB4;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 28rpx;
		>view{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			&::after{
				content: '';
				display: block;
				width: 56rpx;
				height: 3rpx;
				background-color: #5C6FB4;
				margin-top: 17rpx;
			}
			&.active::after{
				content: '';
				display: block;
				width: 56rpx;
				height: 3rpx;
				background-color: #FFFFFF;
				margin-top: 17rpx;
			}
		}
		
	}
	.search{
		width: 100%;
		box-sizing: border-box;
		padding:  0 25rpx;
		margin-top: 28rpx;
		.search_box{
			width: 100%;
			height: 83rpx;
			border-radius: 7rpx;
			overflow: hidden;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #FFFFFF;
			.search_input{
				width: 100%;
				font-size: 25rpx;
				box-sizing: border-box;
				padding: 0 28rpx;
			}
			.search_btn{
				width: 153rpx;
				height: 100%;
				font-size: 28rpx;
				background-color: #5C6FB4;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>
