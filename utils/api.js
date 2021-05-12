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
		return request("/api/Login/Login", "POST", params)
	},
	// 面试官登录
	intervieweerLogin(params) {
		return request("/api/Login/IntervieweerLogin", "POST", params)
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
	getMyInfo(params) {
		return request("/platform/metadata/bindinfo", "GET", params)
	},
	// 注册账号
	registerAccount(params) {
		return request("/platform/metadata/register", "GET", params)
	},

	// 找回密码
	retrievePassword(params) {
		return request("/platform/metadata/back", "GET", params)
	},

	// 注销账号
	offAccount(params) {
		return request("/platform/metadata/cancel", "GET", params)
	},
	
}