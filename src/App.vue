<template>
<div>
  <Header title="ComputHand"></Header>
  <navigation></navigation>
  <router-view></router-view>
  <Footer></Footer>
</div>
</template>
<script>
import Header from './components/global/Header.vue';
import Navigation from './components/global/Nav.vue';
import Footer from './components/global/Footer.vue';

export default {
  components: {
    Header,
    Navigation,
    Footer
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display');

body,
html {
  font-weight: bold;
  font-family: 'Playfair Display', sans-serif !important;
  min-height: 100%;
  height: 100%;
}

h1,
h2,
h3,
h4 {
  font-weight: bold!important;
}

.jumbotron {
  background-image: url(/images/home.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
}

.small-link:hover {
  color: #000000;

}

.small-link {
  color: rgb(33, 37, 41);
}

.container a:link, .container a:visited, .container a:active {
  color: #000000;
  text-decoration: none;
}

.container a:hover {
  color: #000000;
  text-decoration: none;
}

.full-height-column {
  min-height: 50px;
  height: 100%;
}
</style>
