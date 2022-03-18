<template>
  <div class="about">
    <h1>這是細節頁面</h1>
    <Card></Card>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import Card from '@/components/Card.vue' // @ is an alias to /src

export default defineComponent({
  name: 'DetailView',
  components: {
    Card
  }
})
</script>

<style scoped>

</style>
