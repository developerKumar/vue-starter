<template>
  <div class="hello">
    This is Foo.....................
    <div class="counter">{{ counterValue }}</div>
    <button @click="add">Increment</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class Foo extends Vue {
  // @Prop() private msg!: string;

  // State
  count: number = 0;

  // Computed values
  get counterValue() {
    return this.$store.state.count;
  }

  // Methods
  add(): void {
    this.$store.commit("increment");
    this.count = this.counterValue;
  }

  // Watchers
  @Watch("count")
  onPropertyChanged(value: string, oldValue: string) {
    // Do stuff with the watcher here.
    console.log(value, oldValue);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
