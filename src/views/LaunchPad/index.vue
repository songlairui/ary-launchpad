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
          <ChapterToc
            class="chapter"
            v-for="(item, idx) in chapterTocs"
            :key="idx"
            :meta="item.meta"
            :links="item.links"
          />
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
  // - 此刻我有什么事情没做好吗?
  // - Within Day
  //   - 吃饭, 迟, 1 day ~ 10h
  //   - 洗衣服, 迟, 未取 ~ 4h
  //   - 洗袜子, 迟, 未取 2h
  data() {
    return {
      bottom: 50,
      chapterTocs: [
        {
          meta: {
            idx: "〇",
            name: "此刻我有什么事情没做好吗?"
          },
          links: [{ name: "Within Day" }]
        },
        {
          meta: {
            idx: "I",
            name: "Within Day"
          },
          links: [{ name: "吃饭" }, { name: "洗衣服" }, { name: "洗袜子" }]
        },
        {
          meta: {
            idx: "II",
            name: "PROJECTS CREATING"
          },
          links: [
            {
              name: "Workspace-ui"
            },
            {
              name: "Algorithm doc"
            },
            {
              name: "Git Subtree"
            },
            {
              name: "larry Gatsby"
            }
          ]
        },
        {
          meta: {
            idx: "III",
            name: "FRAMEWORK EAGERRING"
          },
          links: [
            {
              name: "NestJs"
            },
            {
              name: "Apollo"
            },
            {
              name: "Prisma"
            },
            {
              name: "Rxjs"
            },
            {
              name: "Docker"
            }
          ]
        },
        {
          meta: {
            idx: "XX",
            name: "BLANK"
          }
        }
      ]
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
          flex: 0 0 360px;
        }
      }
    }
  }
}
</style>
