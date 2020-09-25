<template>
  <div v-if="this.submitedForm">
    <form class="d-flex justify-content-center align-items-center p-lg-4">
      <div class="bg-dark shadow text-primary form-container">
        <h4>Get in touch</h4>
        <label class="m-0 pt-2 text-light">Name</label>
        <br />
        <input
          readonly
          v-model="senderName"
          class="bg-secondary p-1 w-100"
          type="text"
        />
        <br />
        <label class="m-0 pt-2 text-light">E-mail</label>
        <br />
        <input
          readonly
          v-model="senderEmail"
          class="bg-secondary p-1 w-100"
          type="text"
        />
        <br />
        <label class="m-0 pt-2 text-light">Phone number</label>
        <br />
        <input
          readonly
          v-model="senderPhoneNumber"
          class="bg-secondary p-1 w-100"
          type="text"
        />
        <br />
        <label class="m-0 pt-2 text-light">Message</label>
        <br />
        <textarea
          readonly
          v-model="body"
          class="bg-secondary p-1 w-100"
          rows="5"
        ></textarea>
        <br />
        <div class="px-5 bg-success text-light py-2 success-message">
          Thank you for contacting us we will get back to you shortly
        </div>
      </div>
    </form>
  </div>
  <form v-else class="d-flex justify-content-center align-items-center p-lg-4">
    <div class="bg-dark shadow text-primary form-container">
      <h4>Get in touch</h4>
      <label class="m-0 pt-2 text-light">Name</label>
      <br />
      <input v-model="senderName" class="p-1 w-100" type="text" />
      <br />
      <label class="m-0 pt-2 text-light">E-mail</label>
      <br />
      <input v-model="senderEmail" class="p-1 w-100" type="text" />
      <br />
      <label class="m-0 pt-2 text-light">Phone number</label>
      <br />
      <input v-model="senderPhoneNumber" class="p-1 w-100" type="text" />
      <br />
      <label class="m-0 pt-2 text-light">Message</label>
      <br />
      <textarea v-model="body" class="p-1 w-100" rows="5"></textarea>
      <br />
      <!-- this is here for robots to fill out... not humans -->
      <div style="position: absolute; left: -5000px" aria-hidden="true">
        <input
          v-model="botfeild"
          type="text"
          name="b_bdfa11b8ddbcf6123b2e21b4a_c3dbd0038c"
          tabindex="-1"
          value=""
        />
      </div>
      <button @click="submitMessageForm" class="btn btn-primary mt-3 px-5">
        Send message
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      submitedForm: false,
      senderName: "",
      senderEmail: "",
      senderPhoneNumber: "",
      botfeild: "",
      body: "",
    };
  },
  methods: {
    submitMessageForm() {
      event.preventDefault();
      //NOTE prevents robots from attacking
      if (this.botfeild) {
        return;
      }
      let data = {
        senderName: this.senderName,
        senderEmail: this.senderEmail,
        senderPhoneNumber: this.senderPhoneNumber,
        body: this.body,
      };
      this.$store.dispatch("sendMessage", data);
      this.submitedForm = true;
    },
  },
};
</script>

<style>
.success-message {
  transition: 1s;
  opacity: 1;
}
</style>
