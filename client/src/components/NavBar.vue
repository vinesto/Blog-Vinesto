<template>
    <!-- <div> -->
        <nav class="navbar">
    <div class="container">
        <div class="navbar-brand">
            <a class="navbar-item" href="../">
            <i class="fas fa-newspaper" style="font-size:37px; margin-right:10px; color:#363636"></i>
            <h1 class="title">KORANKU</h1>   
            </a>
            <span class="navbar-burger burger" data-target="navbarMenu">
                    <span></span>
            <span></span>
            <span></span>
            </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
                <a class="navbar-item is-active">
                        <router-link class="navbar-item" to="/">Home</router-link>
                    </a>
                <a class="navbar-item">
                        <router-link class="navbar-item" to="/about">About</router-link>
                    </a>
                <a class="navbar-item" v-if="!token">
                        <router-link class="navbar-item" to="/login">Login</router-link>
                    </a>
                <a class="navbar-item" v-if="token">
                        <a class="navbar-item" @click="logout">Logout</a>
                    </a>
                <a class="navbar-item" v-if="token">
                        <router-link class="navbar-item" to="/MyArticle">My Article</router-link>
                    </a>
                <a class="navbar-item" v-if="!token">
                        <router-link class="navbar-item" to="/register">Register</router-link>
                    </a>
            </div>
        </div>
    </div>
</nav>
<!-- END NAV -->

    <!-- </div> -->
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'navbar',
  data: function () {
    return {
      token: localStorage.getItem('token')
    }
  },
  methods: {
    logout () {
      swal('logout success')
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style>
#mynav {
  padding-bottom: 5%;
}
</style>
