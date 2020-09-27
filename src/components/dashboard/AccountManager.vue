<template>
  <div class="row">
    <div class="col-12 bg-light">
      <h2>Welcome {{ profile.name }}</h2>
    </div>
    <div class="col-4">he</div>
    <div class="col-8">98888998</div>
  </div>
</template>

<script>
export default {
  computed: {
    profile() {
      return this.$store.state.ProfileStore.profile;
    },
  },
};
</script>

<style>
</style>