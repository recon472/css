<template>
  <div class="v-stack h-stretch">
    <h6 class="text-left">Overlay</h6>
    <a class="header text-left">Dismissable by outside click</a>
    <div class="card border light">
      <div ref="code1" class="content h-stretch v-stretch">
        <div id="overlay1" class="overlay">
          <div class="card">
            <div class="content">This card is displayed inside an overlay</div>
            <div class="footer">
              <button class="dismiss">Dismiss</button>
            </div>
          </div>
        </div>
        <button overlay="overlay1" class="dynamic">Show Overlay</button>
      </div>
    </div>
    <prism language="html">{{ code1 }}</prism>
    <a class="header text-left">Persistent</a>
    <div class="card border light">
      <div ref="code2" class="content h-stretch v-stretch">
        <div id="overlay2" class="overlay persistent">
          <div class="card">
            <div class="content">
              This overlay can't be dismissed by clicking outside
            </div>
            <div class="footer">
              <button class="dismiss">Dismiss</button>
            </div>
          </div>
        </div>
        <button overlay="overlay2" class="dynamic">Show Overlay</button>
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