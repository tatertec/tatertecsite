<template>
  <div class="col-12">
    <div class="row">
      <div class="col-12">
        <h1>Services</h1>
      </div>

      <div class="col-12 col-md-6">
        <h2>We provide high quality constuction at a competitive price.</h2>
        <!-- <img class="img-fluid" src="../assets/ServicesPhoto.jpg" alt /> -->
        <h4>Specializing in Houses</h4>
        <p>
          et out to disrupt the building world. Lorem ipsum dolor sit, amet
          consectetur adipisicing el
        </p>
        <h4>No job to big or to small</h4>
        <p>
          One call we do it all from small home projects to large scale
          manufacturing
        </p>
        <h4>Specializing in building</h4>
        <p>
          We like to build Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsum voluptatem veritatis, corporis a magni numquam qui
          repellat offici
        </p>
      </div>
      <div class="col-12 col-md-6">
        <ServiceComp />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceComp from "../components/ServicesComp";
export default {
  name: "Services",
  components: {
    ServiceComp,
  },
};
</script>

<style></style>
