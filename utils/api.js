import request from "./request.js"
export default {
	// 检测手机号码
	checkPhone(params) {
		return request("/api/Login/CheckPhone", "GET", params)
	},

	// 获取验证码
	getAuthCode(params) {
		return request("/api/Login/SendCode", "GET", params)
	},

	// 面试者登录
	userLogin(params) {
		return request("/api/Login/Login", "POST", params, true)
	},
	// 面试官登录
	intervieweerLogin(params) {
		return request("/api/Login/IntervieweerLogin", "POST", params, true)
	},

	//首页接口
	getIndex(params) {
		return request("/api/Home/Statistics", "POST", params)
	},
	//在招岗位
	statistics(params){
		return request("/api/Interview/Statistics", "GET", params)
	},
	// 登录者信息
	getNotice(params){
		return request("/api/Notice/WaitInterviewNotices", "GET", params)
	},
	//退出登录
	logOut(params){
		return request("/api/My/IntervieweeLogout", "GET", params)
	},
	//入职首页
	joinIndex(params){
		return request("/api/Onboarding/EntryPosition", "GET", params)
	},
	//应聘登记表1
	submitRecruitmentFormOne(params){
		return request("/api/Interview/SubmitRecruitmentFormOne", "POST", params)
	},
	//应聘登记表2
	submitRecruitmentFormTwo(params){
		return request("/api/Interview/SubmitRecruitmentFormTwo", "POST", params)
	},
	//获取省	
	getProvinces(params){
		return request("/api/Common/Provinces", "GET", params)
	},
	//获取市
	getCitys(params){
		return request("/api/Common/Citys", "GET", params)
	},
	
}