<template>
  <div class="page-luck"><h1>luck page</h1></div>
</template>

<script>
export default {
  name: 'luckPage',
  created() {
    this.$ajax('/hparty')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err.message);
      });
  }
};
</script>

<style scoped></style>
