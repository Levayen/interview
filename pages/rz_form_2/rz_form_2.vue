<template>
	<view class="content">
		<view class="form_content">
			<view class="form_1">
				<view class="form_top">
					<view>办公固定资产领用</view>
					<view class="icon_2"><image src="../../static/img/to_top.png" mode=""></image></view>
				</view>
				<view class="goods_checked">
					<ul>
						<li v-for="(item, index) in allGoods" :key="index" 
						:class="{'active': goodsList.indexOf(index)!=-1}"
						@click="selectGoods(index)">
							<view>
								<radio :checked="goodsList.indexOf(index)!=-1"/>
							</view>
							<view>{{ item.name }}</view>
						</li>
					</ul>
				</view>
				<view class="form_item">
					<view>
						<view> 深圳本地社保电脑号 </view>
						<input type="text" value="" v-model="account_1" placeholder="以6开头的9位数"/>
					</view>
					<view>
						<view> 深圳本地公积金账号 </view>
						<input type="text" value="" v-model="account_2" placeholder="请填写"/>
					</view>
				</view>
			</view>
			<view class="form_1">
				<view class="form_top">
					<view>社保/住房公积金办理（填写代码）</view>
				</view>
				<view class="form_item">
					<view>
						<view> 姓名：</view>
						<input type="text" value="" v-model="name" placeholder="请填写"/>
					</view>
					<view>
						<view> 身份证号：</view>
						<input type="text" value="" v-model="IDnumber" placeholder="请填写"/>
					</view>
					<view>
						<view> 性别：</view>
						<view class="check_box">
							<view :class="{ 'active': sex === 0 }" @click="selectSex(0)">男</view>
							<view :class="{ 'active': sex === 1 }" @click="selectSex(1)">女</view>
						</view>
					</view>
					<view>
						<view> 民族：</view>
						<input type="text" value="" v-model="nation" placeholder="请填写"/>
					</view>
					<view>
						<view> 手机号：</view>
						<input type="text" value="" v-model="phone" placeholder="请填写"/>
					</view>
					<view>
						<view> 最高学位：</view>
						<picker mode="selector" :range="educationList" :data-index="index" @change="bindEducation">
							<view class="select_btn" v-if="education === ''">
								<view>请选择</view>
								<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
							</view>
						     <view class="uni-input">{{education}}</view>
						</picker>
					</view>
					<view>
						<view> 职称：</view>
						<picker mode="selector" :range="titleList" :data-index="index" @change="bindTitle">
							<view class="select_btn" v-if="title === ''">
								<view>请选择</view>
								<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
							</view>
						     <view class="uni-input">{{title}}</view>
						</picker>
					</view>
					<view>
						<view> 户籍情况：</view>
						<picker mode="selector" :range="censusList" :data-index="index" @change="bindCensus">
							<view class="select_btn" v-if="census === ''">
								<view>请选择</view>
								<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
							</view>
						     <view class="uni-input">{{census}}</view>
						</picker>
					</view>
					<view>
						<view> 婚姻情况：</view>
						<view class="check_box">
							<view :class="{ 'active': marriage === 1 }" @click="selectMarriage(1)">未婚</view>
							<view :class="{ 'active': marriage === 2 }" @click="selectMarriage(2)">已婚</view>
						</view>
					</view>
					<view>
						<view> 配偶姓名：</view>
						<input type="text" value="" v-model="spouse" placeholder="请填写"/>
					</view>
					<view>
						<view> 配偶身份证号码：</view>
						<input type="text" value="" v-model="spouseID" placeholder="请填写"/>
					</view>
				</view>
			</view>
		</view>
		<view class="radio_wrap">
			<label class="radio">
				<radio class="violet" value="" :checked="isChecked" @click="selectRadio" color="#5C6FB4"/><text>《入职信息真实性承诺书》</text>
			</label>
		</view>
		<view class="bottom_btn">
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
				account_1: '',
				account_2: '',
				phone: '',
				sex: 0,
				marriage: 1, //婚姻状况
				marital_status:'',
				spouse: '', //配偶姓名
				spouseID: '', //配偶身份证号码
				hukou: 1,
				name: '',
				nation: '', //民族
				IDnumber: '', //身份证号码
				date: '',
				education: '', //学位
				educationList: ['01博士', '02硕士', '03学士', '04其他'],
				title:'', //职称
				titleList: ['010正高职称', '020副高职称', '030中级职称', '040初职职称', '050无'],  
				census: '', //户籍
				censusList: ['01深户', '02非深户城镇', '03非深户农村'],
				isChecked: false,
				allGoods: [
					{id: 1, name: 'PC电脑', params: 'pc', value: 0},
					{id: 2, name: '笔记本电脑', params: 'laptop', value: 0},
					{id: 3, name: '办公手机', params: 'mobile', value: 0},
					{id: 4, name: '平板电脑', params: 'pad', value: 0},
					{id: 5, name: 'U盾', params: 'u_key', value: 0},
					{id: 6, name: '工牌', params: 'gadge', value: 0},
					{id: 7, name: '计算器', params: 'calculator', value: 0},
					{id: 8, name: '文件夹', params: 'folder', value: 0},
					{id: 9, name: '员工手册', params: 'employee_handbook', value: 0},
					{id: 10, name: '干部手册', params: 'cadre_handbook', value: 0},
					{id: 11, name: 'POS机', params: 'pos', value: 0},
					{id: 12, name: '工装', params: 'tooling', value: 0},
				], //所有物品
				goodsList: [], //选中的物品
				goodsParams: {},
				entrant_id:'', //请求表单详情的参数
			};
		},
		onLoad(opt) {
			this.entrant_id = opt.id
			if(this.entrant_id > 0){
				this.getFormDetails()
			}
		},
		methods:{
			getFormDetails(){
				this.$api.entrantTwoInfo({entrant_two: this.entrant_id}).then( res => {
					let data = res.result
					this.account_1 = data.social_security_number
					this.account_2 = data.provident_fund_account
					this.name = data.realname
					this.phone = data.phone
					this.sex = data.sex
					this.nation = data.nationality
					this.IDnumber = data.id_card
					this.education = data.highest_degree
					this.title = data.job_title
					this.census = data.household_registration
					this.marital_status = data.marital_status
					if(data.marital_status == '02未婚'){
						this.marriage = 1
					}else{
						this.marriage = 2
					}
					this.spouse = data.spouse_name
					this.spouseID = data.spouse_id_number
					this.authenticity = data.authenticity
					if(this.authenticity == 1){
						this.isChecked = true
					}else{
						this.isChecked = false
					}
					for(let i in this.allGoods){
						for(let key in data){
							if(this.allGoods[i].params == key){
								if(data[key] == 1){
									this.allGoods[i].value = 1
								} 
							}
						}
						if(this.allGoods[i].value == 1){
							this.goodsList.push(Number(i))
						}
					}
					
				})
			},
			selectMarriage(val){
				this.marriage = val
				if(val == 1){
					this.marital_status = '02未婚'	
				}else{
					this.marital_status = '01已婚'
				}
			},
			bindPosition: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				let pIndex = e.target.value
				this.employment = this.employmentList[pIndex]
			},
			//学位
			bindEducation: function(e){
				let eIndex = e.target.value
				this.education = this.educationList[eIndex]
				console.log('picker发送选择改变，携带值为', this.education)
			},
			bindTitle: function(e){
				console.log('picker发送选择改变，携带值为', e.target.value)
				let eIndex = e.target.value
				this.title = this.titleList[eIndex]
			},
			bindCensus: function(e){
				console.log('picker发送选择改变，携带值为', e.target.value)
				let eIndex = e.target.value
				this.census = this.censusList[eIndex]
			},
			selectSex(val){
				this.sex = val
			},
			selectRadio(){
				this.isChecked = !this.isChecked
				if(this.isChecked){
					this.authenticity = 1
				}else{
					this.authenticity = 0
				}
			},
			selectGoods(index) {
				var that = this;
				if (that.goodsList.indexOf(index) == -1) {
					 //打印下标
					that.goodsList.push(index); //选中添加到数组里
					that.allGoods[index].value = 1
				} else {
					that.goodsList.splice(that.goodsList.indexOf(index), 1); //取消
					that.allGoods[index].value = 0
				}
				
			},
			submit(){
				this.allGoods.forEach(item => {
					let key = item.params
					let value = item.value
					this.goodsParams[key] = value
				})
				let params = {
					...this.goodsParams,
					social_security_number: this.account_1,
					provident_fund_account: this.account_2,
					realname : this.name,
					phone : this.phone,
					sex: this.sex,
					nationality : this.nation,
					id_card : this.IDnumber,
					highest_degree : this.education,
					job_title : this.title,
					household_registration : this.census,
					marital_status : this.marital_status,
					spouse_name: this.spouse,
					spouse_id_number: this.spouseID,
					authenticity : this.authenticity ,
				}
				let a = {
					pc: 0,
					laptop: 1,
					mobile: 0,
					pad: 0,
					u_key: 0,
					gadge: 0,
					calculator: 0,
					folder: 0,
					employee_handbook: 0,
					cadre_handbook: 0,
					pos: 0,
					tooling: 0,
					social_security_number: 698745123,
					provident_fund_account: 123698547,
					realname: '赖华勇',
					phone: 15999299032,
					sex: 0,
					nationality: "汉",
					id_card: 440223199612031616,
					highest_degree: '111',
					job_title: '111',
					household_registration: '111',
					marital_status:'02未婚' ,
					spouse_name: '',
					spouse_id_number: '',
					authenticity: 1,
				}
				if(params.authenticity == 0){
					uni.showToast({
						title:'请勾选承诺书',
						icon:'none'
					})
					return
				}
				this.$api.rzFormTwo(a).then( res => {
					console.log(res)
					uni.navigateBack({
						delta: 2
					})
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.goods_checked{
		width: 100%;
		box-sizing: border-box;
		padding: 35rpx;
		ul{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		li{
			width: 299rpx;
			height: 97rpx;
			border-radius: 7rpx;
			border: 1rpx solid #dddddd;
			display: flex;
			align-items: center;
			box-sizing: border-box;
			padding: 0 28rpx;
			margin-bottom: 28rpx;
			&.active{
				background-color: #E5F9E9;
				border: 1rpx solid #4CC360;
			}
			radio{
				margin-right: 29rpx;
				transform: scale(.8);
			}
		}
	}
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
	.radio_wrap{
		width: 100%;
		box-sizing: border-box;
		padding: 0 25rpx;
		display: flex;
		align-items: center;
		margin-bottom: 50rpx;
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
</style>
