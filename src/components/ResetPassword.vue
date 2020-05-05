<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4 display-flex-center p-5">
          <app-reset-password-form></app-reset-password-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ResetPasswordForm from "./authentication/ResetPasswordForm.vue";
export default {
  components: {
    appResetPasswordForm: ResetPasswordForm
  }
};
</script>
