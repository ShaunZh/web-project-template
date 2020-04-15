<!--
 * @Description: 
 * @Author: Hexon
 * @Date: 2020-04-10 13:49:57
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-15 18:09:29
 -->
<template>
  <div class="list-item">
    <div class="img-wrap" @click="$emit('deail')">
      <img v-lazy="itemData.imgSrc" class="item-img" alt="img" />
    </div>
    <h5 class="title" v-text="itemData.title"></h5>
    <div class="bottom">
      <div class="left single-line-hidden">
        <img v-lazy="itemData.avatar" alt="avatar" class="avatar" />
        <span class="med-font-size username" v-text="itemData.username"></span>
        <span class="small-font-size" v-text="itemData.depart"></span>
      </div>
      <div class="right">
        <span class="small-font-size operate" @click="$emit('edit')">编辑</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComPmAndPracticeList',
  components: {},
  props: {
    itemData: {
      type: Object,
      default: {
        imgSrc: '',
        title: '',
        avatar: '',
        username: '',
        depart: ''
      },
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.med-font-size {
  font-size: 14px;
  line-height: 14px;
}

.small-font-size {
  font-size: 12px;
  line-height: 12px;
}

.list-item {
  position: relative;
  margin-bottom: 12px;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0 2px 6px 0 rgba(7, 2, 27, 0.12);

  .img-wrap {
    height: 142px;
    .item-img {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  .title {
    position: absolute;
    top: 120px;
    margin-left: 12px;
    color: #eee;
  }
  .bottom {
    height: 38px;
    display: flex;
    align-items: center;
    background-color: #fff;
    .left {
      width: calc(100% - 52px);
      text-align: left;
      .avatar {
        margin-left: 12px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        vertical-align: middle;
      }
      .username {
        margin-left: 7px;
        margin-right: 4px;
      }
    }
    .right {
      display: flex;
      justify-content: flex-end;
      .operate {
        padding: 3px 8px;
        border-radius: 8px;
        border: 1px solid #42b983;
      }
    }
  }
}
</style>
