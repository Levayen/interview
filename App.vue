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
	}
	.red{
		color: #FF0000;
	}
	.medium{
		font-weight: 500;
	}
</style>
