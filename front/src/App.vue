<template>
  <nav-bar></nav-bar>
  <router-view/>
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

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
}

#app {
  font-family: '思源黑體', '微軟正黑體', '蘋方黑體', sans-serif;
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
