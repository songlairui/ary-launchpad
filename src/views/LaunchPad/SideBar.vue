<template>
  <div class="side-bar">
    <div class="panel shadow">
      <div class="to-top" @click="scrollTop">
        <a-icon type="to-top"/>
      </div>
      <div class="icon-block">
        <div class="icon-anchor">
          <a-icon type="left"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PadSideBar",
  methods: {
    scrollTop() {
      document.querySelector("#app").scrollIntoView();
    }
  }
};
</script>

<style lang="less" scoped>
.side-bar {
  padding: 0 32px;
  .panel {
    width: 100px;
    min-height: 200px;
    background: #191e38;
    color: #fff;
    border-radius: 4px;
    overflow: hidden;
  }
}
.to-top {
  background: #5d6aea;
  text-align: center;
}
</style>
