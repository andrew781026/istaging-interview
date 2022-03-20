import {onBeforeUnmount, onMounted, ref} from 'vue'
import BookService from '@/api/book'
import * as dayjs from 'dayjs'

export const dialogShow = ref(false)

// 細節頁面的 singleBook
export const singleBook = ref({})

// 列表頁面的所有 Book 資訊
export const bookList = ref([])
export const page = ref(1)
export const isLoading = ref(false)

export const observer = ref(null)
export const loadMore = ref(null)

function showModal () {
  const modalWrap = document.querySelector('.pop-up-container')

  const popup = modalWrap.querySelector('.pop-up-box')

  modalWrap.style.display = 'flex'
  popup.style.transform = 'scale(0)'

  setTimeout(() => popup.style.transform = 'scale(1)', 0)
}

function closeModal () {
  const modalWrap = document.querySelector('.pop-up-container')

  const popup = modalWrap.querySelector('.pop-up-box')

  popup.style.transform = 'scale(0)'

  setTimeout(() => modalWrap.style.display = 'none', 300)
}

export const openDialog = () => dialogShow.value = true
export const closeDialog = () => dialogShow.value = false

export const setSingleBook = newSingleBook => {
  const published = dayjs(newSingleBook.publicationDate).format('YYYY/MM/DD HH:mm')
  singleBook.value = {
    published,
    ...newSingleBook
  }
}

export const getMoreBooks = () => {
  isLoading.value = true
  BookService.list(page.value)
    .then(books => {
      // 根據高度 & 寬度 , 控制要顯示的 book 數量
      bookList.value = [...(bookList.value || []), ...books['hydra:member']]
      page.value++
      isLoading.value = false
    })
    .catch(console.error)
}

export const useBook = () => {
  onMounted(() => {
    console.log('onMounted')
    // 使用 BookService 取得 book 的列表資料
    getMoreBooks()

    observer.value = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
        if (entry.isIntersecting === true && isLoading.value === false) {
          console.log('isIntersecting')
          // getMoreBooks()
        }
      })
    })

    // 開始觀察
    observer.value.observe(loadMore.value)
  })

  onBeforeUnmount(() => {
    if (observer.value instanceof IntersectionObserver) {
      // 停止觀察
      observer.value.unobserve(loadMore.value)

      // 關閉觀察器
      observer.value.disconnect()
    }
  })
}
