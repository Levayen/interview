<template>
    <view class="content">
        <view class="content-box">
            <view class="box">
                 <view class="box-item">
                     <picker class="item-picker"
                             mode="multiSelector"
                             range-key="name"
                             @change="classifyChange"
                             @columnchange="columnchange"
                             :value="classifyIndex"
                             :range="classifyArr">
						 <view class="select_btn" v-if="name === ''">
						 	<view>省</view>
						 	<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
						 	<view style="margin-left: 112rpx;">市</view>
						 	<view class="icon_2"><image src="/static/img/to_right_g.png" mode=""></view>
						 </view>
						  <view class="uni-input">{{name}}</view>
                     </picker>
                 </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                classifyArr:[[], []], // picker - 数据源
                classifyIndex: [0, 0], // picker - 索引

                childArr:[], // 二级分类数据源
            }
        },
        mounted: function(options) {
            // 获取数据源并分出一级二级分类
			this.getProvinceList()
            // this.getAllClassify()
        },
        methods: {
			//省
			getProvinceList(){
				this.$api.getProvinces({}).then( res => {
					let provinces = res.result
					// 一级分类的数据源
					this.$set(this.classifyArr, 0, provinces)
					// 第一次打开时，默认给一级分类添加它的二级分类
					this.getCityList(provinces[0].id)
				})
				
			},
			//市
			getCityList(id){
				this.$api.getCitys({provinceId: id}).then( res => {
					let citys = res.result
					this.$set(this.classifyArr, 1, citys)
				})
			},
             // 获取数据源并分出一级二级
            getAllClassify() {
                let dataLen = this.dataSource.length;
                for (let i = 0; i < dataLen; i++) {
                    // 将数据源中的二级分类 push 进 childArr，作为二级分类的数据源
                    this.childArr.push(this.dataSource[i].child)
                };

                // 一级分类的数据源
                this.classifyArr[0] = this.dataSource;

                // 第一次打开时，默认给一级分类添加它的二级分类
                this.classifyArr[1] = this.childArr[0]
            },

            // 选择商品分类
            classifyChange(e) {
                let value = e.target.value;
                this.classifyIndex = value;

                if (this.classifyArr[0].length != 0) {
                    this.name = this.classifyArr[0][this.classifyIndex[0]].name
                };

                if (this.classifyArr[1].length != 0) {
                    this.name += '-' + this.classifyArr[1][this.classifyIndex[1]].name
                }
				this.$emit('print', 
					this.classifyArr[0][this.classifyIndex[0]].id,
					this.classifyArr[1][this.classifyIndex[1]].id
				)
            },

            // 获取二级分类
            columnchange(e) {
                // 当滚动切换一级分类时，为当前的一级分类添加它的子类
                if (e.detail.column == 0) {
                    // #ifdef H5
                    // 在小程序中直接赋值无效  H5 可直接赋值
                    // this.classifyArr[1] =  this.childArr[e.detail.value]
					this.getCityList(this.classifyArr[0][e.detail.value].id)
                    // #endif

                    // #ifdef MP-WEIXIN
                    // 在 H5 环境下 $set 会导致一级分类无法滚动， 小程序正常运行
                     // this.$set(this.classifyArr, 1, this.childArr[e.detail.value])
					 this.getCityList(this.classifyArr[0][e.detail.value].id)
                    // #endif
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
	.icon_2{
		width: 30rpx;
		height: 30rpx;
		margin-left: 22rpx;
		>image{
			width: 100%;
			height: 100%;
		}
	}
	.select_btn{
		display: flex;
		align-items: center;
		color: #999999;
	}
</style>
