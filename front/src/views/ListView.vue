<template>
  <div class="about">
    <div class="book-list">
      <Card v-for="book in books" :key="book.isbn" :book="book"></Card>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import Card from '@/components/Card.vue'
import BookService from '@/api/book'

export default defineComponent({
  name: 'ListView',
  components: {
    Card
  },
  mounted () {
    // 使用 BookService 取得 book 的列表資料
    BookService.list()
      .then(books => {
        // 根據高度 & 寬度 , 控制要顯示的 book 數量
        this.books = books
      })
      .catch(console.error)
  },
  data () {
    return {
      books: []
    }
  }
})
</script>

<style scoped>
.book-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 30px;
  justify-content: center;
}
</style>
