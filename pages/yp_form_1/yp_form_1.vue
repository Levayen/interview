<template>
	<view class="content">
		<view class="top_title">
			<view class="top_left">
				<view class="icon_1"><image src="/static/img/table_2.png" mode=""></image></view>
				<view>应聘登记表-1</view>
			</view>
			<view class="top_right">
				<picker mode="selector" :range="employmentList" value="" @change="bindPosition">
					<view class="select_btn_1">
						 <view class="uni-input">{{employment || '产品经理'}}</view>
						<view class="icon_2"><image src="/static/img/to_right.png" mode=""></view>
					</view>
				</picker>
				
			</view>
		</view>
		<view class="form_content">
			<view class="form_item" style="border-top: none;">
				<view>
					<view><span style="margin-right: 10rpx;" class="red">*</span> 姓名：</view>
					<input type="text" value="" v-model="name" placeholder="请填写"/>
				</view>
				<view>
					<view><span style="margin-right: 10rpx;" class="red">*</span> 性别：</view>
					<view class="check_box">
						<view :class="{ 'active': sex === 1 }" @click="selectSex(1)">男</view>
						<view :class="{ 'active': sex === 2 }" @click="selectSex(2)">女</view>
					</view>
				</view>
				<view>
					<view><span style="margin-right: 10rpx;" class="red">*</span> 出生日期：</view>
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="select_btn" v-if="date === ''">
								<view>请选择</view>
								<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
							</view>
						     <view class="uni-input">{{date}}</view>
						</picker>
				</view>
				<view>
					<view><span style="margin-right: 10rpx;" class="red">*</span> 婚姻：</view>
					<view class="check_box">
						<view :class="{ 'active': marriage === 1 }" @click="selectMarriage(1)">已婚</view>
						<view :class="{ 'active': marriage === 2 }" @click="selectMarriage(2)">未婚</view>
						<view :class="{ 'active': marriage === 3 }" @click="selectMarriage(3)">离异</view>
					</view>
				</view>
				<view>
					<view><span style="margin-right: 10rpx;" class="red">*</span> 民族：</view>
					<input type="text" value="" v-model="nation" placeholder="请填写"/>
				</view>
				<view>
					<view><span style="margin-right: 10rpx;" class="red">*</span> 籍贯：</view>
					<city grade="2" @change="getNativePlace"></city>
				</view>
				<view>
					<view><span style="margin-right: 10rpx;" class="red">*</span> 户口：</view>
					<view class="check_box">
						<view :class="{ 'active': hukou === 1 }" @click="selectHukou(1)">农村</view>
						<view :class="{ 'active': hukou === 2 }" @click="selectHukou(2)">城镇</view>
					</view>
				</view>
				<view>
					<view><span style="margin-right: 10rpx;" class="red">*</span> 身份证号码：</view>
					<input type="idcard" value="" v-model="IDnumber" placeholder="请填写"/>
				</view>
				<view>
					<view> 政治面貌：</view>
					<input type="text" value="" v-model="politically" placeholder="请填写"/>
				</view>
				<view>
					<view> <span style="margin-right: 10rpx;" class="red">*</span> 现住址：</view>
					<city @change="getAddress"></city>
				</view>
				<view>
					<view> <span style="margin-right: 10rpx;" class="red">*</span> 紧急联系人：</view>
					<input type="text" value="" v-model="contacts" placeholder="请填写"/>
				</view>
				<view>
					<view> <span style="margin-right: 10rpx;" class="red">*</span> 联系人手机：</view>
					<input type="text" value="" v-model="contactsPhone" placeholder="请填写"/>
				</view>
			</view>
			<view class="form_1">
				<view class="form_top">
					<view>教育背景（最高学历填前面）</view>
					<view class="icon_2"><image src="../../static/img/to_top.png" mode=""></image></view>
				</view>
				<view class="form_item" v-for="(item, index) in EdExperience" :key="index">
					<view>
						<view> 时间段：</view>
						<view class="date_2">
							<picker mode="date" :value="item.beginTime" :start="startDate" :end="endDate" :data-index="index" @change="bindBeginTime">
								<view class="select_btn" v-if="item.beginTime === ''">
									<view>请选择</view>
									<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
								</view>
							     <view class="uni-input">{{item.beginTime}}</view>
							</picker>
							<span>至</span>
							<picker mode="date" :value="item.endTime" :start="startDate" :end="endDate" :data-index="index" @change="bindEndTime">
								<view class="select_btn" v-if="item.endTime === ''">
									<view>请选择</view>
									<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
								</view>
							     <view class="uni-input">{{item.endTime}}</view>
							</picker>
						</view>
					</view>
					<view>
						<view> 学校名称：</view>
						<input type="text" value="" v-model="item.schoolName" placeholder="请填写"/>
					</view>
					<view>
						<view> 专业：</view>
						<input type="text" value="" v-model="item.major" placeholder="请填写"/>
					</view>
					<view>
						<view> 学历层次：</view>
						<picker mode="selector" :range="educationList" :data-index="index" @change="bindEducation">
							<view class="select_btn" v-if="item.education === ''">
								<view>请选择</view>
								<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
							</view>
						     <view class="uni-input">{{item.education}}</view>
						</picker>
					</view>
					<view>
						<view><span style="margin-right: 10rpx;">*</span> 教育形式：</view>
						<view class="check_box">
							<view :class="{ 'active': item.educationType === 1 }" @click="selectET(1, index)">统招</view>
							<view :class="{ 'active': item.educationType === 2 }" @click="selectET(2, index)">在职自考</view>
							<view :class="{ 'active': item.educationType === 3 }" @click="selectET(3, index)">脱产进修</view>
						</view>
					</view>
					<view class="form_itme_1">
						<view><span style="margin-right: 10rpx;">*</span> 教育现状：</view>
						<view class="check_box wrap">
							<view :class="{ 'active': item.educationStatus === 1 }" @click="selectES(1, index)">毕业</view>
							<view :class="{ 'active': item.educationStatus === 2 }" @click="selectES(2, index)">结业</view>
							<view :class="{ 'active': item.educationStatus === 3 }" @click="selectES(3, index)">肄业</view>
							<view :class="{ 'active': item.educationStatus === 4 }" @click="selectES(4, index)">在读</view>
						</view>
					</view>
					<view class="honor">
						<view class="add_honor">
							<input type="text" value="" placeholder="获奖荣誉"/>
							<view><image src="/static/img/add.png" mode=""></image></view>
						</view>
					</view>
				</view>
				<view class="add_education">
					<view @click="addEdExperience">
						<view>添加教育经历</view>
						<view class="add_icon"><image src="/static/img/add.png" mode=""></image></view>
					</view>
				</view>
			</view>
			<view class="form_1">
				<view class="form_top">
					<view>主要工作经历</view>
					<view class="icon_2"><image src="../../static/img/to_top.png" mode=""></image></view>
				</view>
				<view class="form_item" v-for="(item1, index1) in workExperience" :key="index1">
					<view>
						<view> 时间段：</view>
						<view class="date_2">
							<picker mode="date" :value="item1.beginTime" :start="startDate" :end="endDate" :data-index="index1" @change="bindBeginTime1">
								<view class="select_btn" v-if="item1.beginTime === ''">
									<view>请选择</view>
									<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
								</view>
							     <view class="uni-input">{{item1.beginTime}}</view>
							</picker>
							<span>至</span>
							<picker mode="date" :value="item1.endTime" :start="startDate" :end="endDate" :data-index="index1" @change="bindEndTime1">
								<view class="select_btn" v-if="item1.endTime === ''">
									<view>请选择</view>
									<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
								</view>
							     <view class="uni-input">{{item1.endTime}}</view>
							</picker>
						</view>
					</view>
					<view>
						<view> 公司名称：</view>
						<input type="text" value="" v-model="item1.corporateName" placeholder="请填写"/>
					</view>
					<view>
						<view> 职位：</view>
						<input type="text" value="" v-model="item1.position" placeholder="请填写"/>
					</view>
					<view>
						<view> 薪资：</view>
						<input type="text" value="" v-model="item1.salary" placeholder="请填写"/>
					</view>
					<view>
						<view> 证明人：</view>
						<input type="text" value="" v-model="item1.witness" placeholder="请填写"/>
					</view>
					<view>
						<view> 证明人电话：</view>
						<input type="text" value="" v-model="item1.witnessPhone" placeholder="请填写"/>
					</view>
				</view>
				<view class="add_education">
					<view @click="addWorkExperience">
						<view>添加工作经历</view>
						<view class="add_icon"><image src="/static/img/add.png" mode=""></image></view>
					</view>
				</view>
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
	import city from '@/components/biaofun-region/biaofun-region.vue'
	export default {
		components:{
			city
		},
		data() {
			return {
				sex: 1,
				marriage: 1, //婚姻状况
				hukou: 1,
				name: '',
				nation: '', //民族
				IDnumber: '', //身份证号码
				politically: '', //政治面貌
				contacts: '', //紧急联系人
				contactsPhone: '', //联系人手机
				date: '',
				address: '',
				nativePlace: '', //籍贯
				educationList: ['中专/中技', '高中', '大专', '本科'],
				employment:'', //应聘岗位
				employmentList: ['产品经理', 'Java工程师', '前端工程师'],
				
				EdExperience:[{
					beginTime: '',
					endTime: '',
					schoolName: '', 
					major: '', //专业
					education: '', //学历
					educationType: 1, //教育形式
					educationStatus: 1, //教育现状
					honorList: ['']
				}],
				workExperience: [{
					beginTime: '',
					endTime: '',
					corporateName: '', //公司名称
					position: '', //职位
					salary: '', //薪资
					witness: '', //证明人
					witnessPhone: '' //证明人电话
				}]
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
		methods:{
			selectSex(val){
				this.sex = val
			},
			selectMarriage(val){
				this.marriage = val
			},
			selectHukou(val){
				this.hukou = val
			},
			selectET(val, i){
				this.EdExperience[i].educationType = val
			},
			selectES(val, i){
				this.EdExperience[i].educationStatus = val
			},
			getAddress(data){
				this.address = ''
				data.forEach(item =>{
					this.address += item.name
				})
				console.log('picker发送选择改变，携带值为', this.address)
			},
			getNativePlace(data){
				this.nativePlace = ''
				data.forEach(item =>{
					this.nativePlace += item.name
				})
				console.log('picker发送选择改变，携带值为', this.nativePlace)
			},
			bindPosition: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				let pIndex = e.target.value
				this.employment = this.employmentList[pIndex]
			},
			bindDateChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
			    this.date = e.target.value
			},
			//教育经历
			bindEducation: function(e){
				console.log('picker发送选择改变，携带值为', e.target.value)
				let eIndex = e.target.value
				let i = e.currentTarget.dataset.index
				this.EdExperience[i].education = this.educationList[eIndex]
			},
			bindBeginTime: function(e) {
				console.log('picker发送选择改变，携带值为', e)
				let i = e.currentTarget.dataset.index
			    this.EdExperience[i].beginTime = e.target.value
			},
			bindEndTime: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				let i = e.currentTarget.dataset.index
			    this.EdExperience[i].endTime = e.target.value
			},
			//工作经历
			bindBeginTime1: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				let i = e.currentTarget.dataset.index
			    this.workExperience[i].beginTime = e.target.value
			},
			bindEndTime1: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				let i = e.currentTarget.dataset.index
			    this.workExperience[i].endTime = e.target.value
			},
			getDate(type) {
			    const date = new Date();
			    let year = date.getFullYear();
			    let month = date.getMonth() + 1;
			    let day = date.getDate();
			
			    if (type === 'start') {
			        year = year - 60;
			    } else if (type === 'end') {
			        year = year + 2;
			    }
			    month = month > 9 ? month : '0' + month;;
			    day = day > 9 ? day : '0' + day;
			    return `${year}-${month}-${day}`;
			},
			//添加教育经历
			addEdExperience(){
				this.EdExperience.push({
					beginTime: '',
					endTime: '',
					schoolName: '', 
					major: '', //专业
					education: '', //学历
					educationType: 1, //教育形式
					educationStatus: 1, //教育现状
					honorList: [],
				})
			},
			//添加工作经历
			addWorkExperience(){
				this.workExperience.push({
					beginTime: '',
					endTime: '',
					corporateName: '', //公司名称
					position: '', //职位
					salary: '', //薪资
					witness: '', //证明人
					witnessPhone: '' //证明人电话
				})
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
	.icon_2{
		width: 30rpx;
		height: 30rpx;
		margin-left: 22rpx;
		>image{
			width: 100%;
			height: 100%;
		}
	}
	.form_content{
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

	.check_box{
		display: flex;
		align-items: center;
		>view{
			width: 119rpx;
			height: 49rpx;
			font-size: 25rpx;
			border-radius: 49rpx;
			line-height: 49rpx;
			text-align: center;
			color: #5C6FB4;
			border: 1rpx solid #5C6FB4;
			margin-left: 21rpx;
			&:first-child{
				margin-left: 0;
			}
			&.active{
				background-color: #5C6FB4;
				color: #FFFFFF;
			}
		}
	}
	.wrap{
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		align-items: flex-start;
		>view{
			margin-bottom: 21rpx;
		}
	}
	.select_btn{
		display: flex;
		align-items: center;
		color: #999999;
	}
	.select_btn_1{
		display: flex;
		align-items: center;
		color: #FFFFFF;
	}
	.form_top{
		color: #FFFFFF !important;
		font-size: 28rpx;
		background-color: #5C6FB4;
	}
	.date_2{
		width: 65%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		>span{
			margin:  0 20rpx;
			color: #999999;
		}
	}
	.form_itme_1{
		padding-top: 25rpx !important;
		align-items: flex-start !important;
		>view {
			&:first-child{
				margin-top: 8rpx;
			}
		}
	}
	.honor{
		padding-top: 35rpx !important;
		padding-bottom: 35rpx !important;
		.add_honor{
			width: 100%;
			height: 83rpx;
			border-radius: 7rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #F6F6F6;
			overflow: hidden;
			box-sizing: border-box;
			padding-left: 32rpx;
			input{
				width: 78%;
				text-align: left;
				font-size: 28rpx;
			}
			>view{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 97rpx;
				height: 100%;
				background-color: #5C6FB4;
				>image{
					width: 50%;
					height: 55%;
				}
			}
		}
	}
	.add_education{
		border-top: 1rpx solid #F1F1F9;
		padding: 35rpx;
		box-sizing: border-box;
		>view{
			width: 100%;
			height: 78rpx;
			border-radius: 7rpx;
			border: 1rpx solid #5C6FB4;
			color: #5C6FB4;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.add_icon{
		width: 35rpx;
		height: 35rpx;
		margin-left: 12rpx;
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
</style>
