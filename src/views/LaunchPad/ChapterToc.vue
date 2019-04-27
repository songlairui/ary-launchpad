<template>
  <div class="chapter-toc">
    <h3 class="meta">
      <span class="idx center">{{meta.idx}}</span>
      <span class="name center">{{meta.name}}</span>
    </h3>
    <div class="connect-line"></div>
    <div class="card">
      <div class="item" v-for="item in links" @click="itemClick">
        <span class="icon">
          <icon-font :type="item.icon || 'iconkongqizhiliang'"/>
        </span>
        <span class="name">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    meta: {
      type: Object,
      default: () => ({
        idx: "I",
        name: "Cap This No.1"
      })
    },
    links: {
      type: Array,
      default: () => [
        { icon: "iconshuizhi", name: "Mapping", link: "/mapping" },
        { icon: "iconkongqizhiliang1", name: "Mapping", link: "/mapping" },
        { icon: "iconkongqizhiliang", name: "Mapping", link: "/mapping" },
        { icon: "iconhuanbaoyilantu", name: "Mapping", link: "/mapping" }
      ]
    }
  },
  methods: {
    itemClick() {
      this.$message.info("TODO");
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/var.less";

.chapter-toc {
  display: inline-block;
  min-width: 120px;
  padding: 5px 20px 20px;
  .meta {
    font-size: 12px;
    margin-bottom: 0;
    display: inline-flex;
    height: 29px;
    border-radius: 16px;
    background: #f4f5ff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    .idx {
      transform: translate(-2px, -2px);
      background: @accent-color;
      color: #fff;
      border-radius: 16px;
      width: 32px;
      height: 32px;
      overflow: hidden;
      font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New,
        monospace;
      box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
        0 5px 15px 0 rgba(0, 0, 0, 0.08);
    }
    .name {
      padding: 0 1em 0 0.5em;
      font-weight: 400;
    }
  }
  .connect-line {
    background-color: #9faec3;
    width: 6px;
    height: 1.25em;
    margin-left: 13px;
  }
  .card {
    min-height: 50px;
    background-color: #fff;
    border-radius: 10px;
    padding: 12px 16px;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.09),
      0 2px 6px 0 rgba(0, 0, 0, 0.05);
    border: 0 solid #bbc6d6;
    display: flex;
    flex-wrap: wrap;
    .item {
      display: inline-flex;
      padding: 5px;
      margin: 8px 0;
      align-items: center;
      flex: 1 0 40%;
      cursor: pointer;
      transition: background 0.2s;
      border-radius: 5px;

      .icon {
        color: @accent-color;
        padding-right: 8px;
      }
      .name {
        font-weight: 500;
      }
      &:hover {
        background: rgba(0, 0, 0, 0.11);
      }
    }
  }
}
</style>
