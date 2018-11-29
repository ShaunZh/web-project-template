<template>
  <div class="page-game"><p class="ignore">game page</p></div>
</template>

<script>
export default {
  name: 'gamePage',
  created() {
    console.log('asdfasf');
  }
};
</script>
<style scoped lang="scss">
.page-game {
  > p {
    /*background-color: red;*/
    width: 100px;
    height: 300px;
    border-bottom: 1px solid red;
    &.ignore {
      font-size: 32px;
    }
  }
}
</style>
