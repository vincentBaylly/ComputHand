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
import SQLite from "./components/training/info/SQLite.vue";
import J2EEContent from "./components/training/j2ee/Content.vue";
import JavaContent from "./components/training/java/Content.vue";
import VueContent from "./components/training/vuejs/Content.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{
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
    },
    {
      path: "/training/info/installSQLite",
      name: "SQLite",
      component: SQLite
    },
    {
      path: "/training/j2eecontent",
      name: "j2eecontent",
      component: J2EEContent
    },
    {
      path: "/training/javacontent",
      name: "javacontent",
      component: JavaContent
    },
    {
      path: "/training/vuecontent",
      name: "vuecontent",
      component: VueContent
    }
  ]
});