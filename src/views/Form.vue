<template>
  <div class="v-stack h-stretch">
    <h6 class="text-left">Form</h6>
    <a class="header text-left">Classes</a>
    <prism language="scss" code=".form { @extend .v-stack; }"> </prism>
    <a class="header text-left">Form</a>
    <div class="card border light">
      <div ref="code1" class="content h-stretch">
        <form class="gap-3 h-stretch">
          <label style="width: 100px; margin: auto" class="scroll-label">
            This is a very long text that doesn't fit the label and therefore is
            autoscrolled
          </label>
          <label class="text-left">Input Text</label>
          <input type="text" />
          <label class="text-left">Password</label>
          <input type="password" />
          <label class="text-left">Checkbox</label>
          <input type="checkbox" />
          <label class="text-left">Radio</label>
          <div class="h-stack h-start gap-2">
            <input type="radio" name="test" />
            <label class="text-left ma">Option 1</label>
          </div>
          <div class="h-stack h-start gap-2">
            <input type="radio" name="test" />
            <label class="text-left ma">Option 2</label>
          </div>
          <div class="h-stack h-start gap-2">
            <input type="radio" name="test" />
            <label class="text-left ma">Option 3</label>
          </div>
          <label class="text-left">Textarea</label>
          <textarea></textarea>
          <div class="h-stack h-space-between">
            <input type="button" value="Button" />
            <input type="submit" value="Submit" />
          </div>
        </form>
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