<template>
  <div class="pad-head">
    <h1>Launchpad for lary</h1>
    <div class="flex-holder"></div>
    <a-tooltip placement="left">
      <template slot="title">
        <span>{{spin?"自动":"手动"}}</span>
      </template>
      <a-icon type="ellipsis" :spin="spin" @click="snapTheme" class="auto-theme-toggle"/>
    </a-tooltip>
    <a-switch v-model="themeVal" :disabled="spin">
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
        return this.aryThemeVal;
      },
      set(val) {
        this.setTheme(val);
        if (!this.spin) {
          localStorage.setItem("theme", val ? "light" : "dark");
        }
      }
    }
  },
  data() {
    return {
      spin: !localStorage.getItem("theme")
    };
  },
  methods: {
    snapTheme() {
      this.spin = !this.spin;
      if (this.spin) {
        localStorage.removeItem("theme");
        this.initTheme();
      } else {
        // 切换时,换色意愿较大
        this.themeVal = !this.themeVal;
        // localStorage.setItem("theme", this.aryTheme);
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
.auto-theme-toggle {
  margin-right: 0.5em;
  cursor: pointer;
}
</style>

