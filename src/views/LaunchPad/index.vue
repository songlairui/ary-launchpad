<template>
  <div class="launch-pad flex-column" :styleName="aryTheme">
    <PadHead/>
    <div class="main">
      <div class="side">
        <SideBar/>
      </div>
      <div class="cards">
        <a name="card-top"></a>
        <h3>T·O·C</h3>
        <div class="toc">
          <ChapterToc class="chapter" v-for="item in chapterTocs" :key="item"/>
        </div>
        <div class="detail"></div>
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
  methods: {},
  created() {}
};
</script>
<style lang="less" scoped>
.launch-pad {
  height: 100%;
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
