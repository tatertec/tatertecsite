<template>
  <div class="col-12 p-0">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-primary py-5">Meet our team</h1>
      </div>

      <div class="col-12 bg-dark text-primary py-4 col-md-6 p-0">
        <div class="text-center bg-dark text-primary py-4 employee-card">
          <h2>Ryan Harmon</h2>
          <div class="employee-photo-container">
            <img class="employee-photo-2 my-3" src="../assets/Employee2.jpg" alt />
          </div>
          <h4>Founder</h4>
          <p
            class="text-left text-light"
          >We started concrete digital solutions to help people help people grow there local business using digital platforms and tools. It is our dream to see local business owners thrive in Idaho as a result of our hard work.</p>
        </div>
      </div>
      <div class="col-12 bg-dark text-primary py-4 col-md-6 p-0">
        <div class="text-center bg-dark text-primary py-4 employee-card border-left">
          <h2>Justin Gates</h2>

          <div class="employee-photo-container">
            <img class="employee-photo my-3" src="../assets/Employee1.jpg" alt />
          </div>
          <h4>Software Engineer</h4>
          <p
            class="text-left text-light"
          >l s Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit earum consequatur nesciunt id aspernatur eligendi alias laudantium, impedit nihil maiores ut ratione fugiat enim dolor nobis odio labore exercitationem nemo?</p>
        </div>
      </div>
    </div>
    <div class="row bg-light px-5">
      <div class="col-12 p-5 text-center">
        <h2 class="text-primary">Our mission</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem molestiae rerum quidem cupiditate architecto aut sed repudiandae repellendus? Molestiae error ut sapiente aliquam ab autem porro inventore sit perspiciatis nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tenetur quidem libero esse eveniet reprehenderit? Nesciunt, consequatur eum asperiores nobis id libero dolorem minus corporis accusantium laboriosam eos, aliquid ab.</p>
        <hr />
      </div>
    </div>
    <div class="row bg-light px-5">
      <div class="col-12 p-5 text-center">
        <h2 class="text-primary">Our Services</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem molestiae rerum quidem cupiditate architecto aut sed repudiandae repellendus? Molestiae error ut sapiente aliquam ab autem porro inventore sit perspiciatis nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tenetur quidem libero esse eveniet reprehenderit? Nesciunt, consequatur eum asperiores nobis id libero dolorem minus corporis accusantium laboriosam eos, aliquid ab.</p>
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
.employee-photo-container {
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
