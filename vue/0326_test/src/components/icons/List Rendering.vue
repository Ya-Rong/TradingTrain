<script>
// give each todo a unique id
let id = 0
// 宣告一個變數id，它的值被設為0。用於追蹤每個新創建的代辦事項的唯一id
export default {
  data() {                                                  // data 函數來定義一個數據對象，
    return {                                                // 其中包含代辦事項應用所需的所有數據。數據對象包含兩個屬性：
      newTodo: '',                                          // newTodo：新的代辦事項。
      todos: [                                              // todos：代辦事項列表，其中包含了三個預設的代辦事項對象。
        { id: id++, text: 'Learn HTML' },
        { id: id++, text: 'Learn JavaScript' },
        { id: id++, text: 'Learn Vue' }
      ]
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo })
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)     // filter()：過濾數組中的元素並返回一個新的數組
        // 從todos數組中過濾掉與傳入參數todo相等的元素，並返回一個新的數組，保留與傳入參數不相等的元素。
    }
  }
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>    
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>