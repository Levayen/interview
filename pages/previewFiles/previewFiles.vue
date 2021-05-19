<template>
    <view>
        <web-view :src="allUrl"></web-view>
    </view>
</template>

<script>
    import config from '../../utils/config.js'
    export default {
        data() {
            return {
                // viewerUrl: '/hybrid/html/web/viewer.html',
                // viewerUrl: globalConfig.baseUrl + '/pdf/web/viewer.html',
                allUrl: ''
            }
        },
        onLoad(options) {
            let fileUrl = encodeURIComponent(
                config.baseUrl + '/api/attachment?name=' + options.name + '&url=' + options.url)
				this.allUrl = this.viewerUrl + '?file=' + fileUrl
        }
    }
</script>

<style lang="less" scoped>
	
</style>