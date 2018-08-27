<template>
    <div class="container">
      <h1 class="title"> Add Article Form</h1>
        <div class="field">
            <div class="control">
            <label class="label">Title:</label>
                <input class="input" type="text" placeholder="Title for your article" v-model="title">
            </div>
        </div>
        <div class="field">
            <div class="control">
            <label class="label">Content:</label>
                <input class="input" type="text" placeholder="Content for your article" v-model="body">
            </div>
        </div>
        <div class="field">
            <div class="control">
            <label class="label">Image:</label>
                <input type="file" @change="getImage($event)">
            </div>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success" @click="addArticle">
                Submit
                </button>
            </p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  data: function() {
    return {
      title: "",
      body: "",
      image:"",
      newArticle:""
    };
  },
  methods: {
    addArticle() {
      let self = this;
      let token = localStorage.getItem("token");
      let formData = new FormData();
      formData.append('image',this.image)
      // axios({
      //   method:"POST",
      //   url:"http://localhost:3000/images",
      //   headers:{
      //     token
      //   }
      // })
      // .then(function(response){
      //   console.log('ini response image',response);
        
      // })
      // .catch(function(err){
      //   console.log(err.message);
        
      // })

      axios({
        method: "POST",
        url: `http://localhost:3000/articles`,
        headers: {
          token
        },
        data: {
          title: this.title,
          body: this.body
        }
      })
        .then(function(newArticle) {
          // console.log(newArticle);
          // swal("Add article success");
          self.$router.go("/MyArticle");
          self.$emit('new-article',newArticle.data.Article._id)
        })
        .catch(function(err) {
          console.log(err);
          // swal("Add article failed");
          self.$router.go("/addArticle");
        });
    },
    getImage(photo){
      this.image = photo.target.files[0]
    },
    uploadImage(){
      let self = this
      let formData = new FormData()
      let token = localStorage.getItem("token")
      formData.append('image',this.image)
      axios({
        method:"POST",
        url:`http://localhost:3000/images`,
        headers:{
          token
        }
      })
      .then(function(response){
        console.log('ini response image',response);
        
      })
      .catch(function(err){
        console.log(err.message);
        
      })
    }
  }
};
</script>

<style>
</style>
