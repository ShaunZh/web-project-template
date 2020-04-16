<!--
 * @Description: 表单相关-图片上传
 * @Author: Hexon
 * @Date: 2020-04-15 17:18:44
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-16 15:04:50
 -->
<template>
  <div class="page-form">
    <div class="upload-img-wrap">
      <UploadImg ref="uploadImg" @updateImgSrc="updateImgSrc" @uploadImg="uploadImg"></UploadImg>
      <img :src="uploadImgInfo.src" alt="img" class="disp-img" @click="previewImage" />
    </div>
  </div>
</template>

<script>
import UploadImg from '@/components/UploadImg'
export default {
  name: 'FormPage',
  components: { UploadImg },

  data() {
    return {
      uploadImgInfo: {
        src: require('../../assets/images/bg-upload-img.png')
      }
    }
  },
  methods: {
    // 更新图片信息
    updateImgSrc(src) {
      this.uploadImgInfo.src = src
    },
    // 调用后端api上传图片
    uploadImg(info) {},
    // 预览图片
    previewImage() {
      this.$refs['uploadImg'].previewImage([this.uploadImgInfo.src], 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-img-wrap {
  padding: 20px;
  display: flex;
  flex-direction: column;
  .disp-img {
    width: 100px;
    height: 64px;
    border-radius: 4px;
    object-fit: cover;
    object-position: center;
  }
}
</style>
