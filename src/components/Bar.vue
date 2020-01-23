<template>
  <div class="hello">
    This is Bar.....................
    <div>And count is {{ count }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Bar",
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
