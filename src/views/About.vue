<template>
  <div class="col-12 p-0">
    <div class="row">
      <div class="col-12 p-0 bg-secondary">
        <h1 class="text-center text-primary py-5">Meet our team</h1>
      </div>

      <div class="col-12 bg-dark text-primary py-4 col-md-6 p-0">
        <div class="text-center bg-dark text-primary py-4 employee-card">
          <h2>Ryan Harmon</h2>
          <div class="employee-photo-container">
            <img
              class="employee-photo-2 my-3"
              src="../assets/Employee2.jpg"
              alt
            />
          </div>
          <h4>Founder</h4>
          <p class="text-light">
            Ryan is a hard-working businessman. His passion for starting and
            growing companies drives him to help others succeed
          </p>
        </div>
      </div>
      <div class="col-12 bg-dark text-primary py-4 col-md-6 p-0">
        <div
          class="text-center bg-dark text-primary py-4 employee-card border-left"
        >
          <h2>Justin Gates</h2>

          <div class="employee-photo-container">
            <img
              class="employee-photo my-3"
              src="../assets/Employee1.jpg"
              alt
            />
          </div>
          <h4>Software Engineer</h4>
          <p class="text-light">
            Passionate about solving real-world problems and taking on a
            challenge
          </p>
        </div>
      </div>
    </div>
    <div class="row bg-light px-5">
      <div class="col-12 p-5 text-center">
        <h2 class="text-dark">Our mission is simple</h2>
        <p>
          We started concrete digital solutions to help business owners create a
          digital presence and grow there company.
        </p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
};
</script>

<style>
.employee-photo {
  height: 400px;
}
.employee-photo-2 {
  height: 200px;
}

.employee-card {
  padding-right: 2rem;
  padding-left: 2rem;
}
.border-right {
  border-right: 1px solid white;
}
.border-left {
  border-left: 1px solid white;
}
</style>
