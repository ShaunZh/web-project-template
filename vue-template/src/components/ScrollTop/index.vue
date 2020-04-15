<template>
  <svg-icon
    icon-class="ic-back-top"
    :class="{ 'ic-back-top': true, 'disp-back-top': dispBackTop }"
    @click="onBackTop"
  ></svg-icon>
</template>

<script>
export default {
  name: 'ComScrollTop',
  data() {
    return {
      dispBackTop: false
    }
  },
  methods: {
    onScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let browserHeight = window.outerHeight
      if (scrollTop > browserHeight) {
        this.dispBackTop = true
      } else {
        this.dispBackTop = false
      }
      console.log('scroll top')
    },
    onBackTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.disp-back-top {
  opacity: 1 !important;
}
.ic-back-top {
  position: fixed;
  bottom: 70px;
  right: 12px;
  width: 36px;
  height: 36px;
  color: #cdcdcd;
  transition: all 1s;
  opacity: 0;
}
</style>
