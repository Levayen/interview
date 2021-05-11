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
						 	<view>请选择</view>
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
                 dataSource: [
                    { id: 1,
                       name: '星期一',
                       child: [
                           {
                               id: 2,
                               name: '星期一晴天'
                           },
                           {
                               id: 3,
                               name: '星期一雨天'
                           },
                       ],
                    },
                    { id: 4,
                       name: '星期二',
                       child: [
                           {
                               id: 5,
                               name: '星期二暴雨'
                           },
                           {
                               id: 6,
                               name: '星期二转晴'
                           },
                           {
                               id: 7,
                               name: '星期二冰雹'
                           },
                       ],
                    },
                    { id: 8,
                       name: '星期三',
                       child: []
                    },
                    { id: 9,
                       name: '星期四',
                       child: [
                           {
                               id: 10,
                               name: '星期四大太阳'
                           }
                       ]
                    },
                    { id: 11,
                       name: '星期五',
                       child: [
                           {
                               id: 12,
                               name: '星期五快了'
                           },
                          {
                               id: 13,
                               name: '星期五又下雨'
                           }
                       ]
                    },
                 ],

                name: '',

                classifyArr:[[], []], // picker - 数据源
                classifyIndex: [0, 0], // picker - 索引

                childArr:[], // 二级分类数据源
            }
        },
        mounted: function(options) {
            // 获取数据源并分出一级二级分类
            this.getAllClassify()
        },
        methods: {
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
            },

            // 获取二级分类
            columnchange(e) {
                // 当滚动切换一级分类时，为当前的一级分类添加它的子类
                if (e.detail.column == 0) {
                    // #ifdef H5
                    // 在小程序中直接赋值无效  H5 可直接赋值
                    this.classifyArr[1] =  this.childArr[e.detail.value]
                    // #endif

                    // #ifdef MP-WEIXIN
                    // 在 H5 环境下 $set 会导致一级分类无法滚动， 小程序正常运行
                     this.$set(this.classifyArr, 1, this.childArr[e.detail.value])
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
