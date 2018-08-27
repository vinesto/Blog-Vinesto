<template>
    <div class="container">
        <div class="field">
            <div class="control">
            <label class="label">Name:</label>
                <input class="input" type="text" placeholder="e.g Alex Smith" v-model="name">
            </div>
        </div>
        <div class="field">
            <div class="control">
            <label class="label">Email:</label>
                <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model="email">
            </div>
        </div>
        <div class="field">
            <div class="control">
            <label class="label">Password:</label>
                <input class="input" type="password" placeholder="Password" v-model="password">
            </div>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success" @click="register">
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
  name: "registerForm",
  data: function() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      let self = this;
      axios
        .post(`${api}/users/register`, {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(function(newUser) {
        //   console.log(newUser);
          swal("Register Success");
          self.$router.push("/");
          // window.location.replace('/')
        })
        .catch(function(err) {
        //   console.log(err);
          swal("Register Failed");
          self.$router.push("/register");
          // window.location.reload('/register')
        });
    }
  }
};
</script>

<style>
</style>
