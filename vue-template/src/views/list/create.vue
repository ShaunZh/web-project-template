<!--
 * @Description: 
 * @Author: Hexon
 * @Date: 2020-04-09 14:40:59
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-14 14:19:10
 -->
<template>
  <div class="page-list-add">
    <ListItemOperate operate="create"></ListItemOperate>
  </div>
</template>

<script>
import ListItemOperate from './components/ListItemOperate'
export default {
  name: 'ListItemAdd',
  components: { ListItemOperate }
}
</script>
