<template>
  <div class="v-stack">
    <h6 class="text-left">Button</h6>
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
  </div>
</template>

<script>
var format = require("xml-formatter");

export default {
  data() {
    return {
      code1: "",
      code2: "",
      code3: "",
    };
  },
  methods: {
    htmlToString(reference) {
      return this.$refs[reference].innerHTML.toString();
    },
  },
  mounted() {
    this.code1 = format("<root>" + this.htmlToString("code1") + "</root>", {
      collapseContent: true,
    });
    this.code2 = format("<root>" + this.htmlToString("code2") + "</root>", {
      collapseContent: true,
    });
    this.code3 = format("<root>" + this.htmlToString("code3") + "</root>", {
      collapseContent: true,
    });
  },
};
</script>