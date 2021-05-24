<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* colorUi */
	 @import "colorui/main.css";
	 @import "colorui/icon.css";
	/*每个页面公共css */
	page{
		background-color: #F9F9F9;
		color: #333333;
		padding-bottom: constant(safe-area-inset-bottom); /*兼容 IOS<11.2*/
		padding-bottom: env(safe-area-inset-bottom); /*兼容 IOS>11.2*/
	}
	.red{
		color: #FF0000;
	}
	.medium{
		font-weight: 500;
	}
	.no_data{
		width: 100%;
		height: 150rpx;
		line-height: 150rpx;
		font-size: 24rpx;
		color: #999999;
		text-align: center;
	}
	
</style>
