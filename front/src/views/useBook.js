import {onBeforeUnmount, onMounted, ref} from 'vue'
import BookService from '@/api/book'
import * as dayjs from 'dayjs'
import {useRoute} from 'vue-router'

export const dialogShow = ref(false)
export const dialogType = ref('')
export const isLoading = ref(false)
export const infinite = ref(false)

// 細節頁面的 singleBook
export const singleBook = ref({})

// 彈出視窗的 dialogBook
export const dialogBook = ref({})

// 列表頁面的所有 Book 資訊
export const bookList = ref([])
export const page = ref(1)

export const observer = ref(null)
export const loadMore = ref(null)

export const openDialog = (newDialogBook, id, type = 'create') => {
  dialogType.value = type
  dialogBook.value = (type === 'edit') ? {...newDialogBook, id} : {}
  dialogShow.value = true
}
export const closeDialog = () => dialogShow.value = false
export const openLoader = () => isLoading.value = true
export const closeLoader = () => isLoading.value = false

export const setSingleBook = newSingleBook => {
  const published = dayjs(newSingleBook.publicationDate).format('YYYY/MM/DD HH:mm')
  singleBook.value = {
    published,
    ...newSingleBook
  }
}

export const getSingleBook = async (id, singleBook) => {
  openLoader()
  const sameId = singleBook.value && singleBook.value.id === id
  if (!sameId) setSingleBook(await BookService.get(id))
  closeLoader()
}

export const updateSingleBook = (id, newSingleBook) => {
  openLoader()
  BookService.update(id, newSingleBook)
    .then(book => {
      singleBook.value = book
      closeDialog()
    })
    .catch(console.error)
    .finally(() => closeLoader())
}

export const addSingleBook = (newSingleBook, router) => {
  openLoader()
  BookService.add(newSingleBook)
    .then(book => {
      singleBook.value = book
      router.push({name: 'detail', params: {id: book['@id'].replace('/books/', '')}})
      closeDialog()
    })
    .catch(console.error)
    .finally(() => closeLoader())
}

export const getMoreBooks = () => {
  openLoader()
  BookService.list(page.value)
    .then(books => {
      if (books['hydra:member'].length > 0) {
        // 根據高度 & 寬度 , 控制要顯示的 book 數量
        // bookList.value.push(...books['hydra:member'])
        bookList.value = [...(bookList.value || []), ...books['hydra:member']]
        if (!infinite.value) page.value++
      }
    })
    .catch(console.error)
    .finally(() => closeLoader())
}

export const useBook = () => {
  onMounted(() => {
    infinite.value = useRoute().query.isInfinite
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
          getMoreBooks(infinite.value)
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
