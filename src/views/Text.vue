<template>
  <div class="v-stack h-stretch">
    <h1 class="h6 text-left">Text</h1>
    <a class="header text-left">Alignment</a>
    <prism
      language="scss"
      code=".text-left { } 
.text-right { } 
.text-center { } 
.text-justify { }"
    >
    </prism>
    <a class="header text-left">Paragraph</a>
    <div class="card light border">
      <div class="content">
        <div class="v-stack text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
            ornare wisi eu metus. Aliquam ante. Fusce consectetuer risus a nunc.
            Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel
            sapien. Ut tempus purus at lorem. Nullam eget nisl. Mauris suscipit,
            ligula sit amet pharetra semper, nibh ante cursus purus, vel
            sagittis velit mauris vel metus. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos hymenaeos. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Suspendisse nisl. Proin pede metus, vulputate nec,
            fermentum fringilla, vehicula vitae, justo. Fusce consectetuer risus
            a nunc. Sed vel lectus. Donec odio tempus molestie, porttitor ut,
            iaculis quis, sem. Aliquam in lorem sit amet leo accumsan lacinia.
            Nulla est. Vivamus porttitor turpis ac leo. Nullam eget nisl.
          </p>
          <p>
            Mauris metus. Praesent in mauris eu tortor porttitor accumsan.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla accumsan, elit sit amet varius
            semper, nulla mauris mollis quam, tempor suscipit diam nulla vel
            leo. Phasellus et lorem id felis nonummy placerat. Temporibus autem
            quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet ut et voluptates repudiandae sint et molestiae non
            recusandae. Fusce wisi. Nullam feugiat, turpis at pulvinar
            vulputate, erat libero tristique tellus, nec bibendum odio risus sit
            amet ante. Vestibulum fermentum tortor id mi. Curabitur sagittis
            hendrerit ante. Aenean placerat. Duis viverra diam non justo. Nunc
            auctor. Aliquam ante. Etiam dictum tincidunt diam. Vivamus luctus
            egestas leo. Maecenas lorem. Nullam rhoncus aliquam metus.
          </p>
        </div>
      </div>
    </div>
    <a class="header text-left">Headings</a>
    <div class="card light border">
      <div ref="code1" class="content">
        <div class="v-stack">
          <h1 class="h1">Heading 1</h1>
          <h1 class="h2">Heading 2</h1>
          <h1 class="h3">Heading 3</h1>
          <h1 class="h4">Heading 4</h1>
          <h1 class="h5">Heading 5</h1>
          <h1 class="h6">Heading 6</h1>
          <h1 class="h7">Heading 7</h1>
          <h1 class="h8">Heading 8</h1>
        </div>
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