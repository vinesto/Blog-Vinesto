<template>
  <div>
    <ListArticle></ListArticle>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App 222"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import ListArticle from '@/components/ListArticle.vue'
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'home',
  components: {
    HelloWorld,
    ListArticle
  }
}
</script>
