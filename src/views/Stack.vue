<template>
  <div class="v-stack h-stretch">
    <h6 class="text-left">Stack</h6>
    <div class="card border light">
      <div ref="code1" class="content h-stretch">
        <div class="v-stack">
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code1 }}</prism>
    <div class="card border light">
      <div ref="code2" class="content h-space-around">
        <div class="h-stack">
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code2 }}</prism>
    <h6 class="text-left">Alignment</h6>
    <div class="pane-horizontal">
      <prism
        language="scss"
        code=".h-start {}
.h-end {}
.h-center {}
.h-stretch {}
.h-space-around {}
.h-space-between {}
.h-space-evenly {}"
      ></prism>
      <prism
        language="scss"
        code=".v-start {}
.v-end {}
.v-center {}
.v-stretch {}
.v-space-around {}
.v-space-between {}
.v-space-evenly {}"
      ></prism>
    </div>

    <div class="card border light">
      <div ref="code3" class="content h-stretch v-stretch">
        <div class="h-stack h-stretch v-stretch">
          <div class="v-stack">
            <div>Item</div>
          </div>
          <div class="v-stack gap-3 v-space-evenly">
            <div>Item</div>
            <div>Item</div>
          </div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code3 }}</prism>
  </div>
</template>

<script>
const html = require("@/html.js");

export default {
  data() {
    return {
      code1: "",
      code2: "",
      code3: "",
    };
  },
  mounted() {
    this.code1 = html(this, "code1");
    this.code2 = html(this, "code2");
    this.code3 = html(this, "code3");
  },
};
</script>

<style lang="scss" scoped>
.content > .h-stack,
.content > .v-stack {
  min-height: 130px;
  gap: 10px;
  & > div:not(.v-stack) {
    background-color: white;
    padding: 10px;
    border-radius: 5px;
  }
  & * div:not(.v-stack) {
    background-color: white;
    padding: 10px;
    border-radius: 5px;
  }
}
</style>

