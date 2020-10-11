<template>
  <div class="v-stack h-stretch">
    <h6 class="text-left">Card</h6>
    <div class="card border light">
      <div ref="code1" class="content h-space-around">
        <div class="card">
          <div class="header">Header</div>
          <div class="content">Card scales dynamically to fit content</div>
          <div class="footer">Footer</div>
        </div>
        <div class="card border">
          <div class="content">Border</div>
        </div>
        <div class="card">
          <div class="header">Header</div>
          <div class="content">Content</div>
        </div>
        <div class="card">
          <div class="content">Content</div>
          <div class="footer">Footer</div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code1 }}</prism>
    <div class="card light border">
      <div ref="code2" class="content">
        <div class="card border light">
          <div class="content">Light</div>
        </div>
        <div class="card border dark">
          <div class="content">Dark</div>
        </div>
        <div class="card border primary">
          <div class="content">Primary</div>
        </div>
        <div class="card border secondary">
          <div class="content">Secondary</div>
        </div>
        <div class="card border warning">
          <div class="content">Warning</div>
        </div>
        <div class="card border error">
          <div class="content">Error</div>
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