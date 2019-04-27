<template>
  <div class="launch-pad" :class="themeClass">
    <h1>
      Launchpad for lary
      <a-switch v-model="theme" defaultChecked>
        <a-icon type="bulb" slot="checkedChildren"/>
        <a-icon type="fire" slot="unCheckedChildren"/>
      </a-switch>
    </h1>
  </div>
</template>

<script>
import { Affix, Button } from "ant-design-vue";

export default {
  name: "LaunchPad",
  data() {
    return {
      bottom: 50,
      theme: true
    };
  },
  computed: {
    themeClass() {
      return this.theme ? this.$style.light : this.$style.dark;
    }
  },
  methods: {},
  created() {}
};
</script>
<style lang="less" scoped>
.launch-pad {
  height: 100%;
  transition: background 0.3s;
}
</style>

<style lang="less" module>
.light {
  background: #bbc6d6;
  color: #2e3f4c;
}
.dark {
  background: #2e3f4c;
  color: #bbc6d6;
  * {
    color: #bbc6d6;
  }
}
</style>

