<!--
 * @Description: 
 * @Author: Hexon
 * @Date: 2020-04-09 13:44:59
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-09 16:25:17
 -->
<template>
  <div class="layout-basic">
    <AppMain />
    <Bottom />
  </div>
</template>

<script>
import AppMain from './components/AppMain'
import Bottom from './components/Bottom'
export default {
  name: 'BasicLayout',
  components: { AppMain, Bottom }
}
</script>
