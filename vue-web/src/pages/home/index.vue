<template>
  <div class="page-home">
    <router-link :to="{name: 'luck'}">go to luck</router-link>
    <router-link :to="{name: 'game'}">go to game</router-link>
    <router-link :to="{name: 'video'}">go to video</router-link>
  </div>
</template>

<script>
export default {
  name: 'homePage'
};
</script>

<style scoped></style>
