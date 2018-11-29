<template>
  <div class="app-container"><router-view></router-view></div>
</template>

<script>
export default {
  methods: {
    bindEvent() {
      gGlobal.vbus.$on('business.response.incorrect', resData => {
        // ... code 不为 0，业务不正确处理
      });
      // 自行触发
      gGlobal.vbus.$on('ajax.request.error', resData => {});
      gGlobal.vbus.$on('ajax.response.error', resData => {});
    }
  },
  created() {
    this.bindEvent();
  }
};
</script>
