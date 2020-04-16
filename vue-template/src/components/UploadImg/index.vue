<!--
 * @Description: 
 * @Author: Hexon
 * @Date: 2020-04-15 16:41:15
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-16 14:43:49
 -->

<template>
  <van-button class="com-img-upload" plain type="info" @click="chooseImage">上传图片</van-button>
</template>

<script>
import { Button as VanButton } from 'vant'

export default {
  name: 'ComImgUpload',
  components: { VanButton },
  props: {
    uploadImgCount: {
      type: Number,
      default: 1
    }
  },

  methods: {
    chooseImage() {
      if (typeof window.isWeiXin === 'function' && window.isWeiXin()) {
        const that = this
        window.wx.ready(function () {
          console.log('wx.ready ok')
          window.wx.chooseImage({
            count: that.uploadImgCount, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
              console.log('chooseImage success')
              // 将上传的临时图片id传回父组件，在父组件中进行展示
              that.$emit('updateImgSrc', res.localIds[0])
              that.uploadImage(res.localIds[0])
            },
            fail: function (e) {
              console.log('chooseImage error: ', e)
            }
          })
        })
      }
    },
    uploadImage(id) {
      const that = this
      window.wx.uploadImage({
        localId: id, // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function (res) {
          let serverId = res.serverId // 返回图片的服务器端ID
          // 调用父组件上传函数
          that.$emit('uploadImg', {
            serverId
          })
        }
      })
    },
    // 图片预览
    previewImage(imgsList, currentIndex) {
      if (typeof window.isWeiXin === 'function' && window.isWeiXin()) {
        if (imgsList.length) {
          window.wx.previewImage({
            current: imgsList[currentIndex], // 当前显示图片的http链接
            urls: imgsList // 需要预览的图片http链接列表
          })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.com-img-upload {
  margin-bottom: 14px;
  width: 80px;
  padding: 0 1px;
  height: 30px;
  border: 1px solid #306eee;
  border-radius: 4px;
  font-size: 12px;
  line-height: 20px;
  color: #306eee;
}
</style>
