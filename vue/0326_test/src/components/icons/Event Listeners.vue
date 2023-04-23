<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      // update component state
      this.count++
    }
  }
}
</script>

<template>
  <!-- make this button work -->
  <!-- <button>count is: {{ count }}</button> -->
  <!-- 沒進行event listeners 只會呈現固定值 -->
  <button v-on:click="increment">{{ count }}</button>
</template>