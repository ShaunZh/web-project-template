<!--
 * @Description: 
 * @Author: Hexon
 * @Date: 2020-04-09 14:40:54
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-14 18:25:37
 -->

<template>
  <div class="page-list-edit">
    <ListItemOperate operate="edit" :number="number"></ListItemOperate>
  </div>
</template>

<script>
import ListItemOperate from './components/ListItemOperate'
export default {
  name: 'ListItemEdit',
  components: {
    ListItemOperate
  },
  data() {
    return {
      number: ''
    }
  },
  created() {
    this.number = this.$route.query.number
  }
}
</script>
