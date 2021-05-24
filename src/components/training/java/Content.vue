<template>
  <div class="container content" id="content"></div>
</template>
<script>
import json from "../content/JavaContent.json";

export default {
  mounted() {
    this.setContent();
  },
  methods: {
    setContent: function() {
      var div = document.getElementById("content");

      div.innerHTML = json.results[0].body.view.value;
    },
  },
};
</script>
