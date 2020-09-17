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
                <router-link to="Portfolio">OUR WORK</router-link>
              </a>
            </li>
            <!-- <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1"
            ><router-link to="Services">Services</router-link></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1"
            ><router-link to="Portfolio">Portfolio</router-link></a
          >
            </li>-->
            <li class="nav-item">
              <a class="nav-link" href="#" tabindex="-1">
                <router-link to="ContactUs">Contact Us</router-link>
              </a>
            </li>
          </ul>
          <div>
            <!-- <img class="d-inline" src="../assets/Logo.svg" height="30px" alt /> -->
            <h5 class="d-inline p-0 m-0 px-3">Concrete Digital Solutions</h5>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
