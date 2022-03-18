<template>
  <div class="card">
    <img :src="`https://picsum.photos/800/600/?random=${book.isbn}`" alt="圖片">
    <div class="info">
      <h3 class="title" :title="book.title">{{ book.title }}</h3>
      <h4 class="description" :title="book.description">{{ book.description }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'PureCard',
  props: {
    book: Object
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  background-color: #1bc734;
  display: flex;
  // width: 400px;
  flex-grow: 1;
  min-width: 300px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 10%);

  img {
    width: 200px;
  }

  .info {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 16px;
    flex-direction: column;

    /* 需要做 truncate */
    .title {
      width: 200px;
      font-size: 24px;
      margin: 4px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .description {
      width: 200px;
      font-size: 16px;
      margin: 4px 0;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
    }
  }
}
</style>
