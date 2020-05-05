import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import License from "./components/License.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import LogIn from "./components/LogIn.vue";
import SignIn from "./components/SignIn.vue";
import ResetPassword from "./components/ResetPassword.vue";
import ForgottenPassword from "./components/ForgottenPassword.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/license",
      name: "license",
      component: License
    },
    {
      path: "/skills",
      name: "skills",
      component: Skills
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
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
