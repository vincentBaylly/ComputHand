<template>
  <div class="container content" id="content"></div>
</template>
<script>
import json from "../content/J2EEContent.json";

export default {
  mounted() {
    this.setContent();
  },
  methods: {
    setContent: function() {
      var div = document.getElementById("content");

      div.innerHTML += json.body.view.value;
    },
  },
};
</script>
