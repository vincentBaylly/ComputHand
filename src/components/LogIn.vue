<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-md-6 full-height-column"
        style="background-image:url('./images/montreal_aerial.png')"
      >
        <div class="filter-blue"></div>
      </div>
      <div class="col-md-6 display-flex-center p-5">
        <app-login-form></app-login-form>
      </div>
    </div>
  </div>
</template>
<script>
import LoginForm from "./authentication/LoginForm.vue";
export default {
  components: {
    appLoginForm: LoginForm
  }
};
</script>
