<template>
  <div class="row bg-warning sticky-top">
    <div class="col-12">
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
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
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
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="Portfolio">PORTFOLIO</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabindex="-1">
                <router-link to="Services">SERVICES</router-link>
              </a>
            </li>
            <li class="nav-item"></li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabindex="-1">
                <router-link to="ContactUs">CONTACT</router-link>
              </a>
            </li>
            <li v-if="$auth.isAuthenticated" class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="Dashboard">DASHBOARD</router-link>
              </a>
            </li>
            <li v-else class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="Dashboard">LOGIN</router-link>
              </a>
            </li>
          </ul>
          <div>
            <h5 class="d-inline p-0 m-0 px-3">Tater-Tec</h5>
          </div>
          <img
            v-if="$auth.isAuthenticated"
            class="profile-img"
            :src="$auth.userInfo.picture"
            alt="user-profile-image"
          />
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
  methods: {},
};
</script>

<style></style>
