<template>
  <div class="col-12">
    <div class="row">
      <div class="col-4">
        <div class="logo-img-container">
          <!-- <img class="logo p-2" src="../assets/Logo.png" alt="Logo" /> -->
        </div>
      </div>
      <div class="col-8">
        <div class="row">
          <Navbar />
          <div class="col-12 text-right pt-m-2 pt-5">
            <small class="pt-3 pt-m-0">Call us today!</small>
            <h3>(208)888-8888</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.logo {
  max-width: 30vw;
  max-height: 20vh;
}
</style>
