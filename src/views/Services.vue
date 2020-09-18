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
            <i class="fas fa-desktop"></i>
            <i class="fas fa-mobile-alt pl-1"></i>
            <span class="text-primary px-3">MOBILE-FRIENDLY</span>
          </h5>
          <p>Nearly every site needs to be responsive in today's world. That's why we include this with every website for no extra charge.</p>
        </div>

        <div>
          <h5>
            <i class="fas fa-toolbox"></i>
            <span class="text-primary px-3">Tools | features</span>
          </h5>
          <p>We provide awesome tools and features to manage your site for a small fixed rate. Easily change details about your site in real-time. Something on sale or adding to your portfolio. Were adding features all the time.</p>
        </div>
        <div>
          <h5>
            <i class="fas fa-money-bill-wave-alt text-light"></i>
            <span class="text-primary px-3">CLEAR SIMPLE PRICING</span>
          </h5>
          <p>No hidden fees. We only charge you for the tools and services you need.</p>
        </div>
      </div>
    </div>

    <div class="row bg-secondary d-flex justify-content-around">
      <div class="col-12">
        <h2 class="pt-4">Web design and hosting</h2>
      </div>
      <div class="col-12 col-lg-4">
        <div class="shadow product-card bg-light p-2 m-2">
          <h4 class="m-0 p-2">GET ESTABLISHED</h4>
          <div class="d-flex justify-content-between m-0 py-2">
            <h5 class="d-inline m-0 p-0">Starting at $250</h5>
          </div>
          <p>We design,build, and host your site.</p>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="shadow product-card bg-light p-2 m-2">
          <h4 class="m-0 p-2">THE START UP</h4>
          <div class="d-flex justify-content-between m-0 py-2">
            <h5 class="d-inline m-0 p-0">Starting at $500</h5>
          </div>
          <p>We design,build, Create SEO focused content, and host your site.</p>
        </div>
      </div>
      <!-- <div class="col-12 col-lg-4">
        <div class="shadow product-card bg-light p-2 m-2">
          <h4 class=" m-0 p-2">ADVANCED SEO</h4>
          <div class="d-flex justify-content-between m-0 py-2">
            <h5 class="d-inline m-0 p-0">Starting at $1000</h5>
          </div>
          <p>Coming soon were looking for an SEO expert to join our team. We provide an SEO expert to generate leads from search engines.</p>
        </div>
      </div>-->
      <div class="col-12">
        <hr class="bg-dark" />
        <h2>Tools and Marketing</h2>
      </div>
      <div class="col-12 col-lg-4">
        <div class="shadow product-card bg-light p-2 m-2">
          <h4 class="m-0 p-2">Site managment tools</h4>
          <div class="m-0 py-2 text-dark">
            <h5 class="d-inline m-0 p-0">Commeing soon</h5>
            <h6 class="d-inline">/Mo</h6>
          </div>
          <p>Extra tools and fetures. Manage your site with ease. Send emails to customers and more.</p>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="shadow product-card bg-light p-2 m-2">
          <h4 class="m-0 p-2">Marketing</h4>
          <div class="m-0 py-2">
            <h5 class="d-inline m-0 p-0">Coming soon</h5>
            <h6 class="d-inline">/Mo</h6>
          </div>
          <p>Coming soon were looking for an SEO expert to join our team. We provide an SEO expert to generate leads from search engines.</p>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="shadow product-card bg-light p-2 m-2">
          <h4 class="m-0 p-2">ADVANCED SEO</h4>
          <!-- <div class="d-flex justify-content-between m-0 py-2">
            <h5 class="d-inline m-0 p-0">Starting at $1000</h5>
          </div>-->
          <h5>Comming soon</h5>
          <p>We are looking for an SEO expert to join our team. We provide an SEO expert to generate leads from search engines.</p>
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

<style>
.product-card {
  height: 90%;
}
</style>
