<template>
  <div class="">
    <div class="m-1 my-3 p-2 p-3 shadow bg-light">
      <div class>
        <p>
          <b>Name:</b>
          {{ message.senderName }}
        </p>
        <p v-if="message.senderPhoneNumber">
          <b>Phone:</b>
          {{ message.senderPhoneNumber }}
        </p>
      </div>
      <div class>
        <p>
          <b>Email:</b>
          {{ message.senderEmail }}
        </p>
      </div>
      <div class>
        <p>
          <b>Message:</b>
          {{ message.body }}
        </p>
      </div>

      <div class="d-lg-block d-flex justify-content-between">
        <a
          :title="message.senderPhoneNumber"
          class="br-circle mx-2 mx-lg-4 p-2 px-3 btn-success btn"
          href="tel:2086954231"
          ><i class="fas fa-phone-alt"></i
        ></a>

        <a
          :title="message.senderEmail"
          class="br-circle mx-2 mx-lg-4 p-2 px-3 btn-dark btn"
          :href="`mailto:${message.senderEmail}?subject = ${siteId}&body = buttonEmail.....`"
        >
          <i class="far fa-envelope"></i>
        </a>
        <button
          @click="deleteMessage"
          class="mx-2 mx-lg-4 p-2 px-3 btn btn-danger text-light"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "messageComponent",
  props: ["message", "siteId"],
  methods: {
    deleteMessage() {
      this.$store.dispatch("deleteMessage", this.message.id);
    },
  },
};
</script>

<style>
.br-circle {
  border-radius: 100%;
}
</style>
