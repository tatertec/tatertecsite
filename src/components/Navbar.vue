<template>
  <div class="row bg-dark sticky-top shadow rounded-bottom">
    <div class="col-12 p-0">
      <nav class="navbar navbar-expand-lg navbar-dark text-primary">
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
              <b class="xxl px-5 mx-5 text-primary">TaterTec</b>
              <hr class="d-lg-none bg-primary" />
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <router-link to="/"><b class="nav">HOME</b></router-link>
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="About"><b class="nav">ABOUT</b></router-link>
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
                <router-link to="Services"
                  ><b class="nav">SERVICES</b></router-link
                >
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="ContactUs"
                  ><b class="nav">CONTACTS</b></router-link
                >
              </a>
            </li>

            <li v-if="$auth.isAuthenticated" class="nav-item">
              <a class="nav-link p-0" href="#">
                <router-link to="Dashboard"
                  ><b class="nav">DASHBOARD</b></router-link
                >
              </a>
            </li>
            <li class="px-2 nav-item" v-if="!$auth.isAuthenticated">
              <span class="auth-links nav-link action" @click="login"
                ><b class="nav authin">Login</b></span
              >
            </li>
            <li class="nav-item px-2" v-if="$auth.isAuthenticated">
              <a class="auth-links" href="#"> </a>
              <div class="log-out-link action" @click="logout">
                <b class="nav authout">Logout</b>
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
.xxl {
  font-size: xx-large;
}
.fixed {
  position: relative;
}
b.nav {
  margin: 0px 5px 0px 5px;
  transition: 0.2s;
  color: rgb(255, 255, 255);
  font-weight: bold;
  border-bottom: 1px solid rgb(241, 206, 47);
}
b.nav:hover {
  transition: 0.2s;
  color: rgb(241, 206, 47);

  border-bottom: 7px solid rgb(241, 206, 47);
}
a :hover {
  text-decoration: none !important;
}
.nav.authin {
  transition: 0.2s;
  color: rgb(32, 214, 32);
  border-bottom: 1px solid rgb(241, 206, 47);
}
.nav.authin:hover {
  transition: 0.2s;
  color: rgb(72, 255, 72);
  border-bottom: 7px solid rgb(60, 226, 60);
}
.nav.authout {
  transition: 0.2s;
  color: rgb(195, 29, 29);
  border-bottom: 1px solid rgb(241, 206, 47);
}
.nav.authout:hover {
  transition: 0.2s;
  color: rgb(255, 51, 51);
  border-bottom: 7px solid rgb(245, 29, 29);
}
</style>
