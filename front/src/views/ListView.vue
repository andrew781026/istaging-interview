<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Card></Card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Card from '@/components/Card.vue' // @ is an alias to /src
import BookService from '@/api/book'

export default defineComponent({
  name: 'ListView',
  components: {
    Card
  },
  mounted () {
    // 使用 BookService 取得 book 的列表資料
    BookService.list().then(console.log).catch(console.error)
  }
})
</script>

<style scoped>

</style>
