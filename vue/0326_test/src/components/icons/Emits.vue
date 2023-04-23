<script>
import ChildComp_emits from '../../ChildComp_emits.vue'

export default {
  components: {
    ChildComp_emits
  },
  data() {
    return {
      childMsg: 'No child msg yet'
    }
  }
}
</script>

<template>
  <ChildComp_emits @response="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
</template>