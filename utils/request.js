//用于请求拦截的
// var Fly=require("flyio/dist/npm/wx");  
// var fly=new Fly;  
// var server = "https://pre-sop-api.xiniu.com";  
// var req = {"appid":"123","version":"123"};  
// 全局请求封装
//获取token
let token = ''
try {
	const value = uni.getStorageSync('token');
	if (value) {
		token = value
	} else {
		token = ""
	}
} catch (e) {
	// error
}
const baseUrl = "https://pre-sop-api.xiniu.com"

export default (url, method, params) => {
	return new Promise((resolve, reject) => {
	 	uni.request({
			url: baseUrl + url,
			method: method,
			header: {
				'content-type':'application/x-www-form-urlencoded',
				'Authorization': 'Bearer ' + token
			},
			data: {
				...params
			},
			success(res) {
				if(res.data.code === 200){
					resolve(res.data);
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
