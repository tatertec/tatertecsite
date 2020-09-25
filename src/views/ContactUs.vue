<template>
  <div class="col-12 p-0">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-primary py-5">Give us a call today</h1>
      </div>
    </div>
    <div class="row bg-secondary py-5">
      <div class="col-md-6 col-12 p-0">
        <MessageForm />
        <!-- <form class="text-left p-2 form-box card bg-dark text-light shadow m-auto p-1">
          <h2 class="text-primary">Send us a message.</h2>
          <label class="label" for="name">Name</label>
          <input class="w-100" type="text" />
          <br />
          <label class="label" for="name">E-mail</label>
          <input class="w-100" type="text" />
          <br />
          <label class="label" for="name">Message</label>
          <textarea class="w-100" type="text" rows="8" />
          <button class="btn btn-info text-light mt-5 py-2 my-4">Submit</button>
        </form> -->
      </div>
      <div class="col-md-6 col-12 py-5 px-5">
        <h4 class="text-primary">Sales</h4>
        <h5>Phone: 208-985-5973</h5>
        <h5>E-mail: tatertech@gmail.com</h5>
        <br />
        <h4 class="text-primary">Technical help</h4>
        <h5>Phone: 208-695-4231</h5>
        <h5>E-mail: justingates.dev@gmail.com</h5>
      </div>
    </div>
  </div>
</template>

<script>
import MessageForm from "../components/messageForm";
export default {
  name: "ContactUs",
  components: {
    MessageForm,
  },
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
