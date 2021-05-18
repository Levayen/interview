<template>
	<view class="content">
		<view class="top">
			上传以下证件
		</view>
		<view class="main">
			<view class="main_item">
				<view class="main_item_1" v-for="(item, index) in imgList" :key="index">
					<view class="item_title">
						{{ item.title }}
					</view>
					<view class="item_img">
						<view class="img_box" v-for="(citem, cindex) in item.list" :key="cindex">
							<view class="del" @click="delImg(cindex, index)">
								<image src="/static/img/del.png" mode=""></image>
							</view>
							<image :src="citem" mode=""></image>
						</view>
						<view class="img_box" @click="uploadImg(index)">
							<image src="/static/img/def.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom_btn">
			<view class="tip">
				注：以上资料纸质复印件、1寸照片2张一起交到人力资源部。
			</view>
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
				imgList: [{
						title: '学生证复印件',
						list: []
					},
					{
						title: '健康证复印件',
						list: []
					},
					{
						title: '上一家单位离职证明',
						list: []
					},
					{
						title: '身份证复印件',
						list: []
					},
					{
						title: '工资卡复印件',
						list: []
					},
				],
				img: []
			};
		},
		methods: {
			delImg(index, th) {
				this.imgList[th].list.splice(index, 1)
			},
			uploadImg(th) {
				let that = this
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: function(res) {
						that.imgList[th].list.push(...res.tempFilePaths)
						let filePath = res.tempFilePaths[0]
						uni.uploadFile({
							url: 'https://pre-sop-api.xiniu.com/api/Upload/Upload',
							header: {
								"Authorization": 'Bearer ' + uni.getStorageSync('token')
							},
							filePath: filePath,
							name: 'file',
							success: (res) => {
								console.log(res);
							},
							fail: (err) => {
								console.log(err)
							}
						})
					}
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.top {
		width: 100%;
		height: 97rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		background-color: #5C6FB4;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.bottom_btn {
		width: 100%;
		box-sizing: border-box;
		padding: 0 25rpx;
		padding-bottom: 33rpx;

		.tip {
			color: #999999;
			font-size: 25rpx;
			margin-bottom: 63rpx;
			margin-top: 32rpx;
		}

		.sub_btn {
			width: 100%;
			height: 83rpx;
			line-height: 83rpx;
			text-align: center;
			border-radius: 83rpx;
			color: #FFFFFF;
			background: linear-gradient(to left top, #5C6FB4, #758AD5);
		}
	}

	.main {
		box-sizing: border-box;
		padding: 28rpx 25rpx 0 25rpx;

		.main_item_1 {
			border-bottom: 1rpx solid #e5e5e5;
		}

		.main_item {
			background-color: #FFFFFF;
			border-radius: 7rpx;

			>view {
				box-sizing: border-box;
				padding: 42rpx;
			}

			.item_title {
				color: #333333;
				font-size: 28rpx;
				margin-bottom: 37rpx;
			}

			.item_img {
				display: flex;
				flex-wrap: wrap;
				margin-right: -42rpx;
				margin-bottom: -42rpx;
			}

			.img_box {
				width: 167rpx;
				height: 167rpx;
				border-radius: 7rpx;
				overflow: hidden;
				position: relative;
				margin-right: 42rpx;
				margin-bottom: 42rpx;

				.del {
					position: absolute;
					top: 0;
					right: 0;
					width: 42rpx;
					height: 42rpx;
					z-index: 10;

					>image {
						width: 100%;
						height: 100%;
					}
				}

				>image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
