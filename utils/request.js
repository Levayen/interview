//用于请求拦截的
// var Fly=require("flyio/dist/npm/wx");  
// var fly=new Fly;  
// var server = "https://pre-sop-api.xiniu.com";  
// var req = {"appid":"123","version":"123"};  
// 全局请求封装
const baseUrl = "https://pre-sop-api.xiniu.com"

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
				}else if(res.data.code === 401){
					uni.navigateTo({
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
				uni.showToast({
					title: "请求失败",
					icon: "none",
				})
				reject(err);
			},
			complete() {
				
			}
		});
	});
};
