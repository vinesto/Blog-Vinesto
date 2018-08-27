<template>
<div class="container">
     <div class="field">
        <p class="control">
            Email
            <input class="input" type="email" placeholder="Email" v-model="email">
        </p>
    </div>
    <div class="field">
        <p class="control">
        Password
            <input class="input" type="password" placeholder="Password" v-model="password">
        </p>
    </div>
    <div class="field">
        <p class="control">
            <button class="button is-success" @click="login">
                Login
            </button>
        </p>
    </div>
</div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "loginForm",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      let self = this;
      axios
        .post(`${api}/users/login`, {
          email: this.email,
          password: this.password
        })
        .then(function(user) {
          // console.log(user);
          swal("Login Success");
          localStorage.setItem("token", user.data.token);
          // self.$router.push("/");
        })
        .catch(function(err) {
          // alert(err)
          // self.$router.push("/login");
          swal("Login Failed");
        });
    }
  }
};
</script>

<style>
</style>
