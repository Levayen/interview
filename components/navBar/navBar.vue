<template name="navBar">
	<view class="nav-wrap" :style="{'padding-top': (height*2) + 'rpx'}">
		<view class="">
			哈哈哈哈
		</view>
	</view>
</template>

<script>
	export default {
		name:"navBar",
		data() {
			return {
				height: 0
			};
		},
		// 此处定义传入的数据
		props: {
		    navbarData: {
		        type: Object,
		        value: {
					
				}
		    }
		},
		created() {
			const that = this
			uni.getSystemInfo({
				success(res){
					that.height = res.statusBarHeight
					console.log(that.height)
				}
			})
		},
		methods:{
		
		}
	}
</script>

<style lang="less">
/* components/navbar/index.wxss */
	/* 顶部要固定定位   标题要居中   自定义按钮和标题要和右边微信原生的胶囊上下对齐 */
	.nav-wrap {
	  position: fixed;
	  width: 100%;
	  height: 88rpx;
	  top: 0;
	  left: 0;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  background:rgba(255,255,255,1);
	  z-index: 999999;
	}
	/* 标题要居中 */
	.nav-title {
	  position: absolute;
	  text-align: center;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  /* top: 0; */
	  left: 0;
	  right: 0;
	  bottom: 0;
	  margin: auto;
	  font-size: 36rpx;
	  font-weight: 500;
	  height: 88rpx;
	  line-height: 88rpx
	}
	.nav-title > view{
	  position: absolute;
	  top: 0;
	  left: 0;
	}
	
	.nav-capsule {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  /* margin-left: 30rpx; */
	  height: 88rpx;
	  width: 90rpx;
	  z-index: 2013;
	}

</style>
