<template>
  <div id="pane" class="pane-left nav-full separator">
    <div class="navbar separator h-space-between">
      <div>CSS</div>
      <router-link to="/">Home</router-link>
    </div>
    <div id="menu" class="v-stack v-start h-start">
      <router-link to="/breadcrumb">Breadcrumb</router-link>
      <router-link to="/button">Button</router-link>
      <router-link to="/card">Card</router-link>
      <router-link to="/collection">Collection</router-link>
      <router-link to="/dropdown">Dropdown</router-link>
      <router-link to="/form">Form</router-link>
      <router-link to="/layout">Layout</router-link>
      <router-link to="/navbar">Navbar</router-link>
      <router-link to="/notification">Notification</router-link>
      <router-link to="/overlay">Overlay</router-link>
      <router-link to="/pane">Pane</router-link>
      <router-link to="/section">Section</router-link>
      <router-link to="/table">Table</router-link>
      <router-link to="/variables">Variables</router-link>
    </div>
    <div id="content">
      <div class="page-section dynamic max-width-md ma pa-3">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// import style javascript logid
require("@/style/style.js");

export default {};
</script>

<style lang="scss">
// import style scss library
@import "@/style/main.scss";

$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid";
@import "~@fortawesome/fontawesome-free/scss/regular";
@import "~@fortawesome/fontawesome-free/scss/brands";

html,
body {
  height: 100%;
  width: 100%;
}

#menu {
  overflow-y: auto;
  padding: 20px;
  gap: 10px;
  text-align: left;
}

#content {
  overflow-y: auto;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

  &.router-link-exact-active {
    color: #42b983;
    text-decoration: underline;
  }
}
</style>
