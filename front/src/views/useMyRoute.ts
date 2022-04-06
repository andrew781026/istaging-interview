import {computed} from 'vue'
import {NavigationFailure, useRoute, useRouter} from 'vue-router'

interface result {
  toListPage: () => Promise<NavigationFailure | void | undefined>
  toDetailPage: (id: string) => Promise<NavigationFailure | void | undefined>
}

export const useRouterCustom = (): result => {
  const router = useRouter()
  const toListPage = () => router.push({name: 'list'})
  const toDetailPage = (id: string) => router.push({name: 'detail', params: {id}})
  return {toListPage, toDetailPage}
}

export const isListPage = computed(() => useRoute().name === 'list')
export const isDetailPage = computed(() => useRoute().name === 'detail')
export const getDetailId = () => {
  const route = useRoute() // useRoute 在 setup 中會有問題 , 因此需要多包一層

  return {
    detailId: computed(() => route.params.id)
  }
}
