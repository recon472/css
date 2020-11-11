<template>
  <div class="v-stack h-stretch">
    <h1 class="h6 text-left">Drag Overlay</h1>
    <a class="header text-left">Classes</a>
    <prism
      language="scss"
      code=".drag-overlay { @extend .v-stack; }
.handle { @extend .v-stack; }
.absolute { position: absolute }"
    >
    </prism>
    <div class="card border light">
      <div ref="code1" class="content h-space-around">
        <div class="drag-overlay">
          <div class="handle">
            <p>Content</p>
          </div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code1 }}</prism>
    <div class="card border light">
      <div ref="code2" class="content h-space-around">
        <div class="drag-overlay absolute">
          <div class="handle">
            <p>Handle</p>
          </div>
          <p>Content</p>
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
.card {
  height: 100px;
  position: relative;
}

.drag-overlay {
  background-color: white;
  border-radius: 4px;
  border: 1px solid #eee;
}
</style>