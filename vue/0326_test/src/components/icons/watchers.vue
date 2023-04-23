<script>
export default {
  data() {
    return {                                    // 宣告兩個變量 todoId 和 todoData
      todoId: 1,                                // 分別用來儲存待載入的 Todo 項目的 ID 和載入的數據。
      todoData: null
    }
  },
  methods: {
    async fetchData() {                         // fetchData：一異步函數(async)，從網絡獲取Todo項目數據。
      this.todoData = null                      // 將todoData設置為null，表示正在載入
      const res = await fetch(                  // 使用fetch API發送HTTP GET請求，獲取指定ID的Todo項目數據
        `https://jsonplaceholder.typicode.com/todos/${this.todoId}`
      )
      this.todoData = await res.json()          // 將結果轉換為JSON格式，最後將獲取到的數據保存到todoData中。
    }
  },
  mounted() {                                   // mounted鉤子函數：使用fetchData函數從網絡中獲取Todo項目數據。
    this.fetchData()
  },
  watch: {
    todoId() {                                  // 監聽todoId的變化，當todoId的值發生變化時，重新調用fetchData函數，載入新的Todo項目數據。
      this.fetchData()
    }
  }
}
</script>

<template>
  <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>              <!-- !todoData：JavaScript 中的布林值運算。 ! 符號代表「非」 -->
  <pre v-else>{{ todoData }}</pre>                <!-- <pre>可完整呈現程式碼當中的文本格式，包含換行符號、空格等。 -->
</template>