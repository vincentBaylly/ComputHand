<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 full-height-column"></div>
      <div class="col-md-4 display-flex-center p-5">
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
