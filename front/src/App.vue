<template>
  <nav-bar></nav-bar>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </main>
  <Dialog></Dialog>
  <LoadingMask></LoadingMask>
</template>

<script>
import NavBar from '@/components/NavBar'
import Dialog from '@/components/Dialog'
import LoadingMask from '@/components/LoadingMask'

export default {
  name: 'BookList',
  components: {
    'nav-bar': NavBar,
    Dialog,
    LoadingMask
  }
}
</script>

<style lang="scss">
main {
  overflow: auto;
  height: calc(100vh - var(--nav-height));
}

/* the transition related classes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* common css */
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  font-family: '思源黑體', '微軟正黑體', '蘋方黑體', sans-serif;
  margin: 0;
  min-height: 100vh;
}

#app {
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
