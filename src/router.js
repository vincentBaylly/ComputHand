import Vue from "vue";
import Router from "vue-router";
import LogIn from "./components/LogIn.vue";
import SignIn from "./components/SignIn.vue";
import ResetPassword from "./components/ResetPassword.vue";
import ForgottenPassword from "./components/ForgottenPassword.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/signin",
      name: "signin",
      component: SignIn
    },
    {
      path: "/resetpassword/:link",
      name: "resetpassword",
      component: ResetPassword
    },
    {
      path: "/login",
      name: "login",
      component: LogIn
    },
    {
      path: "/forgottenpassword",
      name: "forgottenpassword",
      component: ForgottenPassword
    }
  ]
});
