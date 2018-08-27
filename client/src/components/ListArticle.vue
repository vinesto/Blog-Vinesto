<template>
    <div class="container">
        <!-- START ARTICLE FEED -->
        <section class="articles">
            <div class="column is-8 is-offset-2 multiline" v-for="(article,index) in listArticle" :key="index">
            <!-- START ARTICLE -->
                <div class="card article">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content has-text-centered">
                                <p class="title article-title">{{article.title}}</p>
                                <div class="tags has-addons level-item">
                                    <span class="tag is-rounded is-info">{{article.author}}</span>
                                    <span class="tag is-rounded">{{article.date.slice(0,10)}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="content article-body">
                            {{article.body}}
                            <figure>
                            <img src="https://bulma.io/images/placeholders/256x256.png">
                            <figcaption>
                                Figure 1: Some beautiful placeholders
                            </figcaption>
                            </figure>
                        </div>

                        <b-collapse class="card">
                            <div slot="trigger" slot-scope="props" class="card-header">
                                <p class="card-header-title">
                                    Comment
                                </p>
                                <a class="card-header-icon">
                                    <b-icon
                                        :icon="props.open ? 'menu-down' : 'menu-up'">
                                    </b-icon>
                                </a>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    <ul v-for="(comment,index) in article.comments" :key="index">
                                        <li>{{comment.name}}: {{comment.body}}</li>
                                    </ul>        
                                </div>
                            </div>
                            <!-- <p>{{article.comments}}</p> -->
                                <b-field label="Message:" v-if="token">
                                    <b-input maxlength="200" type="textarea" v-model="commentBody"></b-input>
                                </b-field>
                            <footer class="card-footer" v-if="token">
                                <a class="card-footer-item" @click="addArticleComment(article._id)">Save</a>
                                <a class="card-footer-item">Edit</a>
                                <a class="card-footer-item">Delete</a>
                            </footer>
                        </b-collapse>
                    </div>
                </div>
            <!-- END ARTICLE -->
            </div>
        </section>
        <!-- END ARTICLE FEED -->
    </div>
</template>


<script>
import axios from "axios";

export default {
  name: "listArticle",
  data: function() {
    return {
      listArticle: [],
      commentBody:"",
      token: localStorage.getItem("token")
    };
  },
  methods:{
      getAllArticle(){
          let self = this
          axios({
              method:"GET",
              url:`${api}/articles`,
          })
          .then(function(articles){
            //   console.log(articles)
              self.listArticle = articles.data.dataArticles
              console.log(self.listArticle);
          })
      },
      addArticleComment(idArticle){
          let self = this
          let token = localStorage.getItem("token")
          console.log("ini id article",idArticle);
          console.log("ini token",token);
          axios({
              method:"PUT",
              url:`${api}/articles/${idArticle}/comment`,
              headers:{
                  token
              },
              data:{
                  body:this.commentBody
              }
          })
          .then(function(newComment){
            //   console.log(newCommment);
            //   self.$router.go("/MyArticle")
          })
          .catch(function(err){
            //   console.log(err.message);
            //   self.$router.go("/MyArticle")
          })
      }
  },
  mounted() {
      this.getAllArticle()
    // var article = []
    // axios
    //   .get("${api}/articles")
    //   .then(function(articles) {
    //     //   console.log("ini total article", articles.data.dataArticles);
        //   this.listArticle = articles.data.dataArticles
        //   console.log('ini listArticle',this.listArticle);
        // this.listArticles = articles.data.data
        // this.listArticles.forEach(element => {
        //     article.push(element)
        // });
    //   })
    //   .catch(function(err) {
    //     console.log(err.message);
    //   });
  }
};
</script>

<style>
</style>
