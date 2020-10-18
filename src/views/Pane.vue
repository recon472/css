<template>
  <div class="v-stack h-stretch">
    <h6 class="text-left">Pane</h6>
    <a class="header text-left">Classes</a>
    <prism
      language="scss"
      code=".pane-left { @extend .h-stack; }
.pane-right { @extend .h-stack; }
.pane-top { @extend .v-stack; }
.pane-bottom { @extend .v-stack; }
.pane-vertical { @extend .v-stack; }
.pane-horizontal { @extend .h-stack; }"
    >
    </prism>
    <a class="header text-left">pane-left</a>
    <div class="card border light">
      <div ref="code1" class="content h-stretch">
        <div class="pane-left">
          <div class="v-stack">Fit</div>
          <div class="v-stack">Stretch</div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code1 }}</prism>
    <a class="header text-left">pane-right</a>
    <div class="card border light">
      <div ref="code2" class="content h-stretch">
        <div class="pane-right">
          <div class="v-stack">Stretch</div>
          <div class="v-stack">Fit</div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code2 }}</prism>
    <a class="header text-left">pane-top</a>
    <div class="card border light">
      <div ref="code3" class="content h-stretch">
        <div class="pane-top">
          <div class="v-stack">Fit</div>
          <div class="v-stack">Stretch</div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code3 }}</prism>
    <a class="header text-left">pane-bottom</a>
    <div class="card border light">
      <div ref="code4" class="content h-stretch">
        <div class="pane-bottom">
          <div class="v-stack">Stretch</div>
          <div class="v-stack">Fit</div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code4 }}</prism>
    <a class="header text-left">pane-vertical</a>
    <div class="card border light">
      <div ref="code5" class="content h-stretch">
        <div class="pane-vertical">
          <div class="v-stack">Equal</div>
          <div class="v-stack">Equal</div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code5 }}</prism>
    <a class="header text-left">pane-horizontal</a>
    <div class="card border light">
      <div ref="code6" class="content h-stretch">
        <div class="pane-horizontal">
          <div class="v-stack">Equal</div>
          <div class="v-stack">Equal</div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code6 }}</prism>
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
      code4: "",
      code5: "",
      code6: "",
    };
  },
  mounted() {
    this.code1 = html(this, "code1");
    this.code2 = html(this, "code2");
    this.code3 = html(this, "code3");
    this.code4 = html(this, "code4");
    this.code5 = html(this, "code5");
    this.code6 = html(this, "code6");
  },
};
</script>

<style lang="scss" scoped>
.pane-vertical,
.pane-horizontal,
.pane-left,
.pane-right,
.pane-top,
.pane-bottom {
  height: 200px;
  gap: 20px;
}

.pane-vertical > div,
.pane-horizontal > div,
.pane-top > div,
.pane-bottom > div,
.pane-right > div,
.pane-left > div {
  background-color: white;
  border-radius: 5x;
  padding: 10px;
}
</style>