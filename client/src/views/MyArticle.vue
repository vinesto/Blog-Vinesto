<template>
<div class="container">
    <h1 class="title">
        <router-link to="/MyArticle">My Article</router-link>
        </h1>
    <h2 class="subtitle">
        <router-link to="/MyArticle/AddArticle" @new-article="getData">Add Article</router-link>
        </h2>
        <router-view></router-view>
        <br>
        <MyArticleTable :checkData="newArticle"></MyArticleTable>
    
</div>
</template>

<script>
import axios from "axios"
import MyArticleTable from "@/components/MyArticleTable.vue"

export default {
    components:{
        MyArticleTable
    },
    data:function(){
        return {
            newArticle:""
        }
    },
    methods:{
        getData(data){
            this.newArticle = data
        }
    }
}
</script>
<style>

</style>
