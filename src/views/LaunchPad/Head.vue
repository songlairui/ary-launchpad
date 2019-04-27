<template>
  <div class="pad-head">
    <h1>Launchpad for lary</h1>
    <div class="flex-holder"></div>
    <a-switch v-model="themeVal" defaultChecked>
      <a-icon type="bulb" slot="checkedChildren"/>
      <a-icon type="fire" slot="unCheckedChildren"/>
    </a-switch>
  </div>
</template>
<script>
export default {
  name: "PadHead",
  computed: {
    themeVal: {
      get() {
        return this.aryTheme;
      },
      set(val) {
        this.setTheme(val);
      }
    }
  }
};
</script>
<style lang="less">
.pad-head {
  padding: 1em 32px;
  font-size: 12px;
  display: flex;
  align-items: center;
}
</style>

