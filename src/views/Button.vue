<template>
  <div class="v-stack h-stretch">
    <h1 class="h6 text-left">Button</h1>
    <a class="header text-left">Types</a>
    <div class="card border light">
      <div class="content">
        <div ref="code1" class="h-stack gap-3">
          <button>Normal</button>
          <button class="flat">Flat</button>
          <button class="dynamic">Dynamic Size</button>
          <button class="icon">
            <i class="fas fa-icons"></i>
          </button>
          <button class="circle">Circle</button>
          <button class="text">Text</button>
        </div>
      </div>
    </div>
    <prism language="html">{{ code1 }}</prism>
    <a class="header text-left">Colors</a>
    <div class="card border light">
      <div class="content">
        <div ref="code2" class="h-stack gap-3">
          <button class="primary">Primary</button>
          <button class="secondary">Secondary</button>
          <button class="warning">Warning</button>
          <button class="error">Error</button>
        </div>
      </div>
    </div>
    <prism language="html">{{ code2 }}</prism>
    <div class="card border light">
      <div class="content">
        <div ref="code3" class="h-stack gap-3">
          <button class="light">Light</button>
          <button class="dark">Dark</button>
        </div>
      </div>
    </div>
    <prism language="html">{{ code3 }}</prism>
    <a class="header text-left">Sizes</a>
    <div class="card border light">
      <div class="content">
        <div ref="code4" class="h-stack gap-3">
          <button class="xs">XSmall</button>
          <button class="sm">Small</button>
          <button class="md">Medium</button>
          <button>Normal</button>
          <button class="lg">Large</button>
          <button class="xl">XLarge</button>
        </div>
      </div>
    </div>
    <prism language="html">{{ code4 }}</prism>
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
    };
  },
  mounted() {
    this.code1 = html(this, "code1");
    this.code2 = html(this, "code2");
    this.code3 = html(this, "code3");
    this.code4 = html(this, "code4");
  },
};
</script>