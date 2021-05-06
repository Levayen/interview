<template name="navBar">
	<view class='nav-wrap' style='background-color: {{navbarData.bg_color}};{{navbarData.show_border == "1" ? "box-shadow:0rpx 2rpx 0rpx 0rpx rgba(0,0,0,0.1);" : ""}};height:{{ height*2 + 88 }}rpx'>
	    <!-- // 导航栏 中间的标题 -->
	  <view class='nav-title' style='color: {{navbarData.color}}; top:{{ height*2 }}rpx; '>{{navbarData.title}}
	  <view style='display: flex; justify-content: space-around;flex-direction: column'>
	      <!-- // 导航栏  左上角的返回按钮 和home按钮
	      //  其中wx:if='{{navbarData.showCapsule}}' 是控制左上角按钮的显示隐藏，首页不显示 -->
	    <view class='nav-capsule'>
	      <view v-if="{{navbarData.showCapsule}}" bindtap='navBack' style='color: {{navbarData.color}};  display: flex; align-items: center;justify-content: center;'></view>
	    </view>
	  </view>
	</view>
	</view>
	<!-- 填充 -->
	<view style="height:{{ height*2 + 88 }}rpx"></view>
</template>

<script>
	 export default {
	        name: "navBar",
	        data() {
	            return {
	                
	            };
	        },
	        // 此处定义传入的数据
	        props: {
	            navbarData: {
	                type: Object,
	                value: null
	            }
	        }
	        
	    }
</script>

<style>
	/* components/navbar/index.wxss */
	/* 顶部要固定定位   标题要居中   自定义按钮和标题要和右边微信原生的胶囊上下对齐 */
	.nav-wrap {
	  position: fixed;
	  width: 100%;
	  top: 0;
	  /* padding-top: 40rpx; */
	  /* height: 130rpx; */
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
