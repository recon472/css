<template>
  <div class="v-stack h-stretch">
    <h1 class="h6 text-left">Collection</h1>
    <a class="header text-left">4 columns, responsive</a>
    <div class="card light border">
      <div ref="code1" class="content h-stretch v-stretch">
        <div class="collection">
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code1 }}</prism>
    <a class="header text-left">5 columns, responsive</a>
    <div class="card border light">
      <div ref="code2" class="content h-stretch v-stretch">
        <div class="collection-5">
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code2 }}</prism>
  </div>
</template>

<script>
const html = require("@/html.js");

export default {
  data() {
    return {
      code1: "",
      code2: "",
    };
  },
  mounted() {
    this.code1 = html(this, "code1");
    this.code2 = html(this, "code2");
  },
};
</script>

<style lang="scss" scoped>
.collection-5 > div,
.collection > div {
  height: 100px;
  background-color: white;
  line-height: 100px;
}
</style>