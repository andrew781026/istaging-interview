<template>
  <img ref="imageRef" src="https://fakeimg.pl/800x600/"
       :data-src="`https://picsum.photos/800/600/?random=${ isbn }`" alt="圖片">
</template>

<script>
import {onBeforeUnmount, onMounted, ref} from 'vue'

const imgObserver = new IntersectionObserver(entries => {
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
    if (entry.isIntersecting === true) {
      console.log('image isIntersecting')
      entry.target.src = entry.target.dataset.src
    }
    if (entry.isIntersecting === false) {
      console.log('image is out of Intersecting')
      entry.target.src = 'https://fakeimg.pl/800x600/'
    }
  })
})

const useImage = (imageRef) => {
  onMounted(() => {
    // 開始觀察
    imgObserver.observe(imageRef.value)
  })

  onBeforeUnmount(() => {
    // 停止觀察
    imgObserver.unobserve(imageRef.value)
  })
  return imgObserver
}

export default {
  name: 'LazyImage',
  props: {
    isbn: String
  },
  setup () {
    const imageRef = ref(null)

    useImage(imageRef)
    return {imageRef}
  }
}
</script>

<style scoped>

</style>
