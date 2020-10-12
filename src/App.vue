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
textarea ,input{
  border: none;
  
  background: rgba(0, 0, 0, 0);
}
textarea:focus, input:focus{
  outline:none;
  background: rgba(0, 0, 0, 0);

}
.input-box{
  border-bottom: inset 2px black;
  min-width: 400px;
  max-width: 650px;
  width: 85%;
}
.form-container {
  width: 500px;

  padding: 2rem;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.grow {
  flex-grow: 1;
}

h1,
h2 {
  font-family: "Bebas Neue", cursive;
}
body {
  font-family: "Nanum Gothic", sans-serif;
}
a {
  text-decoration: none;
}
</style>
