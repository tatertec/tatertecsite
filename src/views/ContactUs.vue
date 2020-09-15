<template>
  <div class="col-12">
    <div class="row">
      <div class="col-12">
        <h1>Contact us</h1>
      </div>
      <div class="col-md-6 ">
        <form class="text-left p-2 form-box card bg-light shadow m-auto ">
          <h2>Send us a message.</h2>
          <label class="label" for="name">Name</label>
          <input class="w-100" type="text" />
          <br />
          <label class="label" for="name">E-mail</label>
          <input class="w-100" type="text" />
          <br />
          <label class="label" for="name">Message</label>
          <textarea class="w-100" type="text" rows="8" />
          <button
            class="btn btn-outline-success btn-info text-light mt-5 py-2 my-4 "
          >
            Submit
          </button>
        </form>
      </div>
      <div class="col-md-6  ">
        <h4>Technical help: 208-695-4231</h4>
        <h4>Sales: 208-695-4231</h4>
        <button class="btn btn-info text-light btn-outline-success">
          Email
        </button>
        <h4 class="d-inline pl-2">email.dev@gmail.com</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  components: {},
};
</script>

<style>
.map {
  height: 500px;
}
.form-box {
  max-width: 500px;
}
.label {
  min-width: 5rem;
}
</style>
