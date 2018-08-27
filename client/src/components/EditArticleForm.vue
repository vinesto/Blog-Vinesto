<template>
    <div class="container">
      <h1 class="title"> Update Article Form</h1>
        <div class="field">
            <div class="control">
            <label class="label">Title:</label>
                <input class="input" type="text" placeholder="Title for your article" name="title" id="title" v-model="article.title">
            </div>
        </div>
        <div class="field">
            <div class="control">
            <label class="label">Content:</label>
                <input class="input" type="text" placeholder="Content for your article" name="body" id="body" v-model="article.body">
            </div>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success" @click="editArticle">
                Submit
                </button>
            </p>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      article:{}
    };
  },
  methods: {
    getOneData(id){
        let idArticle = this.$router.history.current.params.id
        let self = this
        let token = localStorage.getItem("token")
        // console.log(idArticle);
        axios({
            method:"GET",
            url:`${api}/articles/${idArticle}`,
            headers:{
                token
            }
        })
        .then(function(editData){
            // console.log("ini get one",editData.data.dataArticle);
            self.article = editData.data.dataArticle
            // console.log("ini self article", self.article.title);
            
        })
        .catch(function(err){
            console.log(err.message);
        })
    },
    editArticle() {
      let self = this;
      let token = localStorage.getItem("token");
      let idArticle = this.$router.history.current.params.id
      axios({
        method: "PUT",
        url: `${api}/articles/${idArticle}`,
        headers: {
          token
        },
        data: {
          title: this.article.title,
          body: this.article.body
        }
      })
        .then(function(editedArticle) {
        //   console.log(editedArticle);
          alert("Edit article success");
        //   self.$router.go("/MyArticle");
        //   self.$emit("new-article", newArticle.data.Article._id);
        })
        .catch(function(err) {
        //   console.log('ini error',err.message);
          //   swal("Add article failed");
          alert("Edit article failed");
        //   self.$router.push("/editArticle");
        });
    }
  },
  mounted(){
      this.getOneData()
  }
};
</script>

<style>
</style>
