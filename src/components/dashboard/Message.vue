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

      <div class="">
        <!-- <button class="btn btn-primary">Reply</button> -->
        <button @click="deleteMessage" class="btn btn-danger px-5 text-light">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "messageComponent",
  props: ["message"],
  methods: {
    deleteMessage() {
      this.$store.dispatch("deleteMessage", this.message.id);
    },
  },
};
</script>

<style></style>
