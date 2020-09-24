<template>
  <form class="d-flex justify-content-center align-items-center p-lg-4">
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
      senderName: "",
      senderEmail: "",
      senderPhoneNumber: "",
      body: "",
    };
  },
  methods: {
    submitMessageForm() {
      let data = {
        senderName: this.senderName,
        senderEmail: this.senderEmail,
        senderPhoneNumber: this.senderPhoneNumber,
        body: this.body,
      };
      this.$store.dispatch("sendMessage", data);
    },
  },
};
</script>

<style></style>
