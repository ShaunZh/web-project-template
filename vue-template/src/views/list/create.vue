<!--
 * @Description: 
 * @Author: Hexon
 * @Date: 2020-04-09 14:40:59
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-14 18:49:54
 -->
<template>
  <div class="page-list-create">
    <ListItemOperate operate="create"></ListItemOperate>
  </div>
</template>

<script>
import ListItemOperate from './components/ListItemOperate'
export default {
  name: 'ListItemCreate',
  components: { ListItemOperate }
}
</script>
