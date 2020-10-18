<template>
  <div class="v-stack h-stretch">
    <h6 class="text-left">Navbar</h6>
    <a class="header text-left">Classes</a>
    <prism language="scss" code=".navbar { @extend .h-stack; }"> </prism>
    <a class="header text-left">Fixed opaque navbar</a>
    <div class="card border light">
      <div class="content h-stretch v-stretch">
        <iframe ref="iframe1" src="navbar.html"></iframe>
      </div>
    </div>
    <prism language="html">{{ code1 }}</prism>
    <a class="header text-left">Scrolling navbar</a>
    <div class="card border light">
      <div class="content h-stretch v-stretch">
        <iframe ref="iframe2" src="navbar.html"></iframe>
      </div>
    </div>
    <prism language="html">{{ code2 }}</prism>
    <a class="header text-left">Transparent when page is all the way up</a>
    <div class="card border light">
      <div class="content h-stretch v-stretch">
        <iframe ref="iframe3" src="navbar.html"></iframe>
      </div>
    </div>
    <prism language="html">{{ code3 }}</prism>
    <a class="header text-left">Always transparent</a>
    <div class="card border light">
      <div class="content h-stretch v-stretch">
        <iframe ref="iframe4" src="navbar.html"></iframe>
      </div>
    </div>
    <prism language="html">{{ code4 }}</prism>
    <a class="header text-left">Shadow underneath</a>
    <div class="card border light">
      <div class="content h-stretch v-stretch">
        <iframe ref="iframe5" src="navbar.html"></iframe>
      </div>
    </div>
    <prism language="html">{{ code5 }}</prism>
    <a class="header text-left">Light navbar</a>
    <div class="card border light">
      <div class="content h-stretch v-stretch">
        <iframe ref="iframe6" src="navbar.html"></iframe>
      </div>
    </div>
    <prism language="html">{{ code6 }}</prism>
    <a class="header text-left">Dark navbar</a>
    <div class="card border light">
      <div class="content h-stretch v-stretch">
        <iframe ref="iframe7" src="navbar.html"></iframe>
      </div>
    </div>
    <prism language="html">{{ code7 }}</prism>
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
      code5: "",
      code6: "",
      code7: "",
    };
  },
  methods: {
    setUpIframe(reference, variableName, css = []) {
      this.$refs[reference].contentWindow.onload = () => {
        const navbar = this.$refs[
          reference
        ].contentWindow.document.getElementsByClassName("navbar")[0];
        for (const cssClass of css) {
          navbar.classList.add(cssClass);
        }
        this[variableName] = html(
          this,
          this.$refs[reference].contentWindow.document.getElementById("root")
        );
      };
    },
  },
  mounted() {
    this.setUpIframe("iframe1", "code1");
    this.setUpIframe("iframe2", "code2", ["absolute"]);
    this.setUpIframe("iframe3", "code3", ["transparent"]);
    this.setUpIframe("iframe4", "code4", ["transparent-always"]);
    this.setUpIframe("iframe5", "code5", ["shadow"]);
    this.setUpIframe("iframe6", "code6", ["light"]);
    this.setUpIframe("iframe7", "code7", ["dark"]);
  },
};
</script>

<style scoped>
iframe {
  width: 100%;
  height: 300px;
  border: 1px darkgray solid;
  border-radius: 4px;
}
</style>