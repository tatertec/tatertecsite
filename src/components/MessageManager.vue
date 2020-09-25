<template>
  <div class="col-12 p-0">
    <div class="row">
      <div class="col-12">Messages</div>
    </div>
    <div class="row">
      <div class="col-12 p-0" v-if="messages.length > 0">
        <Message
          v-for="message in messages"
          :key="message.id"
          :message="message"
        />
      </div>
      <div v-else class="col-12">
        <h4>You don't have any messages.</h4>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "../components/Message";
import Loading from "../components/Loading";
export default {
  mounted() {
    this.$store.dispatch("getMessages");
  },
  computed: {
    messages() {
      return this.$store.state.MessageStore.messages;
    },
  },
  methods: {
    async getMessages() {
      this.$store.dispatch("getMessages");
    },
  },
  components: {
    Message,
    Loading,
  },
};
</script>

<style>
</style>