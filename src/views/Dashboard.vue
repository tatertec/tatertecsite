<template>
  <div class="col-12 p-0">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-primary py-5">Dashboard</h1>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center">
      <h3>Login to continue</h3>

      <div class="navbar-text">
        <button
          class="btn btn-primary text-light"
          @click="login"
          v-if="!$auth.isAuthenticated"
        >
          Login
        </button>
        <button class="btn btn-danger text-light" @click="logout" v-else>
          logout
        </button>
      </div>
    </div>
    <div class="col-12"></div>
  </div>
</template>

<script>
export default {
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },

  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
      this.$store.dispatch("getProfile");
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    },
  },
};
</script>

<style></style>
