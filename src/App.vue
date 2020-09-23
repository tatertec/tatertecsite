<template>
  <div id="app" class="container-fluid">
    <Navbar />
    <router-view class="grow" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  async beforeCreate() {
    try {
      await onAuth();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
    } catch (err) {
      this.$router.push({ name: "home" });
    }
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./assets/_variables.scss";
@import "bootstrap";
@import "./assets/_overrides.scss";
</style>
<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.grow {
  flex-grow: 1;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Bebas Neue", cursive;
}
body {
  font-family: "Nanum Gothic", sans-serif;
}

a {
  color: rgb(0, 0, 0);
}
</style>
