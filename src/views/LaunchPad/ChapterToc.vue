<template>
  <div class="chapter-toc">
    <div class="header">
      <h3 class="meta" :styleName="`${aryTheme}-meta`">
        <span class="idx center">{{meta.idx}}</span>
        <span class="name center">{{meta.title || meta.name || meta.selfQuestion || meta.type}}</span>
      </h3>
    </div>
    <div class="connect-line"></div>
    <div class="card" :styleName="`${aryTheme}-card`">
      <div class="item" :key="item.icon" v-for="item in linksToShow" @click="itemClick">
        <span class="icon">
          <icon-font :type="item.icon || 'iconkongqizhiliang'"/>
        </span>
        <span class="name">{{item.name}}</span>
      </div>
      <div class="pagi" v-if="hasPagi">
        <div
          class="dot-sect"
          :class="{light:dot.light}"
          v-for="dot in progressDots"
          :key="dot.idx"
          @click="pagi(dot.idx)"
        >
          <div class="dot"></div>
        </div>
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
  data() {
    return {
      first: 0,
      take: 8,
      dots: 15
    };
  },
  computed: {
    end() {
      const { first, take } = this;
      return first + take;
    },
    hasPrev() {
      return this.first > 0;
    },
    hasNext() {
      return this.end < this.links.length;
    },
    hasPagi() {
      return this.hasPrev || this.hasNext;
    },
    region() {
      const { first, end } = this;
      return [first, end].map(
        num => Math.round((num * 1000) / this.links.length) / 100
      );
    },
    progressDots() {
      const length = this.dots;
      return Array.from({ length }).map((__, idx) => ({
        idx,
        light: this.checkLight(idx, length - 2)
      }));
    },
    linksToShow() {
      return this.links.slice(this.first, this.end);
    }
  },
  methods: {
    itemClick() {
      this.$message.info("TODO");
    },
    checkLight(idx, length) {
      const [a, b] = this.region;
      const cur = (idx / length) * 10;
      return a <= cur && cur <= b;
    },
    pagi(idx) {
      const [a, b] = this.region;
      if (idx < a) {
        this.first = Math.max(0, this.first - this.take);
      } else if (idx > b) {
        this.first = Math.min(
          this.links.length - this.take,
          this.first + this.take
        );
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/var.less";

.chapter-toc {
  display: inline-flex;
  flex-direction: column;
  min-width: 120px;
  padding: 5px 20px 20px;
  .meta {
    font-size: 12px;
    margin-bottom: 0;
    display: inline-flex;
    height: 29px;
    border-radius: 16px;
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
    flex: 1;
    min-height: 50px;
    border-radius: 10px;
    padding: 12px 16px;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.09),
      0 2px 6px 0 rgba(0, 0, 0, 0.05);
    border: 0 solid #bbc6d6;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    .item {
      display: inline-flex;
      padding: 5px;
      margin: 8px 0;
      align-items: center;
      flex: 0 0 50%;
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
    .pagi {
      flex: 1 0 100%;
      padding-top: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .dot-sect {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px 0;
        cursor: pointer;
        .dot {
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: lightgray;
          transition: all 0.2s;
        }

        &.light {
          .dot {
            width: 4px;
            height: 4px;
            background: @accent-color;
          }
        }
        &:first-child,
        &:last-child {
          .dot {
            background: lightgray;
            width: 4px;
            height: 4px;
          }
        }
      }
    }
  }
}
</style>
