<template>
  <div class="container content">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <h1>Bienvenue dans votre Tableau de bord</h1>
        <!-- @click="getListGroup()" -->
        <b-list-group>
          <b-list-group-item href="/training/info/installSQLite"
            >install SQLLite</b-list-group-item
          >
          <b-list-group-item href="/training/j2eecontent"
            >J2EE</b-list-group-item
          >
          <b-list-group-item href="/training/javacontent"
            >Java</b-list-group-item
          >
          <b-list-group-item href="/training/vuecontent">Vue</b-list-group-item>
        </b-list-group>

        <ul id="example-1">
          <li v-for="item in groups" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "../../../config";

export default {
  data() {
    return {
      groups: [],
    };
  },
  methods: {
    getListGroup() {
      axios
        .get(`${config.APIPath}/api/private/group/list`)
        .then((res) => (this.groups = res.data))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
