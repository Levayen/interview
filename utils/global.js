
export function regularPhone(phone) {
	let TEL_REGEXP = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/; //支持新出的手机号，166、198、199号段
	if (TEL_REGEXP.test(phone)) {
		return true;
	} else {
		uni.showToast({
			title: "手机号码格式不正确",
			icon: "none"
		})
		return false
	}
}

export function regularEmail(email) {
	let TEL_REGEXP = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 
	if (TEL_REGEXP.test(email)) {
		return true;
	} else {
		uni.showToast({
			title: "邮箱格式不正确",
			icon: "none"
		})
		return false
	}
}