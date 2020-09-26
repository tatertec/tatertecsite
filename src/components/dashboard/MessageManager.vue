<template>
  <div class="col-12 p-0">
    <div class="row">
      <div class="col-4">
        <h4 class="d-flex align-items-center justify-content-around">
          <div class="" @click="getMessages">
            <i class="fas fa-sync-alt action"></i>
          </div>
          <div v-if="profile.textEnabled" class="" @click="toggleTextAlert">
            <i class="fas fa-bell action"></i>
          </div>
          <div v-else class="" @click="toggleTextAlert">
            <i class="fas fa-bell-slash action"></i>
          </div>
        </h4>
      </div>
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
        <div v-if="loading">
          <Loading />
        </div>
        <div v-else>
          <h4>You don't have any messages.</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "./Message";
import Loading from "../Loading";
export default {
  data() {
    return {
      loading: false,
    };
  },

  async mounted() {
    this.loading = true;
    await this.$store.dispatch("getMessages");
    this.loading = false;
  },

  computed: {
    messages() {
      return this.$store.state.MessageStore.messages;
    },
    profile() {
      return this.$store.state.ProfileStore.profile;
    },
  },
  methods: {
    async getMessages() {
      this.loading = true;
      await this.$store.dispatch("getMessages");
      this.loading = false;
    },
    toggleTextAlert() {
      this.$store.dispatch("toggleTextAlert", this.profile);
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