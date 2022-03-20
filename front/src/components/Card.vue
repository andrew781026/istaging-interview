<template>
  <div class="card">
    <LazyImage :isbn="book.isbn"/>
    <div class="info">
      <h3 class="title" :title="book.title">{{ book.title }}</h3>
      <h4 class="author" :title="book.author">{{ book.author }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import LazyImage from '@/components/LazyImage.vue'

export default defineComponent({
  name: 'PureCard',
  props: {
    book: Object
  },
  components: {
    LazyImage
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$card-bgcolor: #1bc734;

.card {
  background-color: $card-bgcolor;
  display: flex;
  width: 430px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 10%);
  cursor: pointer;

  &:hover {
    background-color: darken($card-bgcolor, 8%);
  }

  &:active {
    background-color: darken($card-bgcolor, 8%);
    box-shadow: 0 0 2px 8px lighten($card-bgcolor, 30%);
  }

  img {
    width: 200px;
  }

  .info {
    width: 230px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 16px;
    flex-direction: column;

    /* 需要做 truncate */
    .title {
      width: 100%;
      font-size: 24px;
      margin: 4px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .author {
      width: 100%;
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

@media (max-width: 768px) {
  .card {
    width: 230px;
    flex-direction: column;

    img {
      width: 100%;
    }
  }
}
</style>
