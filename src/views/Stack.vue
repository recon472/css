<template>
  <div class="v-stack h-stretch">
    <h6 class="text-left">Stack</h6>
    <p class="text-left">
      Stack is the base element that most layout elements extend. Therefore use
      the same stack concept for the whole layout.
    </p>
    <p class="text-left">
      It is always preffered not to set the size of the content and let the
      v/h-stack determine children size. Also the alignment of items should be
      handled by the v/h-stack when possible. If you use max-width on an element
      that should be centered, use the ma class (margin: auto;). Centering text
      vertically should be always possible using a v/h-stack, you can always
      nest them just for alignment. It's better to use multiple v/h-stacks
      instead of explicitly setting line-height.
    </p>
    <p class="text-left">
      Spacing between elements should be done by setting the gap property. If
      that is not enough, use padding rather than margin on the child element.
      Again nesting multiple v/h-stack should do the job with just using the gap
      property.
    </p>
    <a class="header text-left">v-stack</a>
    <div class="card border light">
      <div ref="code1" class="content h-stretch">
        <div class="v-stack">
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code1 }}</prism>
    <a class="header text-left">h-stack</a>
    <div class="card border light">
      <div ref="code2" class="content h-space-around">
        <div class="h-stack">
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code2 }}</prism>
    <a class="header text-left">Alignment</a>
    <div class="pane-horizontal">
      <prism
        language="scss"
        code=".h-start {}
.h-end {}
.h-center {}
.h-stretch {}
.h-space-around {}
.h-space-between {}
.h-space-evenly {}"
      ></prism>
      <prism
        language="scss"
        code=".v-start {}
.v-end {}
.v-center {}
.v-stretch {}
.v-space-around {}
.v-space-between {}
.v-space-evenly {}"
      ></prism>
    </div>
    <a class="header text-left">Spacing</a>
    <prism
      language="scss"
      code=".gap-0 {} // zero spacing, default
.gap-1 {} // step 1 in variables
.gap-2 {} // step 2 in variables
.gap-3 {} // step 3 in variables
.gap-4 {} // step 4 in variables
.gap-5 {} // step 5 in variables"
    ></prism>
    <a class="header text-left">Responsive h-stack</a>
    <p class="text-left">
      Use the sm, md, lg and xl classes to make an h-stack become a v-stack when
      the width is smaller than the specified breakpoint.
    </p>
    <prism
      language="scss"
      code=".sm {} // small
.md {} // medium
.lg {} // large,
.xl {} // extra large"
    ></prism>
    <a class="header text-left">Complex layout</a>
    <div class="card border light">
      <div ref="code3" class="content h-stretch v-stretch">
        <div class="h-stack h-stretch v-stretch md">
          <div class="v-stack">
            <div>Item</div>
          </div>
          <div class="v-stack gap-3 v-space-evenly">
            <div>Item</div>
            <div>Item</div>
          </div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code3 }}</prism>
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
    };
  },
  mounted() {
    this.code1 = html(this, "code1");
    this.code2 = html(this, "code2");
    this.code3 = html(this, "code3");
  },
};
</script>

<style lang="scss" scoped>
.content > .h-stack,
.content > .v-stack {
  min-height: 130px;
  gap: 10px;
  & > div:not(.v-stack) {
    background-color: white;
    padding: 10px;
    border-radius: 5px;
  }
  & * div:not(.v-stack) {
    background-color: white;
    padding: 10px;
    border-radius: 5px;
  }
}
</style>

