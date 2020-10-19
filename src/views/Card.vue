<template>
  <div class="v-stack h-stretch">
    <h1 class="h6 text-left">Card</h1>
    <a class="header text-left">Classes</a>
    <prism
      language="scss"
      code=".card { @extend .v-stack; } 
.header { @extend .h-stack; } 
.content { @extend .h-stack; } 
.footer { @extend .h-stack; }"
    >
    </prism>
    <a class="header text-left">card - header, content, footer</a>
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
    <a class="header text-left">Colors</a>
    <div class="card light border">
      <div ref="code2" class="content">
        <div class="card border light">
          <div class="content">Light</div>
        </div>
        <div class="card border dark">
          <div class="content">Dark</div>
        </div>
        <div class="card border primary">
          <div class="content text-white">Primary</div>
        </div>
        <div class="card border secondary">
          <div class="content text-white">Secondary</div>
        </div>
        <div class="card border warning">
          <div class="content text-white">Warning</div>
        </div>
        <div class="card border error">
          <div class="content text-white">Error</div>
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