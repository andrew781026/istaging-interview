<template>
  <nav class="nav">
    <div class="icon">
      <i class="back"></i>
    </div>
    <h1 class="flex-1">{{ header_str }}</h1>
    <div class="icon">
      <i class="edit"></i>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'NavBar',
  props: {
    header_str: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  display: flex;
  min-height: 80px;
  background-color: #42b983;
}
</style>
