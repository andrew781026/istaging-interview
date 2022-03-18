<template>
  <nav-bar></nav-bar>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'BookList',
  components: {
    'nav-bar': NavBar
  }
}
</script>

<style lang="scss">

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
