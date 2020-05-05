<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-md-6 full-height-column"
          style="background-image:url('./images/halifax_aerial.png')"
        >
          <div class="filter-blue"></div>
        </div>
        <div class="col-md-6 display-flex-center p-5">
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
