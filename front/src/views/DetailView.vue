<template>
  <div>
    <div class="detail-list">
      <img :src="`https://picsum.photos/800/600/?random=${book.isbn}`" alt="圖片">
      <div class="info">
        <h3 class="title">{{ book.title }}</h3>
        <h3 class="author">{{ book.author }}</h3>
        <h3 class="date">Published on {{ book.published }}</h3>
        <h4 class="description">{{ book.description }}</h4>
        <h4 class="isbn">ISBN：{{ book.isbn }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {getSingleBook, singleBook} from './useBook'

export default defineComponent({
  name: 'DetailView',
  setup() {
    const route = useRoute()
    onMounted(async () => {
      await getSingleBook(route.params.id, singleBook.value)
    })
    return {book: singleBook}
  }
})
</script>

<style scoped lang="scss">
@import "../scss/app.scss";

.detail-list {
  display: flex;
  justify-content: center;
  padding: 24px;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;

  img {
    width: 50%;
    margin: 0 0 auto 0;
  }

  .info {
    width: 50%;

    .title {
      margin-top: 0;
    }

    .author, .isbn {
      color: darken($primary-color, 8%);
    }
  }
}

@media (max-width: 576px) {
  .detail-list {
    flex-direction: column;

    img {
      width: 100%;
    }

    .info {
      width: 100%;
    }
  }
}
</style>
