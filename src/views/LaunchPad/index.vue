<template>
  <div class="launch-pad flex-column" :class="themeClass">
    <PadHead/>
    <div class="main">
      <div class="side">
        <SideBar/>
      </div>
      <div class="cards">
        <a name="card-top"></a>
        <h3>T·O·C</h3>
        <div class="toc">
          <ChapterToc class="chapter" v-for="item in chapterTocs"/>
        </div>
        <div class="detail"></div>
        <div class="blank"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Affix, Button } from "ant-design-vue";
import PadHead from "./Head.vue";
import SideBar from "./SideBar.vue";
import ChapterToc from "./ChapterToc.vue";

export default {
  name: "LaunchPad",
  components: {
    PadHead,
    SideBar,
    ChapterToc
  },
  data() {
    return {
      bottom: 50,
      chapterTocs: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    themeClass() {
      return this.aryTheme ? this.$style.light : this.$style.dark;
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
  .main {
    flex: 1;
    display: flex;
    overflow: hidden;
    .side {
      min-width: 50px;
    }
    .cards {
      flex: 1;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      .toc {
        display: flex;
        flex-wrap: wrap;
        .chapter {
          flex: 0 0 45%;
        }
      }
    }
  }
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

