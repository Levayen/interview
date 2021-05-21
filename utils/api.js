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
		return request("/api/Login/Login", "POST", params, 1)
	},
	// 面试官登录
	intervieweerLogin(params) {
		return request("/api/Login/IntervieweerLogin", "POST", params, 1)
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
		return request("/api/Interview/SubmitRecruitmentFormTwo", "POST", params, 1)
	},
	//面试者基本信息
	getUserInfo(params){
		return request("/api/Interview/IntervieweeBasicInfo", "GET", params)
	},
	
	//获取省	
	getProvinces(params){
		return request("/api/Common/Provinces", "GET", params)
	},
	//获取市
	getCitys(params){
		return request("/api/Common/Citys", "GET", params)
	},
	// 面试者-入职-入职登记信息填写情况
	entryFormInfo(params){
		return request("/api​/Onboarding​/EntryFormInfo", "GET", params)
	},
	// 面试官-面试-待面试信息统计
	waitInterview(params){
		return request("/api/Interview/WaitInterviewStatistics", "GET", params)
	},
	// 面试官-面试列表
	interviewList(params){
		return request("/api/Interview/InterviewList", "GET", params)
	},
	//退回
	goBack(params){
		return request("/api/Interview/RebackInterview", "POST", params, 1)
	},
	//面试反馈表-1
	feedbackOne(params){
		return request("/api/Interview/SubmitRecruitmentFeedbackOne", "POST", params, 1)
	},
	//面试反馈表-2
	feedbackTwo(params){
		return request("/api/Interview/SubmitRecruitmentFeedbackTwo", "POST", params, 1)
	},
	//面试反馈表-3
	feedbackThree(params){
		return request("​/api/Interview/SubmitRecruitmentFeedbackThree", "POST", params, 1)
	},
	//岗位类别
	postTypes(params){
		return request("/api/Common/PostTypes", "GET", params)
	},
	//入职岗位
	positionList(params){
		return request("/api/Common/Posts", "GET", params)
	},
	//职级
	positionRanks(params){
		return request("/api/Common/Ranks", "GET", params)
	},
	//部门
	departments(params){
		return request("/api/Common/Departments", "GET", params)
	},
	//面试者-入职-入职登记信息填写情况
	entryFormInfo(params){
		return request("/api/Onboarding/EntryFormInfo", "GET", params)
	},
	//提交入职登记表1
	rzFormOne(params){
		return request("/api/Onboarding/SubmitRecruitmentFormOne", "POST", params)
	},
	//提交入职登记表2
	rzFormTwo(params){
		return request("/api/Onboarding/SubmitRecruitmentEntrantTwo", "POST", params, 1)
	},
	//入职登记表详情1
	entrantOneInfo(params){
		return request("/api/Onboarding/EntrantOneInfo", "GET", params)
	},
	//入职登记表详情2
	entrantTwoInfo(params){
		return request("​/api/Onboarding/EntrantTwoInfo", "GET", params)
	},
	// 面试者-入职-提交入职登记附件表详情
	subFileDetail(params){
		return request("/api/Onboarding/SubmitIntervieweeCertificate", "POST", params)
	},
	// 面试者-入职-入职登记附件表详情 
	rzFileDetail(params){
		return request("​/api/Onboarding/IntervieweeCertificateInfo", "GET", params)
	},
	//文件上传
	upLoad(params){
		return request("/api/Upload/Upload", "POST", params, 1)
	},
	//应聘登记表1 详情 
	getFormDetail1(params){
		return request("/api/Interview/RecruitmentFormOneInfo", "GET", params)
	},
	//应聘登记表2 详情
	getFormDetail2(params){
		return request("/api/Interview/RecruitmentFormTwoInfo", "GET", params)
	},
	//面试反馈表1 详情
	getFormDetail3(params){
		return request("/api/Interview/RecruitmentFeedbackOneInfo", "GET", params)
	},
	//面试反馈表2 详情
	getFormDetail4(params){
		return request("/api/Interview/RecruitmentFeedbackTwoInfo", "GET", params)
	},
	//面试反馈表3 详情
	getFormDetail5(params){
		return request("/api/Interview/RecruitmentFeedbackThreeInfo", "GET", params)
	},
}