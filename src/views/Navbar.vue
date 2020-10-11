<template>
  <div class="v-stack h-stretch">
    <h6 class="text-left">Navbar</h6>
    <div class="card border light">
      <div class="content h-stretch v-stretch">
        <iframe ref="iframe1"></iframe>
      </div>
    </div>
    <prism language="html">{{ code1 }}</prism>
    <div class="card border light">
      <div class="content h-stretch v-stretch">
        <iframe ref="iframe2"></iframe>
      </div>
    </div>
    <prism language="html">{{ code2 }}</prism>
    <div class="card border light">
      <div class="content h-stretch v-stretch">
        <iframe ref="iframe3"></iframe>
      </div>
    </div>
    <prism language="html">{{ code3 }}</prism>
    <div class="card border light">
      <div class="content h-stretch v-stretch">
        <iframe ref="iframe4"></iframe>
      </div>
    </div>
    <prism language="html">{{ code4 }}</prism>
    <div class="card border light">
      <div class="content h-stretch v-stretch">
        <iframe ref="iframe5"></iframe>
      </div>
    </div>
    <prism language="html">{{ code5 }}</prism>
    <div class="card border light">
      <div class="content h-stretch v-stretch">
        <iframe ref="iframe6"></iframe>
      </div>
    </div>
    <prism language="html">{{ code6 }}</prism>
    <div class="card border light">
      <div class="content h-stretch v-stretch">
        <iframe ref="iframe7"></iframe>
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
    createNavbarPage(reference, style) {
      const iFrameDocument = this.$refs[reference].contentWindow.document;
      iFrameDocument.open();
      iFrameDocument.write("<html><head>");
      for (const style of document.head.getElementsByTagName("style")) {
        const clone = style.cloneNode(true);
        iFrameDocument.write("<style type='text/css'>");
        iFrameDocument.write(clone.innerHTML);
        iFrameDocument.write("</style>");
      }
      iFrameDocument.write("</head>");
      iFrameDocument.write("<body style='background-color: #0074D9;'>");
      const html = `
    <div class="navbar ${style} h-space-between">
      <h6>Logo</h6>
      <div class="h-stack gap-3 nav-menu-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
      </div>
      <button class="nav-menu text">
      <i>Menu</i>
      </button>
    </div>
    <div class="nav v-stack" style="height: 300px;">Content</div>
    `;
      iFrameDocument.write(html);
      for (const script of document.scripts) {
        iFrameDocument.write(
          `\x3Cscript type='text/javascript' src='${script.src}'>\x3C/script>`
        );
      }
      iFrameDocument.write("</body>");
      iFrameDocument.close();
      return html;
    },
  },
  mounted() {
    this.code1 = html(this, null, this.createNavbarPage("iframe1", ""));
    this.code2 = html(this, null, this.createNavbarPage("iframe2", "absolute"));
    this.code3 = html(
      this,
      null,
      this.createNavbarPage("iframe3", "transparent")
    );
    this.code4 = html(
      this,
      null,
      this.createNavbarPage("iframe4", "transparent-always")
    );
    this.code5 = html(this, null, this.createNavbarPage("iframe5", "shadow"));
    this.code6 = html(this, null, this.createNavbarPage("iframe6", "light"));
    this.code7 = html(this, null, this.createNavbarPage("iframe7", "dark"));
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