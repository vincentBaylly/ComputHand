<template>
  <div class="login-container">
    <form>
      <h2 class="text-center">Log in</h2>
      <div class="form-group mt-30">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          v-model="formLogin.email"
          id="email"
        />
      </div>
      <div class="form-group mt-30">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="formLogin.password"
          id="password"
        />
        <small>
          <router-link to="/forgottenpassword" class="small-link"
            >Forgot your password?</router-link
          >
        </small>
        <br />
      </div>
      <div class="mt-30">
        <b-button
          type="submit"
          variant="dark"
          style="width:100%"
          @click="postLogin"
        >
          Log in
        </b-button>
      </div>
      <div class="mt-15">
        <small>
          Do not have an account?
          <router-link to="/signin" class="small-link">Sign in</router-link>
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
      formLogin: {
        email: "",
        password: "",
      },
      errors: [],
    };
  },
  methods: {
    postLogin: function(event) {
      var loginURL = `${config.APIPath}/api/public/user/login`;
      axios
        .post(loginURL, {
          email: this.formLogin.email,
          password: this.formLogin.password,
        })
        .then(
          (response) => {
            // let is_admin = response.data.origin.is_admin;
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("jwt", response.data.token);

            if (localStorage.getItem("jwt") != null) {
              this.$emit("loggedIn");

              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl);
              } else {
                // if (is_admin == 1) {
                //   this.$router.push("admin");
                // } else {
                this.$router.push("training/dashboard");
                // }
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
    },
  },
};
</script>
<style scoped>
.login-container {
  width: 100%;
}
</style>
