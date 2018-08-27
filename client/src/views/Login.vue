<template>
    <div class="container">
       <h1 class="title">Login</h1>
       <LoginForm/>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
    name:'login',
    components:{
        LoginForm
    }
};
</script>

<style>
</style>
