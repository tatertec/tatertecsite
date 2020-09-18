<template>
  <div class="col-12 p-0">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-primary py-5">DESIGN | SEO | MARKETING</h1>
      </div>

      <div class="col-12 text-light bg-dark py-5">
        <h3
          class="text-primary"
        >We provide tailored web solutions from design to Marketing automation.</h3>

        <div>
          <hr class="bg-light" />
          <h5>
            <i class="fas fa-tachometer-alt text-light"></i>
            <span class="text-primary px-3">SPEED</span>
          </h5>
          <p>Our sites load quickly. Performance helps your site rank higher in search engines.</p>
        </div>

        <div>
          <h5>
            <i class="fas fa-money-bill-wave-alt text-light"></i>
            <span class="text-primary px-3">COST</span>
          </h5>
          <p>We provide several payment options and service plans to fit your specific business needs.</p>
        </div>

        <div>
          <h5>
            <i class="fas fa-desktop"></i>
            <i class="fas fa-mobile-alt pl-1"></i>
            <span class="text-primary px-3">MOBILE FRIENDLY</span>
          </h5>
          <p>Nearly every site needs to be mobile-friendly in today's world. We deliver a great user experience on any device.</p>
        </div>

        <div>
          <h5>
            <i class="fas fa-toolbox"></i>
            <span class="text-primary px-3">Tools | features</span>
          </h5>
          <p>Easily change details about your site in real-time. Something on sale or adding to your portfolio. Were adding features all the time.</p>
        </div>
      </div>
    </div>
    <div class="row bg-secondary">
      <div class="col-12 col-lg-4">
        <div class="shadow bg-light p-2 m-2">
          <h4>Basic</h4>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="shadow bg-light p-2 m-2">
          <h4>Advanced</h4>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="shadow bg-light p-2 m-2">
          <h4>Premium</h4>
        </div>
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
