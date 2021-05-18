<template>
	<view class="content">
		<view class="top_title">
			职位匹配度问答
		</view>
		<view class="form_content">
			<view class="grader_top">
				<view>
					面试量化平均得分：
				</view>
				<view>
					<span class="grader_num">{{average}}</span>  <span>分</span>
				</view>
			</view>
			<view>
				<view class="question">
					<view class="question_item">
						<view class="title">
							* 1、加入我司意愿？
						</view>
						<view class="answer">
							<view @click="bindAnswer(1, 1)"
							:class="{'active': question_1 === 1}" > 
								<viwe>强烈 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view @click="bindAnswer(1, 2)"
							:class="{'active': question_1 === 2}">
								<viwe>一般 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view @click="bindAnswer(1, 3)"
							:class="{'active': question_1 === 3}">
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
							<view @click="bindAnswer(2, 1)"
							:class="{'active': question_2  === 1}"> 
								<viwe>是 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view @click="bindAnswer(2, 2)"
							:class="{'active': question_2  === 2}">
								<viwe>否 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view @click="bindAnswer(2, 3)"
							:class="{'active': question_2  === 3}">
								<view class="answer_2">
									<viwe>距离近，不用搬家 </viwe>
									<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
								</view>
								<view class="distance">
									<view>现住址到公司车程：</view>
									<view>
										<view class="grader_input"><input type="number" value="" v-model="ride_time" max="100" placeholder="请输入"/></view>
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
							<view @click="bindAnswer(3, 1)"
							:class="{'active': question_3  === 1}"> 
								<viwe>应该的，以前有过经历 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view @click="bindAnswer(3, 2)"
							:class="{'active': question_3  === 2}">
								<viwe>没有太多加班经历，安排可以加班 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view @click="bindAnswer(3, 3)"
							:class="{'active': question_3  === 3}">
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
							<view @click="bindAnswer(4, 1)"
							:class="{'active': status  === 1}"> 
								<viwe>通过 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view @click="bindAnswer(4, 2)"
							:class="{'active': status  === 2}">
								<viwe>不通过 </viwe>
								<viwe class="icon_3"><image src="/static/img/selected.png" mode=""></image></viwe>
							</view>
							<view class="textarea">
								<textarea value="" v-model="reason" placeholder="可简要填写不通过原因" />
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="radio_wrap">
			<label class="radio">
				<radio class="violet" value="" :checked="isChecked" @click="selectRadio" /><text> 加入重点跟踪人才库 </text>
			</label>
		</view>
		<view class="form_content">
			<view class="form_1">
				<view class="form_top">
					<view>入职条件备注</view>
					<view class="icon_2"><image src="../../static/img/to_top.png" mode=""></image></view>
				</view>
				<view class="form_item">
					<view>
						<view> 岗位类别 </view>
						<picker mode="selector" 
						:range="postTypeList" 
						:data-index="index" 
						range-key="post_type_name"
						@change="bindPostType">
							<view class="select_btn" v-if="postType === ''">
								<view>请选择</view>
								<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
							</view>
						     <view class="uni-input">{{postType}}</view>
						</picker>
					</view>
					<view>
						<view> 入职职位 </view>
						<picker mode="selector" range-key="post_name" :range="positionList" :data-index="index" @change="bindPosition">
							<view class="select_btn" v-if="position === ''">
								<view>请选择</view>
								<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
							</view>
						     <view class="uni-input">{{position}}</view>
						</picker>
					</view>
					<view>
						<view> 职级 </view>
						<picker mode="selector" range-key="rank_name" :range="rankList" :data-index="index" @change="bindGrader">
							<view class="select_btn" v-if="rank_name === ''">
								<view>请选择</view>
								<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
							</view>
						     <view class="uni-input">{{rank_name}}</view>
						</picker>
					</view>
					<view>
						<view> 入职部门 </view>
						<view>
							<view class="select_btn" v-if="department === ''" @click="showModal">
								<view>请选择</view>
								<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
							</view>
							<view class="uni-input" @click="showModal">{{department}}</view>
						</view>
					</view>
					<view>
						<view> 入职时间 </view>
						<picker mode="date" :value="entry_time" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="select_btn" v-if="entry_time === ''">
								<view>请选择</view>
								<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
							</view>
						     <view class="uni-input">{{entry_time}}</view>
						</picker>
					</view>
					<view>
						<view> 试用期薪资 </view>
						<input type="text" value="" v-model="probation_salary" placeholder="请填写"/>
					</view>
					<view>
						<view> 转正薪资 </view>
						<input type="text" value="" v-model="turn_positive_salary" placeholder="请填写"/>
					</view>
					<view>
						<view> 试用期时长(月) </view>
						<input type="text" value="" v-model="probation_month" placeholder="请填写"/>
					</view>
					<!-- <view>
						<view> 合同签订时长(月) </view>
						<input type="text" value="" v-model="contract_month" placeholder="请填写"/>
					</view> -->
				</view>
			</view>
		</view>
		<view class="bottom_btn">
			<view class="sub_btn" @click="submit">
				提 &nbsp; 交
			</view>
		</view>
		<view class="cu-modal drawer-modal justify-end" :class="modalName?'show':''" @tap="hideModal">
			<view class="cu-dialog basis-lg" @tap.stop="" :style="[{top:CustomBar+'px',height:'calc(100vh - ' + CustomBar + 'px)'}]">
				<view class="cu-list menu text-left" style="height: inherit;">
					<view class="drawer_box">
						<view class="drawer_item">
							<view class="item_title">请选择</view>
							<view class="items" v-for="(item, index) in departmentsList" :key="item.department_id">
								<view class="items_1" :class="{active: index === childIndex1}" 
								@click="getChildren1(index)">{{ item.department_name }}</view>
							</view>
						</view>
						<view class="drawer_item child" v-if="children1.length > 0">
							<view class="item_title">请选择</view>
							<view class="items" v-for="(item1, index1) in children1" :key="item1.department_id">
								<view class="items_1" :class="{active: index1 === childIndex2}"
								@click="getChildren2(index1)">{{ item1.department_name }}</view>
							</view>
						</view>
						<view class="drawer_item child" v-if="children2.length > 0">
							<view class="item_title">请选择</view>
							<view class="items" v-for="(item2, index2) in children2" :key="item2.department_id">
								<view class="items_1" :class="{active: index2 === childIndex3}"
								@click="getChildren3(index2)"
								>{{ item2.department_name }}</view>
							</view>
						</view>
						<view class="drawer_item child" v-if="children3.length > 0">
							<view class="item_title">请选择</view>
							<view class="items" v-for="(item3, index3) in children3" :key="item3.department_id">
								<view class="items_1" :class="{active: index3 === childIndex4}"
								@click="getChildren4(index3)"
								>{{ item3.department_name }}</view>
							</view>
						</view>
						<view class="drawer_btn">
							<view @click="resetDepartment">重置</view>
							<view @click="determine">确定</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Grader from '@/components/twoGrader.vue'
	export default {
		components:{
			Grader
		},
		data() {
			return {
				record_id: '',
				CustomBar: this.CustomBar,
				modalName: false,
				answer: 1,
				grade1: '',
				grade2: '',
				position: '', //岗位
				positionList: [], //岗位列表
				grader: '',
				graderList: [],
				date:'',
				department: '',
				isChecked: false,
				question_1: '',
				question_2: '',
				question_3: '',
				key_talent: 0,
				status: '',
				reason: '',
				entry_time: '', //入职时间
				probation_salary: '', //试用期薪资
				turn_positive_salary: '', //转正薪资
				probation_month : '', //试用期时长
				contract_month : '', //签订合同时长
				postType: '', //岗位类别
				postTypeList: [], //岗位类别列表
				post_type_id: '', //岗位类别id
				post_id: '', //岗位id
				rankList: [], //职级列表
				rank_id: '', //职级id
				rank_name: '', //职级名称
				departmentsList: [],
				childIndex1: null,
				childIndex2: null,
				childIndex3: null,
				childIndex4: null,
				children1: [],
				children2: [],
				children3: [],
				children4: [],
				department_id:'',  //入职部门id
				department_name:'',  //入职部门name
				average: 0, //平均分
				ride_time: ''
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
			    this.record_id = opt.recordId
			    this.average = opt.average
				console.log(this.record_id)
				this.postTypes()
				this.departments()
		   },
		methods:{
			selectRadio(){
				this.isChecked = !this.isChecked
				this.key_talent ? 1 : 0
			},
			bindAnswer(q, a){
				if(q === 1){
					this.question_1 = a
				}else if(q === 2){
					this.question_2 = a
				}else if(q === 3){
					this.question_3 = a
				}else if(q === 4){
					this.status = a
				}
			},
			submit(){
				let params = {
					record_id: this.record_id,
					key_talent: this.key_talent,
					question_1: this.question_1,
					question_2: this.question_2,
					question_3: this.question_3,
					status: this.status,
					reason: this.reason,
					o_post_id : this.post_id,
					o_post_type_id : this.post_type_id,
					o_rank_id : this.rank_id,
					o_department_id : this.department_id,
					entry_time : this.entry_time,
					probation_salary : this.probation_salary,
					turn_positive_salary : this.turn_positive_salary,
					probation_month : this.probation_month,
					ride_time: this.ride_time,
				}
				this.$api.feedbackThree(params).then( res => {
					console.log(res)
					uni.navigateBack()
				})
			},
			//选择部门1
			getChildren1(index){
				if(this.departmentsList[index].children){
					this.children1 = this.departmentsList[index].children
				}else{
					this.children1 = ''
				}
				this.childIndex1 = index
				this.department_id = this.departmentsList[index].department_id
				this.department_name = this.departmentsList[index].department_name
			},
			getChildren2(index){
				if(this.children1[index].children){
					this.children2 = this.children1[index].children
				}else{
					this.children2 = ''
				}
				this.childIndex2 = index
				this.department_id = this.children1[index].department_id
				this.department_name = this.children1[index].department_name
			},
			getChildren3(index){
				if(this.children2[index].children){
					this.children3 = this.children2[index].children
				}else{
					this.children3 = ''
				}
				this.childIndex3 = index
				this.department_id = this.children2[index].department_id
				this.department_name = this.children2[index].department_name
			},
			getChildren4(index){
				this.childIndex4 = index
				this.department_id = this.children3[index].department_id
				this.department_name = this.children3[index].department_name
			},
			//重置部门信息
			resetDepartment(){
				this.department_id  = ''
				this.department_name = ''
				this.children1 = ''
				this.children2 = ''
				this.children3 = ''
				this.childIndex1 = null
				this.childIndex2 = null
				this.childIndex3 = null
				this.childIndex4 = null
			},
			//确定部门信息
			determine(){
				this.department = this.department_name
				this.hideModal()
			},
			//抽屉
			showModal(e) {
				this.modalName = true
			},
			hideModal(e) {
				this.modalName = false
			},
			selectRadio(){
				this.isChecked = !this.isChecked
			},
			
			//获取岗位类别
			postTypes(){
				this.$api.postTypes().then( res => {
					console.log(res)
					this.postTypeList = res.result
				})
			},
			//入职岗位
			getPositionList(){
				this.$api.positionList({posttypeId: this.post_type_id}).then( res => {
					console.log(res)
					this.positionList = res.result
				})
			},
			//职级
			positionRanks(){
				this.$api.positionRanks({posttypeId: this.post_type_id}).then( res => {
					console.log(res)
					this.rankList = res.result
				})
			},
			//部门
			departments(){
				this.$api.departments().then( res => {
					console.log(res)
					this.departmentsList = res.result
				})
			},
			bindPostType(e){
				console.log('picker发送选择改变，携带值为', e.target.value)
				let eIndex = e.target.value
				this.postType = this.postTypeList[eIndex].post_type_name
				this.post_type_id = this.postTypeList[eIndex].post_type_id
				this.position = ''
				this.post_id = ''
				this.rank_id = ''
				this.rank_name = ''
				this.getPositionList()
				this.positionRanks()
			},
			bindPosition(e){
				console.log('picker发送选择改变，携带值为', e.target.value)
				let eIndex = e.target.value
				this.position = this.positionList[eIndex].post_name
				this.post_id = this.positionList[eIndex].post_id
			},
			bindGrader(e){
				console.log('picker发送选择改变，携带值为', e.target.value)
				let eIndex = e.target.value
				this.rank_id = this.rankList[eIndex].rank_id
				this.rank_name = this.rankList[eIndex].rank_name
			},
			bindDateChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
			    this.entry_time = e.target.value
			},
			getDate(type) {
			    const date = new Date();
			    let year = date.getFullYear();
			    let month = date.getMonth() + 1;
			    let day = date.getDate();
			
			    if (type === 'start') {
			       
			    } else if (type === 'end') {
			        year = year + 2;
			    }
			    month = month > 9 ? month : '0' + month;;
			    day = day > 9 ? day : '0' + day;
			    return `${year}-${month}-${day}`;
			},
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
	.select_btn{
		display: flex;
		align-items: center;
		color: #999999;
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
		margin-bottom: 28rpx;
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
	.cu-dialog {
	    position: relative;
	    display: inline-block;
	    vertical-align: middle;
	    margin-left: auto;
	    margin-right: auto;
	    width: 556rpx !important;
	    max-width: 100%;
	    background-color: #FFFFFF;
	    border-radius: 10rpx;
	    overflow: hidden;
	}
	.basis-lg {
	    -webkit-flex-basis: 74%;
	    flex-basis: 74% !important;
	} 
	.drawer_box{
		box-sizing: border-box;
		padding: 50rpx 0rpx 50rpx 50rpx;
		margin-right: -25rpx;
		position: relative;
		height: inherit;
		overflow-y: scroll;
		box-sizing: border-box;
		padding-bottom: 150rpx;
		>view{
			&:first-child{
				margin-top: 0;
			}
		}
	}
	.drawer_item{
		margin-top: 69rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.item_title{
		font-size: 25rpx;
		color: #999999;
		margin-bottom: 30rpx;
		width: 100%;
	}
	.items{
		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		flex-direction: column;
		>.items_1{
			min-width: 194rpx;
			box-sizing: border-box;
			padding: 0 60rpx;
			height: 63rpx;
			line-height: 63rpx;
			border-radius: 7rpx;
			margin-right: 35rpx;
			margin-bottom: 21rpx;
			font-size: 25rpx;
			text-align: center;
			background-color: #F6F6F6;
			color: #333333;
			&.active{
				border: 1rpx solid #5C6FB4;
				color: #5C6FB4;
				background-color: #EEF0F7;
			}
		}
		>.child{
			margin-top: 28rpx;
			>.items{
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				>.items_1{
					min-width: 194rpx;
					box-sizing: border-box;
					padding: 0 60rpx;
					height: 63rpx;
					line-height: 63rpx;
					border-radius: 7rpx;
					margin-right: 35rpx;
					margin-bottom: 21rpx;
					font-size: 25rpx;
					text-align: center;
					background-color: #F6F6F6;
					color: #333333;
					&.active{
						border: 1rpx solid #5C6FB4;
						color: #5C6FB4;
						background-color: #EEF0F7;
					}
				}
			}
		}
	}
	.drawer_btn{
		width: 479rpx;
		height: 83rpx;
		border-radius: 83rpx;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 50rpx;
		left: 50rpx;
		
		>view{
			width: 50%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #5C6FB4;
			color: #FFFFFF;
			font-size: 28rpx;
			&:first-child{
				background-color: #8D9ACB;
			}
		}
	}
	// #radioColor{
	// 	color: #5C6FB4 !important;
	// 	background-color: #5C6FB4 !important; 
	// }
</style>
 