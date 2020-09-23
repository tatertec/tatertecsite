<template>
  <div class="col-12 p-0">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-primary py-5">Our Work</h1>
      </div>
      <div class="row bg-dark text-light py-5 p-2 p-lg-5">
        <div class="col-12 col-md-6">
          <div class="px-3 d-flex align-items-center flex-column">
            <div>
              <h2 class="text-primary m-0">Company name</h2>
              <p class="px-3">
                Desctiption Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis incidunt rerum suscipit dolor, sunt ea! Rem natus, non
                consequatur quaerat molli
              </p>
            </div>
            <div class="py-3">
              <button class="btn btn-primary px-5">View Site</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 text-center">
          <img class="img-fluid p-lg-4 p-2" src="https://placehold.it/400x300" alt />
        </div>
        <div class="col-12">
          <hr class="bg-light text-light" />
        </div>

        <div class="col-12 col-md-6">
          <div class="px-3 d-flex align-items-center flex-column">
            <div>
              <h2 class="text-primary m-0">Company name</h2>
              <p class="px-3">
                Desctiption Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis incidunt rerum suscipit dolor, sunt ea! Rem natus, non
                consequatur quaerat molli
              </p>
            </div>
            <div class="py-3">
              <button class="btn btn-primary px-5">View Site</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 text-center">
          <img class="img-fluid p-lg-4 p-2" src="https://placehold.it/400x300" alt />
        </div>
      </div>
    </div>
    <div class="row py-5 text-center">
      <div class="col-lg-8 m-auto col-12">
        <h4>Your satisfaction is guaranteed</h4>
        <p class="p-2">We will tweak your site until it is just the way you like it</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceComp from "../components/ServicesComp";
export default {
  name: "Portfolio",
  components: {
    ServiceComp,
  },
};
</script>

<style>
.border-top {
  min-height: 5px;
}
</style>
