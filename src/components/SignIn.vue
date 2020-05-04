<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-md-6 full-height-column"
          style="background-image:url('./images/la_malbaie_aerial.png')"
        >
          <div class="filter-blue"></div>
        </div>
        <div class="col-md-6 display-flex-center p-5">
          <app-sign-in-form></app-sign-in-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SignInForm from "./authentication/SignInForm.vue";
export default {
  components: {
    appSignInForm: SignInForm
  }
};
</script>
