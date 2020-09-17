<template>
  <div class="col-12">
    <div class="row">
      <div class="col-12">
        <h1>Our Work</h1>
      </div>

      <div class="col-12 col-md-6">
        <h2>Main title</h2>
        <!-- <img class="img-fluid" src="../assets/portfolio1.jpg" alt /> -->
        <h4>Job title / location / type of work</h4>
        <p>
          Desctiption Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facilis incidunt rerum suscipit dolor, sunt ea! Rem natus, non
          consequatur quaerat molli
        </p>
      </div>

      <div class="col-12 col-md-6">
        <h2>Main title</h2>
        <!-- <img class="img-fluid" src="../assets/portfolio2.jpg" alt /> -->
        <h4>Job title / location /type of work</h4>
        <p>
          Desctiption Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facilis incidunt rerum suscipit dolor, sunt ea! Rem natus, non
          consequatur quaerat molli
        </p>
      </div>
    </div>
    <div class="col-12">
      <!-- <ServiceComp /> -->
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

<style></style>
