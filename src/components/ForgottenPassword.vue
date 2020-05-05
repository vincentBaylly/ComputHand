<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-md-6 full-height-column"
          style="background-image:url('./images/lake_louise_aerial.png')"
        >
          <div class="filter-blue"></div>
        </div>
        <div class="col-md-6 display-flex-center p-5">
          <app-forgotten-password-form></app-forgotten-password-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ForgottenPasswordForm from "./authentication/ForgottenPasswordForm.vue";
export default {
  components: {
    appForgottenPasswordForm: ForgottenPasswordForm
  }
};
</script>
