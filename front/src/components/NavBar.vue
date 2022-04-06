<template>
  <nav class="nav">
    <template v-if="isDetailPage">
      <div class="icon-wrap" @click="toListPage">
        <i class="icon icon-back"></i>
        <span class="text">Back</span>
      </div>
      <h1 class="nav-title">{{ singleBook.title }}</h1>
      <div class="icon-wrap" @click="openDialog(singleBook,detailId,'edit')">
        <i class="icon icon-edit"></i>
        <span class="text">Edit</span>
      </div>
    </template>
    <template v-else-if="isListPage">
      <h1 class="nav-title">The Book Shelf</h1>
      <div class="icon-wrap" @click="openDialog">
        <i class="icon icon-add"></i>
        <span class="text">Create</span>
      </div>
    </template>
  </nav>
</template>

<script>
import {defineComponent} from 'vue'
import {singleBook, openDialog} from '@/views/useBook'
import {useRouterCustom, getDetailId, isDetailPage, isListPage} from '@/views/useMyRoute'

export default defineComponent({
  name: 'NavBar',
  props: {
    header_str: {
      type: String,
      default: 'The Book Shelf'
    }
  },
  setup() {
    const {toListPage} = useRouterCustom()
    const {detailId} = getDetailId()
    return {singleBook, openDialog, toListPage, detailId, isDetailPage, isListPage}
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/app.scss";

.nav {
  position: sticky;
  top: 0;
  display: flex;
  height: var(--nav-height);
  background-color: $primary-color;
  align-items: center;
  padding: 0;

  .nav-title {
    flex-grow: 1;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .icon-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 24px;
    color: #333;
    cursor: pointer;
    transition: all 0.3s;
    padding: 30px;
    background-color: darken($primary-color, 6%);
    /*
    顏色參考 : https://www.colorhexa.com/42b983
    border-color: #5d5d5d;
    border-style: solid;
    &:first-child{
      border-width: 0 1px 0 0;
    }
    &:last-child{
      border-width: 0 0 0 1px;
    }
    */
    &:hover {
      color: white;
      background-color: #7c7f7e;
    }

    .text {
      margin-left: 8px;
      transform: translateY(-2px);
    }
  }
}
</style>
