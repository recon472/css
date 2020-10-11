<template>
  <div class="v-stack h-stretch">
    <h6 class="text-left">Breadcrumb</h6>
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