<template>
	<view class="content">
		<view class="top">
			上传以下证件
		</view>
		<view class="main">
			<view class="main_item">
				<view class="main_item_1">
					<view class="item_title">
						学生证复印件
					</view>
					<view class="item_img">
						<view class="img_box" v-for="(citem, cindex) in student_id" :key="cindex">
							<view class="del" @click="delImg(cindex, 0)">
								<image src="/static/img/del.png" mode=""></image>
							</view>
							<image :src="citem" mode="" @click="preview(0)"></image>
						</view>
						<view class="img_box" @click="uploadImg(0)">
							<image src="/static/img/def.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="main_item_1">
					<view class="item_title">
						健康证复印件
					</view>
					<view class="item_img">
						<view class="img_box" v-for="(citem, cindex) in health_certificate" :key="cindex">
							<view class="del" @click="delImg(cindex, 1)">
								<image src="/static/img/del.png" mode=""></image>
							</view>
							<image :src="citem" mode="" @click="preview(1)"></image>
						</view>
						<view class="img_box" @click="uploadImg(1)">
							<image src="/static/img/def.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="main_item_1">
					<view class="item_title">
						上一家单位离职证明
					</view>
					<view class="item_img">
						<view class="img_box" v-for="(citem, cindex) in resignation_certificate" :key="cindex">
							<view class="del" @click="delImg(cindex, 2)">
								<image src="/static/img/del.png" mode=""></image>
							</view>
							<image :src="citem" mode="" @click="preview(2)"></image>
						</view>
						<view class="img_box" @click="uploadImg(2)">
							<image src="/static/img/def.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="main_item_1">
					<view class="item_title">
						身份证复印件
					</view>
					<view class="item_img">
						<view class="img_box" v-for="(citem, cindex) in id_card" :key="cindex">
							<view class="del" @click="delImg(cindex, 3)">
								<image src="/static/img/del.png" mode=""></image>
							</view>
							<image :src="citem" mode="" @click="preview(3)"></image>
						</view>
						<view class="img_box" @click="uploadImg(3)">
							<image src="/static/img/def.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="main_item_1">
					<view class="item_title">
						工资卡复印件
					</view>
					<view class="item_img">
						<view class="img_box" v-for="(citem, cindex) in salary_card" :key="cindex">
							<view class="del" @click="delImg(cindex, 4)">
								<image src="/static/img/del.png" mode=""></image>
							</view>
							<image :src="citem" mode="" @click="preview(4)"></image>
						</view>
						<view class="img_box" @click="uploadImg(4)">
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
			<view class="sub_btn" @click="subFileDetail">
				提 &nbsp; 交
			</view>
		</view>
	</view>
</template>

<script>
	import config from '../../utils/config.js'
	const baseUrl = config.baseUrl
	export default {
		data() {
			return {
				img: [],
				student_id: [], //学生证复印件
				health_certificate: [], //健康证复印件
				resignation_certificate: [], //上一家公司离职证明
				id_card: [], //身份证复印件
				salary_card: [], //工资卡复印件
				entrant_id:'', ////请求表单详情的参数
			};
		},
		onLoad(opt) {
			this.entrant_id = opt.id
			if(this.entrant_id > 0){
				this.getFormDetails()
			}
		},
		methods: {
			preview(th){
				let urls = []
				if(th === 0){
					urls = this.student_id
				}else if(th === 1){
					urls = this.health_certificate
				}else if(th === 2){
					urls = this.resignation_certificate
				}else if(th === 3){
					urls = this.id_card
				}else if(th === 4){
					urls = this.salary_card
				}
				// 预览图片
				uni.previewImage({
					urls: urls,
					success: (res) => {
						console.log(res)
					},
					fail: (err) => {
						console.log(err)
					}
				});
			},
			getFormDetails(){
				this.$api.rzFileDetail({certificate_id: this.entrant_id}).then( res => {
					console.log(res)
					let data = res.result
					this.student_id = data.student_id
					this.health_certificate = data.health_certificate
					this.resignation_certificate = data.resignation_certificate
					this.id_card = data.id_card
					this.salary_card = data.salary_card
				})
			},
			delImg(index, th) {
				if(th === 0){
					this.student_id.splice(index, 1)
				}else if(th === 1){
					this.health_certificate.splice(index, 1)
				}else if(th === 2){
					this.resignation_certificate.splice(index, 1)
				}else if(th === 3){
					this.id_card.splice(index, 1)
				}else if(th === 4){
					this.salary_card.splice(index, 1)
				}
			},
			uploadImg(th) {
				let that = this
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: function(res) {
						let filePath = res.tempFilePaths[0]
						uni.showLoading({
							title:'上传中'
						})
						uni.uploadFile({
							url: baseUrl + '/api/Upload/Upload',
							header: {
								"Authorization": 'Bearer ' + uni.getStorageSync('token')
							},
							filePath: filePath,
							name: 'file',
							success: (res) => {
								let data = JSON.parse(res.data)
								if(th == 0){
									that.student_id.push(data.result.url)
								}else if(th == 1){
									that.health_certificate.push(data.result.url)
								}else if(th == 2){
									that.resignation_certificate.push(data.result.url)
								}else if(th == 3){
									that.id_card.push(data.result.url)
								}else if(th == 4){
									that.salary_card.push(data.result.url)
								}
							},
							fail: (err) => {
								console.log(err)
							},
							complete() {
								uni.hideLoading()
							}
						})
					}
				});
			},
			subFileDetail(){
				let params = {
					student_id: this.student_id,
					health_certificate: this.health_certificate,
					resignation_certificate: this.resignation_certificate,
					id_card: this.id_card,
					salary_card: this.salary_card,
				}
				this.$api.subFileDetail(params).then( res => {
					console.log(res)
					uni.navigateBack()
				})
			},
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
