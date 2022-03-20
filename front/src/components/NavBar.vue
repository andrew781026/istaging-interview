<template>
  <nav class="nav">
    <div class="icon">
      <i class="back"></i>
    </div>
    <h1 class="flex-1">{{ header_str }}</h1>
    <div class="icon">
      <i class="icon icon-edit"></i>
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
  height: 80px;
  background-color: #42b983;
  align-items: center;
  padding: 0 30px;
  .icon{
    color: #333;
    cursor: pointer;
    transition: all 0.3s;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    &:hover{
      color: #42b983;
      background-color: #5d5d5d;
    }
  }
}
</style>
