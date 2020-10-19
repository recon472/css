<template>
  <div class="v-stack h-stretch">
    <h1 class="h6 text-left">Dropdown</h1>
    <div class="card border light">
      <div ref="code1" class="content">
        <button class="dropdown">
          <div>Dropdown</div>
          <div class="dropdown-content">
            <button>Button1</button>
            <button>Button2</button>
            <div class="divider"></div>
            <button>Button3</button>
            <button>Button4</button>
          </div>
        </button>
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