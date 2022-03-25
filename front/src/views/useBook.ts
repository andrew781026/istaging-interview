import {onBeforeUnmount, onMounted, computed, ref, Ref} from 'vue'
import BookService from '@/api/book'
import dayjs from 'dayjs'
import {useRoute, Router} from 'vue-router'
import {Book, EmptyObject} from '@/types/book'

export const dialogShow = ref(false)
export const dialogType = ref('')
export const isLoading = ref(false)
export const infinite = ref(false)

// 細節頁面的 singleBook
export const singleBook: Ref<Book | EmptyObject> = ref({})

// 彈出視窗的 dialogBook
export const dialogBook = ref({})

// 列表頁面的所有 Book 資訊
export const bookList: Ref<Array<Book>> = ref([])
export const totalItems: Ref<number> = ref(0)
export const page = ref(1)

export const observer: Ref<IntersectionObserver | null> = ref(null)
export const loadMore: Ref<HTMLElement | null> = ref(null)

export const openDialog = (newDialogBook: Book, id: string, type = 'create') => {
  dialogType.value = type
  dialogBook.value = (type === 'edit') ? {...newDialogBook, id} : {}
  dialogShow.value = true
}
export const closeDialog = () => dialogShow.value = false
export const openLoader = () => isLoading.value = true
export const closeLoader = () => isLoading.value = false

export const canLoadMore = computed(() => bookList.value.length < totalItems.value)

export const setSingleBook = (newSingleBook: Book) => {
  const published = dayjs(newSingleBook.publicationDate).format('YYYY/MM/DD HH:mm')
  singleBook.value = {
    published,
    ...newSingleBook
  }
}

export const getSingleBook = async (id: string, singleBook: Book) => {
  openLoader()
  const sameId = singleBook && singleBook['@id'] === id
  if (!sameId) setSingleBook(await BookService.get(id))
  closeLoader()
}

export const updateSingleBook = (id: string, newSingleBook: Book) => {
  openLoader()
  BookService.update(id, newSingleBook)
    .then(book => {
      singleBook.value = book
      closeDialog()
    })
    .catch(console.error)
    .finally(() => closeLoader())
}

export const addSingleBook = (newSingleBook: Book, router: Router) => {
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
        // 書籍數量
        totalItems.value = books['hydra:totalItems']
        if (infinite.value === false) page.value++
      }
    })
    .catch(console.error)
    .finally(() => closeLoader())
}

export const useBook = () => {
  onMounted(() => {
    infinite.value = (useRoute().query.isInfinite === 'true')
    // 使用 BookService 取得 book 的列表資料
    getMoreBooks()

    observer.value = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const needLoadMore = entry.isIntersecting && !isLoading.value
        if (needLoadMore) getMoreBooks()
      })
    })

    // 開始觀察
    if (loadMore.value) observer.value.observe(loadMore.value)
  })

  onBeforeUnmount(() => {
    if (observer.value instanceof IntersectionObserver) {
      // 停止觀察
      if (loadMore.value) observer.value.unobserve(loadMore.value)

      // 關閉觀察器
      observer.value.disconnect()
    }
  })
}
