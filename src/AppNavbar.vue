<template>
  <div id="root">
    <div class="navbar h-space-between">
      <h6>Logo</h6>
      <div class="h-stack gap-3 nav-menu-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
      </div>
      <button class="nav-menu text">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <div class="nav" style="height: 600px"></div>
  </div>
</template>

<script>
require("@/style/style.js");
</script>

<style lang="scss">
@import "style/main.scss";

$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid";
@import "~@fortawesome/fontawesome-free/scss/regular";
@import "~@fortawesome/fontawesome-free/scss/brands";

html,
body {
  background-color: #0074d9;
  margin: 0;
  padding: 0;
}
</style>