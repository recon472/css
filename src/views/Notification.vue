<template>
  <div class="v-stack h-stretch">
    <h6 class="text-left">Notification</h6>
    <div class="card border light">
      <div ref="code1" class="content">
        <div id="notification" class="notification"></div>
        <button class="dynamic" @click="notify('This is a notification')">
          Show Notification
        </button>
      </div>
    </div>
    <prism language="html">{{ code1 }}</prism>
    <a class="header text-left">Javascript</a>
    <prism language="javascript">{{ code2 }}</prism>
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
  methods: {
    notify(message) {
      let notification = document.getElementById("notification");
      notification.classList.add("show");
      notification.innerHTML = message;
      notification.parentNode.replaceChild(notification, notification);
    },
  },
  mounted() {
    this.code1 = html(this, "code1");
    this.code2 = `notify(message) {
  let notification = document.getElementById("notification");
  notification.classList.add("show");
  notification.innerHTML = message;
  notification.parentNode.replaceChild(notification, notification);
},`;
  },
};
</script>