<template>
    <div>
      <h2>{{ message }}</h2>
      <button @click="updateMessage">Update Message</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Hello, World!'
      }
    },
    methods: {
      updateMessage() {
        this.message = 'Hello, Vue!'
      }
    }
  }
  </script>
  