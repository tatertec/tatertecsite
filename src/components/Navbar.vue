<template>
  <div class="row bg-warning sticky-top shadow rounded-bottom">
    <div class="col-12 p-0">
      <nav class="navbar navbar-expand-lg navbar-light text-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav text-dark align-items-center">
            <li class="align-self-center text-center m-0 p-0">
              <b class="xxl px-5 mx-5">TaterTec</b>
              <hr class="d-lg-none bg-dark" />
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <router-link to="/">HOME</router-link>
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="About">ABOUT</router-link>
              </a>
            </li>
            <!-- NOTE this is the link for portfolio when we have some stuff to add uncomment it -->
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="Portfolio">PORTFOLIO</router-link>
              </a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="Services">SERVICES</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="ContactUs">CONTACT</router-link>
              </a>
            </li>

            <li v-if="$auth.isAuthenticated" class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="Dashboard">DASHBOARD</router-link>
              </a>
            </li>
            <li class="px-2 nav-item" v-if="!$auth.isAuthenticated">
              <span class="auth-links nav-link action" @click="login"
                >LOGIN</span
              >
            </li>
            <li class="nav-item px-2" v-if="$auth.isAuthenticated">
              <a class="" href="#"> </a>
              <div class="auth-links log-out-link action" @click="logout">
                LOGOUT
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
//on selection nav bar is closed
$(function () {
  var navMain = $(".navbar-collapse");
  navMain.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse("hide");
  });
});
export default {
  methods: {
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    },
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
    },
  },
};
</script>

<style>
.auth-links {
  padding: 0px;
  margin: 0px;
  color: #212939 !important;
  font-size: medium;
}
.auth-links:hover {
  color: rgb(255, 255, 255) !important;
}
.auth-links.log-out-link:hover {
  color: rgb(197, 50, 50) !important;
}
.xxl {
  font-size: xx-large;
}
.fixed {
  position: relative;
}
</style>
