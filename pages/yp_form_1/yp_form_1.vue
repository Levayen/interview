<template>
	<view class="content">
		<view class="top_title" v-if="form_id == 0">
			<view class="top_left">
				<view class="icon_1">
					<image src="/static/img/table_2.png" mode=""></image>
				</view>
				<view>应聘登记表-1</view>
			</view>
			<view class="top_right">
				<picker :disabled="form_id > 0" mode="selector" :range="employmentList" range-key="post_name" @change="bindPosition">
					<view class="select_btn_1">
						<view class="uni-input">{{ post_name }}</view>
						<view class="icon_2">
							<image src="/static/img/to_right.png" mode="">
						</view>
					</view>
				</picker>
			</view>
		</view>
		<view class="form_content">
			<view class="form_item" style="border-top: none;">
				<view>
					<view><span style="margin-right: 10rpx;" class="red">*</span> 姓名：</view>
					<input :disabled="form_id > 0" type="text" value="" v-model="name" placeholder="请填写" />
				</view>
				<view>
					<view><span style="margin-right: 10rpx;" class="red">*</span> 性别：</view>
					<view class="check_box">
						<view :class="{ 'active': sex === 0 }" @click="selectSex(0)">男</view>
						<view :class="{ 'active': sex === 1 }" @click="selectSex(1)">女</view>
					</view>
				</view>
				<view>
					<view><span style="margin-right: 10rpx;" class="red">*</span> 出生日期：</view>
					<picker :disabled="form_id > 0" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="select_btn" v-if="date === ''">
							<view>请选择</view>
							<view class="icon_2">
								<image src="/static/img/to_right_g.png" mode="">
							</view>
						</view>
						<view class="uni-input">{{date.split(' ')[0]}}</view>
					</picker>
				</view>
				<view>
					<view><span style="margin-right: 10rpx;" class="red">*</span> 婚姻：</view>
					<view class="check_box">
						<view :class="{ 'active': marriage === 0 }" @click="selectMarriage(0)">未婚</view>
						<view :class="{ 'active': marriage === 1 }" @click="selectMarriage(1)">已婚</view>
						<view :class="{ 'active': marriage === 2 }" @click="selectMarriage(2)">离异</view>
					</view>
				</view>
				<view>
					<view><span style="margin-right: 10rpx;" class="red">*</span> 民族：</view>
					<input :disabled="form_id > 0" type="text" value="" v-model="nation" placeholder="请填写" />
				</view>
				<view>
					<view><span style="margin-right: 10rpx;" class="red">*</span> 籍贯：</view>
					<Grader :disabled="form_id > 0" :nativePlace="nativePlace" @print="getId"></Grader>
				</view>
				<view>
					<view><span style="margin-right: 10rpx;" class="red">*</span> 户口：</view>
					<view class="check_box">
						<view :class="{ 'active': hukou === 0 }" @click="selectHukou(0)">农村</view>
						<view :class="{ 'active': hukou === 1 }" @click="selectHukou(1)">城镇</view>
					</view>
				</view>
				<view>
					<view><span style="margin-right: 10rpx;" class="red">*</span> 身份证号码：</view>
					<input :disabled="form_id > 0" type="idcard" value="" v-model="IDnumber" placeholder="请填写" />
				</view>
				<view>
					<view> 政治面貌：</view>
					<input :disabled="form_id > 0" type="text" value="" v-model="politically" placeholder="请填写" />
				</view>
				<view>
					<view> <span style="margin-right: 10rpx;" class="red">*</span> 现住址：</view>
					<city :disabled="form_id > 0" :address="address" @change="getAddress"></city>
				</view>
				<view>
					<view> <span style="margin-right: 10rpx;" class="red">*</span> 紧急联系人：</view>
					<input :disabled="form_id > 0" type="text" value="" v-model="contacts" placeholder="请填写" />
				</view>
				<view>
					<view> <span style="margin-right: 10rpx;" class="red">*</span> 联系人手机：</view>
					<input :disabled="form_id > 0" type="text" value="" v-model="contactsPhone" placeholder="请填写" />
				</view>
			</view>
			<view class="form_1">
				<view class="form_top">
					<view>教育背景（最高学历填前面）</view>
					<view class="icon_2">
						<image src="../../static/img/to_top.png" mode=""></image>
					</view>
				</view>
				<view class="form_item" v-for="(item, index) in EdExperience" :key="index">
					<view>
						<view> 时间段：</view>
						<view class="date_2">
							<picker :disabled="form_id > 0" mode="date" :value="item.start_time" :start="startDate" :end="endDate"
								:data-index="index" @change="bindBeginTime">
								<view class="select_btn" v-if="item.start_time === ''">
									<view>请选择</view>
									<view class="icon_2">
										<image src="/static/img/to_right_g.png" mode="">
									</view>
								</view>
								<view class="uni-input">{{item.start_time.split(' ')[0]}}</view>
							</picker>
							<span>至</span>
							<picker :disabled="form_id > 0" mode="date" :value="item.end_time" :start="startDate" :end="endDate"
								:data-index="index" @change="bindEndTime">
								<view class="select_btn" v-if="item.end_time === ''">
									<view>请选择</view>
									<view class="icon_2">
										<image src="/static/img/to_right_g.png" mode="">
									</view>
								</view>
								<view class="uni-input">{{item.end_time.split(' ')[0]}}</view>
							</picker>
						</view>
					</view>
					<view>
						<view> 学校名称：</view>
						<input :disabled="form_id > 0" type="text" value="" v-model="item.school_name" placeholder="请填写" />
					</view>
					<view>
						<view> 专业：</view>
						<input :disabled="form_id > 0" type="text" value="" v-model="item.profession" placeholder="请填写" />
					</view>
					<view>
						<view> 学历层次：</view>
						<picker :disabled="form_id > 0" mode="selector" :range="educationList" :data-index="index" @change="bindEducation">
							<view class="select_btn" v-if="item.education == 0">
								<view>请选择</view>
								<view class="icon_2">
									<image src="/static/img/to_right_g.png" mode="">
								</view>
							</view>
							<view class="uni-input">{{educationList[item.education - 1]}}</view>
						</picker>
					</view>
					<view>
						<view><span style="margin-right: 10rpx;">*</span> 教育形式：</view>
						<view class="check_box">
							<view :class="{ 'active': item.educational_form === 0 }" @click="selectET(0, index)">统招
							</view>
							<view :class="{ 'active': item.educational_form === 1 }" @click="selectET(1, index)">在职自考
							</view>
							<view :class="{ 'active': item.educational_form === 2 }" @click="selectET(2, index)">脱产进修
							</view>
						</view>
					</view>
					<view class="form_itme_1">
						<view><span style="margin-right: 10rpx;">*</span> 教育现状：</view>
						<view class="check_box wrap">
							<view :class="{ 'active': item.education_status === 0 }" @click="selectES(0, index)">毕业
							</view>
							<view :class="{ 'active': item.education_status === 1 }" @click="selectES(1, index)">结业
							</view>
							<view :class="{ 'active': item.education_status === 2 }" @click="selectES(2, index)">肄业
							</view>
							<view :class="{ 'active': item.education_status === 3 }" @click="selectES(3, index)">在读
							</view>
						</view>
					</view>
					<view class="honor" v-if="form_id == 0">
						<view class="add_honor">
							<input :disabled="form_id > 0" type="text" value="" v-model="awards" placeholder="获奖荣誉" />
							<view @click="addAwards(index)">
								<image src="/static/img/add.png" mode=""></image>
							</view>
						</view>
						<view class="honor_item">
							<view v-for="(citem, cindex) in item.awards" :key="index">
								{{citem}}
							</view>
						</view>
					</view>
				</view>
				<view class="add_education" v-if="form_id == 0">
					<view @click="addEdExperience">
						<view>添加教育经历</view>
						<view class="add_icon">
							<image src="/static/img/add.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="form_1">
				<view class="form_top">
					<view>主要工作经历</view>
					<view class="icon_2">
						<image src="../../static/img/to_top.png" mode=""></image>
					</view>
				</view>
				<view class="form_item" v-for="(item1, index1) in workExperience" :key="index1">
					<view>
						<view> 时间段：</view>
						<view class="date_2">
							<picker :disabled="form_id > 0" mode="date" :value="item1.start_time" :start="startDate" :end="endDate"
								:data-index="index1" @change="bindBeginTime1">
								<view class="select_btn" v-if="item1.start_time === ''">
									<view>请选择</view>
									<view class="icon_2">
										<image src="/static/img/to_right_g.png" mode="">
									</view>
								</view>
								<view class="uni-input">{{item1.start_time.split(' ')[0]}}</view>
							</picker>
							<span>至</span>
							<picker :disabled="form_id > 0" mode="date" :value="item1.end_time" :start="startDate" :end="endDate"
								:data-index="index1" @change="bindEndTime1">
								<view class="select_btn" v-if="item1.end_time === ''">
									<view>请选择</view>
									<view class="icon_2">
										<image src="/static/img/to_right_g.png" mode="">
									</view>
								</view>
								<view class="uni-input">{{item1.end_time.split(' ')[0]}}</view>
							</picker>
						</view>
					</view>
					<view>
						<view> 公司名称：</view>
						<input :disabled="form_id > 0" type="text" value="" v-model="item1.company_name" placeholder="请填写" />
					</view>
					<view>
						<view> 职位：</view>
						<input :disabled="form_id > 0" type="text" value="" v-model="item1.position" placeholder="请填写" />
					</view>
					<view>
						<view> 薪资：</view>
						<input :disabled="form_id > 0" type="text" value="" v-model="item1.salary" placeholder="请填写" />
					</view>
					<view>
						<view> 证明人：</view>
						<input :disabled="form_id > 0" type="text" value="" v-model="item1.witness" placeholder="请填写" />
					</view>
					<view>
						<view> 证明人电话：</view>
						<input :disabled="form_id > 0" type="text" value="" v-model="item1.phone" placeholder="请填写" />
					</view>
				</view>
				<view class="add_education" v-if="form_id == 0">
					<view @click="addWorkExperience">
						<view>添加工作经历</view>
						<view class="add_icon">
							<image src="/static/img/add.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom_btn" v-if="form_id == 0">
			<view class="sub_btn" @click="submitRecruitmentFormOne">
				提 &nbsp; 交
			</view>
		</view>
	</view>
</template>

<script>
	import Grader from '@/components/twoGrader.vue'
	import city from '@/components/biaofun-region/biaofun-region.vue';
	export default {
		components: {
			city,
			Grader
		},
		data() {
			return {
				awards: '', //荣誉
				post_id: '', //岗位id
				post_name: '',
				sex: 0,
				marriage: 0, //婚姻状况
				hukou: 0,
				name: '',
				nation: '', //民族
				IDnumber: '', //身份证号码
				politically: '', //政治面貌
				contacts: '', //紧急联系人
				contactsPhone: '', //联系人手机
				date: '',
				address: '',
				province_id: '', //籍贯
				city_id: '', //籍贯
				educationList: ['大专', '本科', '硕士', '博士', '其他'],
				employment: '', //应聘岗位
				employmentList: [],
				EdExperience: [{
					"start_time": '',
					"end_time": '',
					"school_name": '',
					"profession": '', //专业
					"education": '', //学历
					"educational_form": 0, //教育形式
					"education_status": 0, //教育现状
					"awards": [] //标签
				}],
				workExperience: [{
					"start_time": '',
					"end_time": '',
					"company_name": '', //公司名称
					"position": '', //职位
					"salary": '', //薪资
					"witness": '', //证明人
					"phone": '' //证明人电话
				}],
				form_id: 0,
				nativePlace: ''
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
			//如果form_id大于0，则表示查看详情
			this.form_id = opt.form_id;
			this.post_id = opt.post_id;
			this.post_name = opt.post_name;
			//判断是查看详情还是填表
			if(this.form_id > 0){
				this.getFormDetails()
			}else{
				this.getPositionList()
			}
		},
		methods: {
			getProvincesById(pid, cid){
				let p_name = ''
				let c_name = ''
				let p = ''
				let c = ''
				this.$api.getProvinces({}).then( res => {
					p = res.result
					for(let i in p){
						if(p[i].id == pid){
							p_name = p[i].name
						}
					}
					this.$api.getCitys({provinceId: pid}).then( res => {
						c = res.result
						for(let i in c){
							if(c[i].id == cid){
								c_name = c[i].name
							}
						}
						console.log(p_name, c_name)
						this.nativePlace = p_name +'-'+ c_name
					})
				})
			},
			getPositionList() {
				this.$api.statistics({}).then(res => {
					this.employmentList = res.result
				})
			},
			getId(id1, id2) {
				this.province_id = id1;
				this.city_id = id2
			},
			selectSex(val) {
				if(this.form_id > 0){
					return
				}
				this.sex = val
			},
			selectMarriage(val) {
				if(this.form_id > 0){
					return
				}
				this.marriage = val
			},
			selectHukou(val) {
				if(this.form_id > 0){
					return
				}
				this.hukou = val
			},
			selectET(val, i) {
				if(this.form_id > 0){
					return
				}
				this.EdExperience[i].educational_form = val
			},
			selectES(val, i) {
				if(this.form_id > 0){
					return
				}
				this.EdExperience[i].education_status = val
			},
			addAwards(i) {
				this.EdExperience[i].awards.push(this.awards)
				this.awards = ''
			},
			getAddress(data) {
				this.address = ''
				data.forEach(item => {
					this.address += item.name
				})
			},
			getNativePlace(data) {
				this.nativePlace = ''
				data.forEach(item => {
					this.nativePlace += item.name
				})				
			},
			bindPosition: function(e) {				
				let pIndex = e.target.value
				this.post_name = this.employmentList[pIndex].post_name;
				this.post_id = this.employmentList[pIndex].post_id;
			},
			bindDateChange: function(e) {				
				this.date = e.target.value
			},
			//教育经历
			bindEducation: function(e) {
				let eIndex = e.target.value
				let i = e.currentTarget.dataset.index
				this.EdExperience[i].education = Number(eIndex) + 1
			},
			bindBeginTime: function(e) {
				let i = e.currentTarget.dataset.index
				this.EdExperience[i].start_time = e.target.value
			},
			bindEndTime: function(e) {
				let i = e.currentTarget.dataset.index
				this.EdExperience[i].end_time = e.target.value
			},
			//工作经历
			bindBeginTime1: function(e) {
				let i = e.currentTarget.dataset.index
				this.workExperience[i].start_time = e.target.value
			},
			bindEndTime1: function(e) {
				let i = e.currentTarget.dataset.index
				this.workExperience[i].end_time = e.target.value
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
			addEdExperience() {
				this.EdExperience.push({
					"start_time": '',
					"end_time": '',
					"school_name": '',
					"profession": '', //专业
					"education": 0, //学历
					"educational_form": 0, //教育形式
					"education_status": 0, //教育现状
					"awards": [] //标签
				})
			},
			//添加工作经历
			addWorkExperience() {
				this.workExperience.push({
					"start_time": '',
					"end_time": '',
					"company_name": '', //公司名称
					"position": '', //职位
					"salary": '', //薪资
					"witness": '', //证明人
					"phone": '' //证明人电话
				})
			},
			getFormDetails(){
				this.$api.getFormDetail1({oneId: this.form_id}).then(res => {
					let data = res.result
					this.EdExperience = data.education_background
					this.workExperience = data.work_experience
					this.contactsPhone = data.emergency_phone
					this.contacts = data.emergency_contact
					this.address = data.current_address
					this.politically = data.political_status
					this.IDnumber = data.id_card
					this.hukou = data.hukou
					this.city_id = data.city_id
					this.province_id = data.province_id
					this.nation = data.nationality
					this.marriage = data.marital_status
					this.date = data.birthday
					this.sex = data.sex
					this.name = data.realname
					this.getProvincesById(data.province_id, data.city_id)
				})
			},
			submitRecruitmentFormOne() {
				let params = {
					"post_id": this.post_id,
					"realname": this.name,
					"sex": this.sex,
					"birthday": this.date,
					"marital_status": this.marriage,
					"nationality": this.nation,
					"province_id": this.province_id,
					"city_id": this.city_id,
					"hukou": this.hukou,
					"id_card": this.IDnumber,
					"political_status": this.politically,
					"current_address": this.address,
					"emergency_contact": this.contacts,
					"emergency_phone": this.contactsPhone,
					"education_background": this.EdExperience,
					"work_experience": this.workExperience,
				}
				let a = {
					birthday: "2021-05-13",
					city_id: 110100,
					current_address: "北京市北京市东城区",
					education_background: [{
						"start_time": "2021-05-13",
						"end_time": "2021-05-14",
						"school_name": "111",
						"profession": "222",
						"education": "中专/中技",
						"educational_form": 0,
						"education_status": 0,
						"awards": ["222"]
					}],
					emergency_contact: "无",
					emergency_phone: "15992990321",
					hukou: 0,
					id_card: "440223199612031616",
					marital_status: 0,
					nationality: "汉",
					political_status: "无",
					post_id: 1,
					province_id: 110000,
					realname: "赖华勇",
					sex: 0,
					work_experience: [{
						"start_time": "2021-05-13",
						"end_time": "2021-05-16",
						"company_name": "2323",
						"position": "32323",
						"salary": "121",
						"witness": "112",
						"phone": "111"
					}]
				}
				uni.showLoading({
					title:'提交中'
				})
				this.$api.submitRecruitmentFormOne(params).then(res => {
					uni.hideLoading()
					uni.redirectTo({
						url: `../yp_form_2/yp_form_2?post_id=${this.post_id}&post_name=${this.post_name}`
					})
				})
			},

		}
	}
</script>

<style lang="less" scoped>
	.top_title {
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

	.top_left {
		display: flex;
		align-items: center;
	}

	.top_right {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 208rpx;
		padding: 0 10rpx;
		height: 60rpx;
		background-color: #6D7EBC;
		border-radius: 7rpx;
	}

	.icon_1 {
		width: 22rpx;
		height: 28rpx;
		margin-right: 15rpx;

		>image {
			width: 100%;
			height: 100%;
		}
	}

	.icon_2 {
		width: 30rpx;
		height: 30rpx;
		margin-left: 22rpx;

		>image {
			width: 100%;
			height: 100%;
		}
	}

	.form_content {
		box-sizing: border-box;
		padding: 0 25rpx;
		padding-bottom: 28rpx;

		>view {
			margin-top: 28rpx;
			width: 100%;
			border-radius: 7rpx;
			background-color: #FFFFFF;
			overflow: hidden;
		}
	}

	.form_1 {
		>view {
			&:first-child {
				min-height: 97rpx;
				border-bottom: 1rpx solid #F1F1F9;
				box-sizing: border-box;
				padding: 0 35rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 28rpx;
				color: #333333;
			}

			&:nth-child(2) {
				border-top: none !important;
			}
		}

	}

	.check_box {
		display: flex;
		align-items: center;

		>view {
			width: 119rpx;
			height: 49rpx;
			font-size: 25rpx;
			border-radius: 49rpx;
			line-height: 49rpx;
			text-align: center;
			color: #5C6FB4;
			border: 1rpx solid #5C6FB4;
			margin-left: 21rpx;

			&:first-child {
				margin-left: 0;
			}

			&.active {
				background-color: #5C6FB4;
				color: #FFFFFF;
			}
		}
	}

	.wrap {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		align-items: flex-start;

		>view {
			margin-bottom: 21rpx;
		}
	}

	.select_btn {
		display: flex;
		align-items: center;
		color: #999999;
	}

	.select_btn_1 {
		display: flex;
		align-items: center;
		color: #FFFFFF;
	}

	.form_top {
		color: #FFFFFF !important;
		font-size: 28rpx;
		background-color: #5C6FB4;
	}

	.date_2 {
		width: 65%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		>span {
			margin: 0 20rpx;
			color: #999999;
		}
	}

	.form_itme_1 {
		padding-top: 25rpx !important;
		align-items: flex-start !important;

		>view {
			&:first-child {
				margin-top: 8rpx;
			}
		}
	}

	.honor {
		padding-top: 35rpx !important;
		padding-bottom: 35rpx !important;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;

		.add_honor {
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

			input {
				width: 78%;
				text-align: left;
				font-size: 28rpx;
			}

			>view {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 97rpx;
				height: 100%;
				background-color: #5C6FB4;

				>image {
					width: 50%;
					height: 55%;
				}
			}
		}

		.honor_item {
			width: 100%;
			border-top: none !important;
			display: flex;
			flex-wrap: wrap;
			margin-top: 28rpx;
			margin-right: -21rpx;
			margin-bottom: -21rpx;

			>view {
				padding: 27rpx 30rpx;
				border-radius: 7rpx;
				border: 1rpx solid #DDDDDD;
				margin-bottom: 21rpx;
				margin-right: 21rpx;
				background-color: #F9F9F9;
			}
		}
	}

	.add_education {
		border-top: 1rpx solid #F1F1F9;
		padding: 35rpx;
		box-sizing: border-box;

		>view {
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

	.add_icon {
		width: 35rpx;
		height: 35rpx;
		margin-left: 12rpx;

		>image {
			width: 100%;
			height: 100%;
		}
	}

	.form_item {
		border-top: 20rpx solid #F6F6F6;

		>view {
			min-height: 97rpx;
			border-bottom: 1rpx solid #F1F1F9;
			box-sizing: border-box;
			padding: 0 35rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 28rpx;
			color: #333333;

			&:last-child {
				border-bottom: none;
			}

			>view {
				&:first-child {
					flex-shrink: 0;
				}
			}
		}

		input {
			text-align: right;
			font-size: 25rpx;
		}
	}

	.bottom_btn {
		width: 100%;
		box-sizing: border-box;
		padding: 0 25rpx;
		padding-bottom: 33rpx;

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
</style>
