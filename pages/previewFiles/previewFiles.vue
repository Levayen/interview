<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="fileUrl"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileUrl:'',
				webviewStyles: {
				    progress: {
				        color: '#FF3333'
				    }
				}
			};
		},
		onLoad(opt) {
			this.fileUrl = opt.url
		}
	}
</script>

<style lang="less">

</style>
