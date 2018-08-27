<template>
<div>

<table class="table container">
  <thead>
    <tr>
      <th><abbr title="Number">No</abbr></th>
      <th><abbr title="Title">Title</abbr></th>
      <th><abbr title="Author">Author</abbr></th>
      <th><abbr title="Content">Content</abbr></th>
      <th style="text-align: center;"> <abbr title="Content">Action</abbr></th>
    </tr>
  </thead>
  
  <tbody v-for="(article,index) in articles" :key="index">
    <tr>
      <th>{{index+1}}</th>
      <td>{{article.title}}</td>
      <td>{{article.author}}</td>
      <td>{{article.body}}</td>
      <td>
        <div class="columns">
        <!-- <div class="column"> -->
            <router-link class="column" :to="`/MyArticle/UpdateArticle/${article._id}`">
            <span class="icon">
                <i class="fas fa-edit"></i>
            </span>
            </router-link>
        <!-- </div> -->
        <div class="column" id="article" @click="deleteArticle(article._id)">
            <a>
            <span class="icon">
                <i class="fas fa-trash"></i>
            </span>
            </a>
        </div>
        <!-- <div class="column"> -->
            <router-link class="column" to="`/MyArticle/UpdateArticle/${article._id}`">
            <span class="icon">
                <i class="fas fa-check"></i>
            </span>
            </router-link>
            <!-- <router-view></router-view> -->
        <!-- </div> -->
        </div>
      </td>
    </tr>
  </tbody>

</table>
</div>
</template>

<script>
import axios from "axios";
import EditArticleForm from "@/components/EditArticleForm.vue"

export default {
  data: function() {
    return {
      articles: []
    };
  },
  props:[
      'checkData'
  ],
  methods: {
    getArticle() {
      let self = this;
      let token = localStorage.getItem("token");
      axios({
        method: "GET",
        url: `${api}/articles/user`,
        headers: {
          token
        }
      })
        .then(function(response) {
        //   console.log(response.data.dataArticles);
          self.articles = response.data.dataArticles;
        })
        .catch(function(err) {
        //   console.log(err);
        });
    },
    deleteArticle(id){
        let self = this;
        let token = localStorage.getItem("token");
        // console.log('ini this delete',this._watcher);
        axios({
            method:"delete",
            url:`${api}/articles/${id}`,
            headers:{
                token
            }
        })
        .then(function(deletedArticle){
            // console.log("deletedArticle",deletedArticle);
            // alert("Delete article success")
            self.$router.go("/MyArticle")
        })
        .catch(function(err){
            // console.log(err.message);
            alert("Delete article failed")
        })
    },
  },
  watch: {
    getArticle: function() {
      return this.checkData;
    },
    dataArticle:function(){
        this.getArticle()
    },
  },
  mounted() {
    //   console.log('ini created ',this.getArticle());
    this.getArticle();
    // this.deleteArticle()
  }
};
</script>

<style>
</style>
