<template>
  <div class="row bg-warning sticky-top shadow rounded-bottom">
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
          <ul
            class="navbar-nav d-flex justify-content-around text-dark align-items-center"
          >
            <li class="align-self-center w-100 text-center m-0 p-0">
              <b class="xxl px-lg-5 mx-lg-3">TaterTec</b>
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

<style>
.xxl {
  font-size: xx-large;
}
</style>
