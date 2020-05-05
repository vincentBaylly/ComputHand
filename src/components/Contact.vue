<template>
  <div class="row">
    <div class="col-12 my-5 text-center">
      <!-- <h3 *ngIf="showSuccessMessage">Thanks for your message!</h3> -->
      <!-- form goes here -->
      <form class="contact-form">
        <!-- name -->
        <div class="field">
            <input type="text" name="name" class="contact-input" placeholder="Your Name" required minlength="3">
        </div>
        <br/>
        <!-- email -->
        <div class="field">
          <input type="email" name="email" class="contact-input" placeholder="Your Email" required email>
        </div>
        <br/>
        <!-- message -->
        <div class="field">
          <textarea class="contact-textarea" name="message" placeholder="What's on your mind?" required></textarea>
        </div>
        <br/>
        <b-button type="submit" variant="dark">Submit</b-button>
      </form>
      <br/>
    </div>
  </div>
</template>
