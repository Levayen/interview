<template>
	<view class="content">
		<view class="top_title" v-if="!isFinish">
			<view class="top_left">
				<view class="icon_1"><image src="/static/img/table_2.png" mode=""></image></view>
				<view>应聘登记表-2</view>
			</view>
			<view class="top_right">
				<view class="select_btn">
					{{post_name}}
				</view>
			</view>
		</view>
		<view class="mian" v-if="!isFinish">
			<view class="title_1">
				职位匹配度问答（共10题）
			</view>
			<view class="question_wrap" v-if="qIndex == 1">
				<view class="question">
					<view><span style="margin-right: 10rpx;" class="red">*</span> 1、您现在是否在职？</view>
				</view>
				<view class="answer">
					<view class="radio">
						<view @click="selectAnswer1(1)" :class="{active: question_1  === 1}">在职</view>
						<view @click="selectAnswer1('0')" :class="{active: question_1  == '0'}">离职</view>
					</view>
					<view class="answer_text">
						<textarea value="" maxlength="50" v-model="question_1_reason" placeholder="请简要填写离职原因" />
					</view>
				</view>
			</view>
			<view class="question_wrap" v-if="qIndex == 2">
				<view class="question">
					<view><span style="margin-right: 10rpx;" class="red">*</span> 2、从以住的工作经验（或求学经验）中，您认为   自己哪些能力较为优秀？哪些能力有待加强？</view>
				</view>
				<view class="answer">
					<view class="answer_text">
						<textarea value="" maxlength="50" v-model="question_2" placeholder="请填写回答" />
					</view>
				</view>
			</view>
			<view class="question_wrap" v-if="qIndex == 3">
				<view class="question">
					<view><span style="margin-right: 10rpx;" class="red">*</span> 3、请简述您今后两年内在工作上希望达成的目标  或发展的方向？</view>
				</view>
				<view class="answer">
					<view class="answer_text">
						<textarea value="" maxlength="50" v-model="question_3" placeholder="请填写回答" />
					</view>
				</view>
			</view>
			<view class="question_wrap" v-if="qIndex == 4">
				<view class="question">
					<view><span style="margin-right: 10rpx;" class="red">*</span> 4、您选择一个公司考虑的因素有哪些？请列举三  项，并排优先级。</view>
				</view>
				<view class="answer">
					<view class="answer_text">
						<textarea value="" maxlength="50" v-model="question_4" placeholder="请填写回答" />
					</view>
				</view>
			</view>
			<view class="question_wrap" v-if="qIndex == 5">
				<view class="question">
					<view><span style="margin-right: 10rpx;" class="red">*</span> 5、请列举4点有力的理由证明您适合当前职位，  是本司所需人才。？</view>
				</view>
				<view class="answer">
					<view class="answer_text">
						<textarea value="" maxlength="50" v-model="question_5" placeholder="请填写回答" />
					</view>
				</view>
			</view>
			<view class="question_wrap" v-if="qIndex == 6">
				<view class="question">
					<view><span style="margin-right: 10rpx;" class="red">*</span> 6、是否接受公司进行背景调查？</view>
				</view>
				<view class="answer">
					<view class="radio">
						<view @click="selectAnswer6(1)" :class="{active: question_6  === 1}">是</view>
						<view @click="selectAnswer6('0')" :class="{active: question_6  == '0'}">否</view>
					</view>
				</view>
			</view>
			<view class="question_wrap" v-if="qIndex == 7">
				<view class="question">
					<view><span style="margin-right: 10rpx;" class="red">*</span> 7、有无亲朋或同学在本公司？？</view>
				</view>
				<view class="answer">
					<view class="radio">
						<view @click="selectAnswer7('0')" :class="{active: question_7  == '0'}">无</view>
						<view @click="selectAnswer7(1)" :class="{active: question_7  == 1}">有</view>
					</view>
					<view class="answer_input">
						<view>
							<view><span style="margin-right: 10rpx;" class="red">*</span> 姓名 </view>
							<input type="text" value="" v-model="name" placeholder="请填写姓名"/>
						</view>
						<view>
							<view><span style="margin-right: 10rpx;" class="red">*</span> 职务 </view>
							<input type="text" value="" v-model="position" placeholder="请填写职务"/>
						</view>
					</view>
				</view>
			</view>
			<view class="question_wrap" v-if="qIndex == 8">
				<view class="question">
					<view><span style="margin-right: 10rpx;" class="red">*</span> 8、现住所性质？</view>
				</view>
				<view class="answer">
					<view class="radio">
						<view @click="selectAnswer8('0')" :class="{active: question_8 === '0'}">自有房产</view>
						<view @click="selectAnswer8(1)" :class="{active: question_8 === 1}">借住亲友住房</view>
						<view @click="selectAnswer8(2)" :class="{active: question_8 === 2}">自行租住</view>
						<view @click="selectAnswer8(3)" :class="{active: question_8 === 3}">需要公司安排</view>
					</view>
				</view>
			</view>
			<view class="question_wrap" v-if="qIndex == 9">
				<view class="question">
					<view><span style="margin-right: 10rpx;" class="red">*</span> 9、如果本公决定录用您入职：</view>
				</view>
				<view class="answer">
					<view class="answer_select">
						<view>
							<view>您可以（希望）上班时间 </view>
							<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="select_btn_2" v-if="date === ''">
									<view>请选择</view>
									<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
								</view>
							     <view class="uni-input">{{date}}</view>
							</picker>
						</view>
						<view>
							<view>您期望薪资：</view>
							<input type="number" value="" v-model="question_9_salary" placeholder="请填写"/>
						</view>
					</view>
				</view>
			</view>
			<view class="question_wrap" v-if="qIndex == 10">
				<view class="question">
					<view><span style="margin-right: 10rpx;" class="red">*</span> 10、获知本职位招聘信息的渠道：</view>
				</view>
				<view class="answer">
					<view class="answer_input_2">
						<view @click="selectAnswer10('0')" :class="{active: question_10 === '0'}">
							<view> 招聘网站 </view>
							<input v-if="question_10 === '0'" type="text" value="" v-model="question_10_text" placeholder="请填写"/>
							<input v-else type="text" value=""  placeholder="请填写"/>
						</view>
						<view @click="selectAnswer10(1)" :class="{active: question_10 === 1}">
							<view> 招聘会 </view>
							<input v-if="question_10 === 1" type="text" value="" v-model="question_10_text" placeholder="请填写"/>
							<input v-else type="text" value=""  placeholder="请填写"/>
						</view>
						<view @click="selectAnswer10(2)" :class="{active: question_10 === 2}">
							<view> 朋友推荐 </view>
							<input v-if="question_10 === 2" type="text" value="" v-model="question_10_text" placeholder="请填写"/>
							<input v-else type="text" value=""  placeholder="请填写"/>
						</view>
						<view @click="selectAnswer10(3)" :class="{active: question_10 === 3}">
							<view> 其他 </view>
							<input v-if="question_10 === 3" type="text" value="" v-model="question_10_text" placeholder="请填写"/>
							<input v-else type="text" value=""  placeholder="请填写"/>
						</view>
					</view>
				</view>
			</view>
			<view class="bottom_btn">
				<view class="previous" @click="changeIndex(1)">上一题（{{ preNum }}）</view>
				<view class="next" @click="changeIndex(2)">提交进入下一题（{{ nextNum }}）</view>
			</view>
		</view>
		<view class="finish" v-if="isFinish">
			<view class="finish_main">
				<view class="icon_3"><image src="/static/img/finish.png" mode=""></image></view>
				<view>您已完成《应聘登记表》填写，累计用时{{ timeText }}。</view>
				<view class="medium">我们正在安排面试官，即将开始面试！</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				position:'',
				qIndex: 1,
				preNum: 0,
				nextNum: 9,
				date: '',
				isFinish: false,
				time: 0,
				timeText: '0分0秒',
				timer: null,
				post_id: '',
				post_name: '',
				question_1: '',
				question_1_reason:'',
				question_2: '',
				question_3: '',
				question_4: '',
				question_5: '',
				question_6: '',
				question_7: '',
				question_8: '',
				question_9_salary: '',
				question_10: '',
				question_10_text: '',
			};
		},
		computed: {
		       startDate() {
		           return this.getDate('start');
		       },
		       endDate() {
		           return this.getDate('end');
		       }
		},
		onLoad(opt) {
			this.post_id = opt.post_id;
			this.post_name = opt.post_name;
			this.timer = setInterval(() => {
				this.time += 1
			}, 1000)
		},
		methods:{
			bindDateChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
			    this.date = e.target.value
			},
			selectAnswer1(val){
				this.question_1 = val
			},
			selectAnswer6(val){
				this.question_6 = val
			},
			selectAnswer7(val){
				this.question_7 = val
			},
			selectAnswer8(val){
				this.question_8 = val
			},
			selectAnswer10(val){
				this.question_10_text = ''
				this.question_10 = val
			},
			submitRecruitmentFormTwo(){
				let params = {
					  "question_1": Number(this.question_1),
					  "question_1_reason": this.question_1_reason,
					  "question_2": this.question_2,
					  "question_3": this.question_3,
					  "question_4": this.question_4,
					  "question_5": this.question_5,
					  "question_6": Number(this.question_6),
					  "question_7": Number(this.question_7),
					  "question_7_name": this.name,
					  "question_7_position": this.position,
					  "question_8": Number(this.question_8) ,
					  "question_9_time": this.date,
					  "question_9_salary": this.question_9_salary,
					  "question_10": Number(this.question_10),
					  "question_10_text": this.question_10_text
				}
				this.$api.submitRecruitmentFormTwo(params).then( res => {
					console.log(res)
					this.isFinish = true;
				})
			},
			getDate(type) {
			    const date = new Date();
			    let year = date.getFullYear();
			    let month = date.getMonth() + 1;
			    let day = date.getDate();
			
			    if (type === 'start') {
			        // year = year - 60;
			    } else if (type === 'end') {
			        year = year + 2;
			    }
			    month = month > 9 ? month : '0' + month;;
			    day = day > 9 ? day : '0' + day;
			    return `${year}-${month}-${day}`;
			},
			changeIndex(n){
				if( this.nextNum === 0 ){
					this.submitRecruitmentFormTwo()
					clearInterval(this.timer);
					let m = Math.floor( this.time / 60);
					let s = this.time % 60;
					m = m > 9 ? m : '0' + m;
					s = s > 9 ? s : '0' + s;
					this.timeText = `${ m }分${ s }秒`;
				}
				if( n === 1 && this.qIndex > 1){
					this.qIndex --
					this.preNum --
					this.nextNum ++
				}else if(n === 2 && this.qIndex < 10){
					this.qIndex ++
					this.preNum ++
					this.nextNum --
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.top_title{
		width: 100%;
		height: 111rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 25rpx;
		background-color: #5C6FB4;
		color: #FFFFFF;
		font-size: 28rpx;
	}
	.top_left{
		display: flex;
		align-items: center;
	}
	.top_right{
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 208rpx;
		padding: 0 10rpx;
		height: 60rpx;
		background-color: #6D7EBC;
		border-radius: 7rpx;
	}
	.icon_1{
		width: 22rpx;
		height: 28rpx;
		margin-right: 15rpx;
		>image{
			width: 100%;
			height: 100%;
		}
	}
	.select_btn{
		display: flex;
		align-items: center;
		color: #FFFFFF;
	}
	.select_btn_2{
		display: flex;
		align-items: center;
		color: #999999;
	}
	.mian{
		box-sizing: border-box;
		padding: 0 25rpx;
	}
	.title_1{
		margin-top: 58rpx;
		margin-bottom: 40rpx;
		font-size: 28rpx;
		color: #333333;
	}
	.question_wrap{
		display: flex;
		flex-direction: column;
		height: 796rpx;
	}
	.question{
		font-size: 28rpx;
		color: #333333;
		width: 100%;
		border-radius: 7rpx 7rpx 0 0;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding: 28rpx 38rpx;
		background-color: #F0f0f0;
	}
	.answer{
		flex: 1;
		background-color: #FFFFFF;
		box-sizing: border-box;
		padding: 45rpx 35rpx;
		display: flex;
		flex-direction: column;
		.radio{
			display: flex;
			flex-wrap: wrap;
			>view{
				width: 274rpx;
				height: 83rpx;
				line-height: 83rpx;
				text-align: center;
				border-radius: 7rpx;
				background-color: #F9F9F9;
				color: #333333;
				font-size: 28rpx;
				margin-right: 28rpx;
				margin-bottom: 28rpx;
				&.active{
					color: #5C6FB4;
					border: 1rpx solid #5C6FB4;
				}
			}
		}
	}
	.answer_text{
		flex: 1;
		textarea{
			resize: none;
			background-color: #F9F9F9;
			box-sizing: border-box;
			padding: 35rpx;
			font-size: 28rpx;
			width: 100%;
			height: 100%;
		}
	}
	.bottom_btn{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 167rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 59rpx;
		>view{
			width: 299rpx;
			height: 83rpx;
			line-height: 83rpx;
			text-align: center;
			border-radius: 7rpx;
			font-size: 28rpx;
		}
		.previous{
			background-color: #FFFFFF;
			color: #666666;
		}
		.next{
			background: linear-gradient(to left top, #5C6FB4, #758AD5);
			color: #FFFFFF;
		}
	}
	.answer_input{
		background-color: #F9F9F9;
		border-radius: 7rpx;
		>view{
			min-height: 97rpx;
			border-bottom: 	1rpx solid #F1F1F9;
			box-sizing: border-box;
			padding: 0 35rpx;
			display: flex;
			align-items: center;
			justify-content: flex-start;
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
			width: 100%;
			text-align: left;
			font-size: 25rpx;
			margin-left: 33rpx;
		}
	}
	.answer_input_2{
		
		border-radius: 7rpx;
		>view{
			background-color: #F9F9F9;
			min-height: 97rpx;
			box-sizing: border-box;
			padding: 0 35rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 28rpx;
			color: #333333;
			margin-bottom: 28rpx;
			border-radius: 7rpx;
			&.active{
				color: #5C6FB4;
				border: 1rpx solid #5C6FB4 !important;
			}
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
			width: 100%;
			text-align: right;
			font-size: 25rpx;
			margin-left: 33rpx;
		}
	}
	.answer_select{
		background-color: #FFFFFF;
		border-radius: 7rpx;
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
			>view{
				&:first-child{
					flex-shrink: 0;
				}
			}
		}
		input{
			width: 100%;
			text-align: right;
			font-size: 25rpx;
			margin-left: 33rpx;
		}
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
	.finish{
		width: 100%;
		padding: 0 25rpx;
		box-sizing: border-box;
		>view{
			width: 100%;
			height: 310rpx;
			border-radius: 42rpx;
			background-color: #FFFFFF;
			margin-top: 183rpx;
			position: relative;
			box-sizing: border-box;
			padding-top: 144rpx;
			text-align: center;
			color: #333333;
			font-size: 25rpx;
			>view{
				&:last-of-type{
					margin-top: 38rpx;
				}
			}
		}
	}
	.icon_3{
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
		overflow: hidden;
		>image{
			width: 100%;
			height: 100%;
		}
	}
</style>
