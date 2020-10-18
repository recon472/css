<template>
  <div class="v-stack h-stretch">
    <h6 class="text-left">Section</h6>
    <a class="header text-left">Classes</a>
    <prism
      language="scss"
      code=".page-main { @extend .v-stack; } 
.page-section { @extend .v-stack; }"
    >
    </prism>
    <a class="header text-left">Sections</a>
    <div class="card border light">
      <div class="content h-stretch hide-y">
        <div ref="code1" class="inside scroll-y">
          <div class="page-main">
            <div>page-main fills the whole screen</div>
          </div>
          <div class="page-section dynamic">
            <div>page-section dynamic adjusts height to fit content</div>
          </div>
          <div class="page-section">
            <div>page-section has a set height in variables</div>
          </div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code1 }}</prism>
  </div>
</template>

<script>
const html = require("@/html.js");

export default {
  data() {
    return {
      code1: "",
    };
  },
  mounted() {
    this.code1 = html(this, "code1");
  },
};
</script>

<style lang="scss" scoped>
.inside {
  display: block;
  height: 500px;
}

.page-main {
  margin-bottom: 10px;
  background-color: white;
}

.page-section {
  background-color: white;
}

.page-section.dynamic {
  margin-bottom: 10px;
}
</style>