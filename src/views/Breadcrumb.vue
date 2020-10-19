<template>
  <div class="v-stack h-stretch">
    <h1 class="h6 text-left">Breadcrumb</h1>
    <a class="header text-left">Classes</a>
    <prism language="scss"> .breadcrumb { @extend .h-stack; } </prism>
    <a class="header text-left">breadcrumb</a>
    <div class="card border light">
      <div ref="code1" class="content">
        <div class="breadcrumb">
          <div>Home</div>
          <div>Products</div>
          <div>Devices</div>
          <div class="disabled">Phones</div>
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