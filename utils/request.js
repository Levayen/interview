//用于请求拦截的
// var Fly=require("flyio/dist/npm/wx");  
// var fly=new Fly;  
// var server = "https://pre-sop-api.xiniu.com";  
// var req = {"appid":"123","version":"123"};  
// 全局请求封装
import config from './config.js'

const baseUrl = config.baseUrl

export default (url, method, params, isForm) => {
	//获取token
	const token = uni.getStorageSync('token')
	let type = ''
	//判断是否以表单形式提交
	if(isForm == 1){
		type = 'application/x-www-form-urlencoded'
	}else if(isForm == 2){
		type = 'multipart/form-data'
	}
	return new Promise((resolve, reject) => {
	 	uni.request({
			url: baseUrl + url,
			method: method,
			header: {
				'content-type': type,
				'Authorization': 'Bearer ' + token
			},
			data: {
				...params
			},
			success(res) {
				if(res.data.code === 200){
					resolve(res.data);
				}else if(res.data.code === 401 || res.data.code === 403 ){
					uni.reLaunch({
						url: '../login/login'
					})
					uni.showToast({
						title: res.data.message,
						icon: 'none'
					})
				}else{
					uni.showToast({
						title: res.data.message,
						icon: "none",
					})
				}
			},
			fail(err) {
				console.log(err)
				console.log(baseUrl + url)
				uni.showModal({
					title: '请求失败',
					content: JSON.stringify(err) + '>>>>>' + baseUrl + url + '>>>>>' + JSON.stringify(params)
				})
				reject(err);
			},
			complete() {
				
			}
		});
	});
};
