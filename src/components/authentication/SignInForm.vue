<template>
  <div class="signin-container full-width-form">
    <ul v-if="errors && errors.length">
      <li v-for="(error, index) of errors" :key="index">{{ error.message }}</li>
    </ul>
    <form>
      <h2 class="text-center">Sign In</h2>
      <div class="form-group mt-30">
        <label for="name">Name</label>
        <input
          type="name"
          class="form-control"
          v-model="formRegister.name"
          id="name"
        />
      </div>
      <div class="form-group mt-30">
        <label for="name">Username</label>
        <input
          type="name"
          class="form-control"
          v-model="formRegister.username"
          id="username"
        />
      </div>
      <div class="form-group mt-30">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          v-model="formRegister.emailAddress"
          id="email"
        />
      </div>
      <div class="form-group mt-30">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="formRegister.password"
          id="password"
        />
      </div>
      <div class="form-group mt-30">
        <label for="confirmpassword">Confirm password</label>
        <input
          type="password"
          class="form-control"
          v-model="formRegister.confirmPassword"
          id="confirmpassword"
        />
      </div>
      <div class="mt-30">
        <b-button
          type="submit"
          variant="dark"
          style="width:100%"
          v-on:click="postRegistration"
        >
          Sign in
        </b-button>
      </div>
      <div class="mt-15">
        <small>
          Already have an account?
          <router-link to="/login" class="small-link">Log in</router-link>
        </small>
      </div>
      <div class="text-center mt-30">
        <small>
          <router-link to class="small-link">Condition</router-link>
        </small>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import config from "../../../config";
export default {
  data() {
    return {
      formRegister: {
        name: "",
        username: "",
        emailAddress: "",
        password: "",
        confirmPassword: "",
      },
      errors: [],
    };
  },
  methods: {
    postRegistration: function(event) {
      var registerURL = `${config.APIPath}/api/public/member/register`;
      if (this.formRegister.password === this.formRegister.confirmPassword) {
        axios
          .post(registerURL, {
            name: this.formRegister.name,
            username: this.formRegister.username,
            password: this.formRegister.password,
            emailAddress: this.formRegister.emailAddress,
          })
          .then(
            (response) => {
              localStorage.setItem(
                "user",
                JSON.stringify(response.origin.user)
              );
              localStorage.setItem("jwt", response.origin.token);

              if (localStorage.getItem("jwt") != null) {
                this.$emit("loggedIn");
                if (this.$route.params.nextUrl != null) {
                  this.$router.push(this.$route.params.nextUrl);
                } else {
                  this.$router.push("/");
                }
              }
            },
            (error) => {
              this.errors.push(error);
            }
          )
          .catch((e) => {
            this.errors.push(e);
          });
      } else {
        //TODO manage multilanguage
        var error = {
          message: "The password and the password confirmation doesn't match!",
        };
        this.errors.push(error);
      }
    },
  },
};
</script>
