<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
  onInput(e) {
    // a v-on handler receives the native DOM event
    // as the argument.
    this.text = e.target.value
  }
}
}
</script>

<template>
    <!-- <input v-model="text" placeholder="Type here"> -->
  <input :value="text" @input="onInput" placeholder="請輸入文字">
  <p>{{ text }}</p>
</template>