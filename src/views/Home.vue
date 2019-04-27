<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <a-affix :offsetTop="this.top">
      <a-button type="primary" @click="()=>{this.top += 10}">Affix top</a-button>
    </a-affix>
    <br>
    <a-affix :offsetBottom="this.bottom">
      <a-button type="primary" @click="()=>{this.bottom += 10}">Affix bottom</a-button>
    </a-affix>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Vue from "vue";
import { Button, Affix } from "ant-design-vue";

Vue.use(Button);
Vue.use(Affix);

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data(){return {
      top: 10,
      bottom: 10,
    }}
};
</script>
