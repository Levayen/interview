//用于请求拦截的
// var Fly=require("flyio/dist/npm/wx");  
// var fly=new Fly;  

var server = "https://uniapp.dcloud.io/update";  
var req = {"appid":"123","version":"123"};  
// 全局请求封装
const token = uni.getStorageSync('token');
const baseUrl = "https://www.piop.cn/api"

export default (url, method, params) => {
	uni.showLoading({
		title: "加载中"
	});
	
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			method: method,
			header: {
				token: token
			},
			data: {
				...params
			},
			success(res) {
				resolve(res.data);
			},
			fail(err) {
				reject(err);
			},
			complete() {
				uni.hideLoading();
			}
		});
	});
};