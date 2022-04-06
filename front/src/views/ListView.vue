<template>
  <div class="list">
    <div class="book-list">
      <Card v-for="book in bookList" :key="book.isbn" :book="book" @click="viewDetail(book)"></Card>
    </div>
    <div class="load-more" ref="loadMore" v-show="canLoadMore">
      <PrimaryButton type="primary" @click="getMoreBooks">LOAD MORE</PrimaryButton>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import Card from '@/components/Card.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import {page, bookList, canLoadMore, setSingleBook, observer, loadMore, useBook, getMoreBooks} from './useBook'
import {useRouterCustom} from './useMyRoute'

export default defineComponent({
  name: 'ListView',
  setup() {
    useBook()
    const {toDetailPage} = useRouterCustom()

    const viewDetail = book => {
      setSingleBook(book)
      // go to detail page
      const id = book['@id'].replace('/books/', '')
      toDetailPage(id)
    }

    return {observer, canLoadMore, loadMore, bookList, page, getMoreBooks, viewDetail}
  },
  components: {
    Card,
    PrimaryButton
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

.load-more {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
