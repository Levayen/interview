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
						<view> {{ user_info.realname }} </view>
					</view>
					<view>
						<view> 性别：</view>
						<view> {{ user_info.sex ? '女':'男' }} </view>
					</view>
					<view>
						<view> 出生日期：</view>
						<view> {{ user_info.birthday }} </view>
					</view>
					<view>
						<view> 婚姻：</view>
						<view> {{ user_info.marital }} </view>
					</view>
					<view>
						<view> 户口：</view>
						<view> {{ user_info.hukou ? '城镇':'农村' }} </view>
					</view>
					<view>
						<view> 现住址：</view>
						<view> {{ user_info.current_address }} </view>
					</view>
				</view>
			</view>
			<view class="form_1">
				<view class="form_top">
					<view>岗位对应专业能力得分(100分，占比30%）</view>
					<view class="icon_2"><image src="../../static/img/to_top.png" mode=""></image></view>
				</view>
				<view class="question">
					<view class="question_item" v-for="(item, index) in majorScore" :key="index">
						<view class="title">
							 <span style="margin-right: 10rpx;" class="red">*</span>{{item.title}}
						</view>
						<view class="answer">
							<view v-for="(citem, cindex) in item.options" :key="cindex"
							:class="{'active': citem.checked === 1}"
							@click="selectPanswer(index, cindex)"> 
								<viwe> {{citem.txt}} </viwe>
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
						<view> <span style="margin-right: 10rpx;" class="red">*</span> 笔试（机试）得分(分)：</view>
						<input :disabled="form_id > 0" type="number" value="" v-model="practical_score" min="0" max="100" placeholder="请填写分数"/>
					</view>
				</view>
			</view>
			<view class="form_1">
				<view class="form_top">
					<view>综合素质得分（100分，占比30%）</view>
					<view class="icon_2"><image src="../../static/img/to_top.png" mode=""></image></view>
				</view>
				<view class="question">
					<view class="question_item" v-for="(item, index) in qualityScore" :key="index">
						<view class="title">
							 <span style="margin-right: 10rpx;" class="red">*</span>{{item.title}}
						</view>
						<view class="answer">
							<view v-for="(citem, cindex) in item.options" :key="cindex"
							:class="{'active': citem.checked === 1}"
							@click="selectCanswer(index, cindex)">
								<viwe>{{ citem.txt }} </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="grader">
				<view> <span style="margin-right: 10rpx;" class="red">*</span>面试量化得分：</view>
				<view class="grader_input">
					<input :disabled="form_id > 0" type="number" value="" v-model="total" min="0" max="100" placeholder="请输入"/>
				</view>
				<view>分</view>
			</view>
		</view>
		
		<view class="bottom_btn" v-if="form_id == 0">
			<view class="sub_btn" @click="submit">
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
				practical_score: '',
				total: '',
				majorScore:[
					{ 
						id: 1,
						title: '已具备岗位专业能力（50分）', 
						options: [
							{ id: 1, txt: '优秀：41-50分', checked: 0 },
							{ id: 2, txt: '胜任：30-40', checked: 0 },
							{ id: 3, txt: '不合适：1-29分', checked: 0 }
						] ,
					},
					{
						id: 2,
						title: '可成长岗位专业潜力（20分）', 
						options: [
							{ id: 1, txt: '学习力优秀：17-20分', checked: 0 },
							{ id: 2, txt: '学习力胜任：12-16', checked: 0 },
							{ id: 3, txt: '学习力不合适：1-11分', checked: 0 }
						] ,  
					},
					{
						id: 3,
						title: '岗位对应专业工作简历（30分）', 
						options: [
							{ id: 1, txt: '知识面优秀：25-30分', checked: 0 },
							{ id: 2, txt: '知识面胜任：18-24', checked: 0 },
							{ id: 3, txt: '知识面不合适：1-17分', checked: 0 }
						] ,  
					}
				],
				
				qualityScore: [
					{
						id: 1,
						title: '1、仪容仪表（10分）', 
						options: [
							{ id: 1, txt: '优秀：9-10分', checked: 0 },
							{ id: 2, txt: '胜任：6-8分', checked: 0 },
							{ id: 3, txt: '不合适：1-5分', checked: 0 }
						] ,  
					},
					{
						id: 2,
						title: '2、自我介绍（10分）', 
						options: [
							{ id: 1, txt: '优秀：9-10分', checked: 0 },
							{ id: 2, txt: '胜任：6-8分', checked: 0 },
							{ id: 3, txt: '不合适：1-5分', checked: 0 }
						] ,  
					},
					{
						id: 3,
						title: '3、沟通（理解、演讲）能力（10分）', 
						options: [
							{ id: 1, txt: '优秀：9-10分', checked: 0 },
							{ id: 2, txt: '胜任：6-8分', checked: 0 },
							{ id: 3, txt: '不合适：1-5分', checked: 0 }
						] ,  
					},
					{
						id: 4,
						title: '4、逻辑能力（10分）', 
						options: [
							{ id: 1, txt: '优秀：9-10分', checked: 0 },
							{ id: 2, txt: '胜任：6-8分', checked: 0 },
							{ id: 3, txt: '不合适：1-5分', checked: 0 }
						] ,  
					},
					{
						id: 5,
						title: '5、解决问题（回答）能力（10分）', 
						options: [
							{ id: 1, txt: '优秀：9-10分', checked: 0 },
							{ id: 2, txt: '胜任：6-8分', checked: 0 },
							{ id: 3, txt: '不合适：1-5分', checked: 0 }
						] ,  
					},
					{
						id: 6,
						title: '6、抗压（拿结果）能力（10分）', 
						options: [
							{ id: 1, txt: '优秀：9-10分', checked: 0 },
							{ id: 2, txt: '胜任：6-8分', checked: 0 },
							{ id: 3, txt: '不合适：1-5分', checked: 0 }
						] ,  
					},
					{
						id: 7,
						title: '7、体力（身体素质）能力（10分）', 
						options: [
							{ id: 1, txt: '优秀：9-10分', checked: 0 },
							{ id: 2, txt: '胜任：6-8分', checked: 0 },
							{ id: 3, txt: '不合适：1-5分', checked: 0 }
						] ,  
					},
					{
						id: 8,
						title: '8、团队协助（汇报、计划）能力（10分）', 
						options: [
							{ id: 1, txt: '优秀：9-10分', checked: 0 },
							{ id: 2, txt: '胜任：6-8分', checked: 0 },
							{ id: 3, txt: '不合适：1-5分', checked: 0 }
						] ,  
					},
					{
						id: 9,
						title: '9、管理（时间管理）能力（1分）', 
						options: [
							{ id: 1, txt: '优秀：9-10分', checked: 0 },
							{ id: 2, txt: '胜任：6-8分', checked: 0 },
							{ id: 3, txt: '不合适：1-5分', checked: 0 }
						] ,  
					},
					{
						id: 10,
						title: '10、创新能力（10分）', 
						options: [
							{ id: 1, txt: '优秀：9-10分', checked: 0 },
							{ id: 2, txt: '胜任：6-8分', checked: 0 },
							{ id: 3, txt: '不合适：1-5分', checked: 0 }
						] ,  
					},
				],
				p_question: {},
				c_question: {},
				record_id:'',
				user_id: '',
				user_info: null,
				form_id: 0,
			};
		},
		onLoad(opt) {
			this.record_id = opt.recordId
			this.user_id = opt.intervieweeId
			this.form_id = opt.form_id
			this.getUserInfo()
			if(this.form_id > 0){
				this.getFormDetails()
			}
		},
		methods:{
			getFormDetails(){
				this.$api.getFormDetail3({oneId: this.form_id}).then(res => {
					let data = res.result
					this.record_id = data.record_id
					this.practical_score = data.practical_score
					this.total = data.total
					let p = {}, c = {}
					for(let i in data){
						if(i.indexOf('p_question_') != -1){
							p[i] = data[i]
						}
						if(i.indexOf('c_question_') != -1){
							c[i] = data[i]
						}
					}
					//回显选择的选项
					for(let i in p){
						let arr = i.split('_')
						let id = arr[arr.length - 1]
						let value = p[i]
						for(let n in this.majorScore){	
							if(this.majorScore[n].id == id){
								this.majorScore[n].options[value - 1].checked = 1	
							}					
						}
					}
					for(let i in c){
						let arr = i.split('_')
						let id = arr[arr.length - 1]
						let value = c[i]
						for(let n in this.qualityScore){	
							if(this.qualityScore[n].id == id){
								this.qualityScore[n].options[value - 1].checked = 1	
							}					
						}
					}
				})
			},
			selectPanswer(q, a){
				if(this.form_id > 0){
					return
				}
				let arr = this.majorScore[q].options
				arr.forEach(item => {
					item.checked = 0
				})
				arr[a].checked = 1
				let key = `p_question_${this.majorScore[q].id}`
				let value = arr[a].id
				this.p_question[key] = value
			},
			
			selectCanswer(q, a){
				if(this.form_id > 0){
					return
				}
				let arr = this.qualityScore[q].options
				arr.forEach(item => {
					item.checked = 0
				})
				arr[a].checked = 1
				let key = `c_question_${this.qualityScore[q].id}`
				let value = arr[a].id
				this.c_question[key] = value
			},
			getUserInfo(){
				this.$api.getUserInfo({intervieweeId: this.user_id}).then(res => {
					let obj = res.result
					if(obj.marital_status === 0){
						this.$set(obj, 'marital', '未婚') 
					}else if(obj.marital_status === 1){
						this.$set(obj, 'marital', '已婚') 
					}else if(obj.marital_status === 2){
						this.$set(obj, 'marital', '离异') 
					}
					obj.birthday = obj.birthday.split(' ')[0]
					this.user_info = res.result
				})
			},
			submit(){
				if(Object.keys(this.p_question).length < 3){
					uni.showToast({
						title:"带星号的为必填项",
						icon:"none"
					})
					return
				}
				if(Object.keys(this.c_question).length < 10){
					uni.showToast({
						title:"带星号的为必填项",
						icon:"none"
					})
					return
				}
				if(this.practical_score == '' || this.total == ''){
					uni.showToast({
						title:"带星号的为必填项",
						icon:"none"
					})
					return
				}
				let params = {
					record_id: this.record_id,
					practical_score: this.practical_score,
					total: this.total,
					...this.p_question,
					...this.c_question
				}
				uni.showLoading({
					title:"提交中"
				})
				this.$api.feedbackOne(params).then( res => {
					uni.hideLoading()
					uni.navigateTo({
						url:`../fk_form_2/fk_form_2?total=${this.total}&record_id=${this.record_id}`
					})
				})
			}
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
