<template>
  <div class="v-stack h-stretch">
    <h1 class="h6 text-left">Table</h1>
    <div class="card border light">
      <div ref="code1" class="content h-stretch v-stretch">
        <div class="table">
          <div class="table-header my-table-row">
            <div>ID</div>
            <div class="text-left">Name</div>
          </div>
          <div class="table-row my-table-row">
            <div>46586</div>
            <div class="text-left">Sock</div>
          </div>
          <div class="table-row my-table-row selected">
            <div>43456</div>
            <div class="text-left">Bird</div>
          </div>
          <div class="table-row my-table-row">
            <div>42456</div>
            <div class="text-left">Car</div>
          </div>
          <div class="table-row my-table-row">
            <div>48536</div>
            <div class="text-left">Plane</div>
          </div>
          <div class="table-row my-table-row">
            <div>49636</div>
            <div class="text-left">Head</div>
          </div>
        </div>
      </div>
    </div>
    <prism language="html">{{ code1 }}</prism>
    <a class="header text-left">Format columns using css grid</a>
    <prism language="css">
      .my-table-row { grid-auto-columns: 100px 1fr !important; }
    </prism>
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

<style lang="scss" scoped>
.my-table-row {
  grid-auto-columns: 100px 1fr !important;
}
.table {
  background-color: white;
  border-radius: 5px;
}
</style>