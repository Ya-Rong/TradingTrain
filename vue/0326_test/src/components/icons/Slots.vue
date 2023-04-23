<script>
import ChildComp_slots from './ChildComp_slots.vue'

export default {
  components: {
    ChildComp_slots
  },
  data() {
    return {
      msg: 'from parent'
    }
  }
}
</script>

<template>
  <ChildComp_slots>Message: {{ msg }}</ChildComp_slots>
</template>