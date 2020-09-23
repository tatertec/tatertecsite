<template>
  <div class="col-12 p-0">
    <div v-if="!$auth.isAuthenticated" class="row">
      <div class="col-12 p-0 text-center py-5">
        <h1 class="text-primary">Login to continue</h1>
      </div>
      <div class="col-12 p-0">
        <div class="text-center py-5">
          <button class="btn btn-primary text-light px-5" @click="login">Login</button>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <div class="col-12 p-0 text-center">
        <h1 class="text-primary h1-anim py-5">Dashboard</h1>
      </div>

      <div class="col-12 bg-secondary py-3 d-flex justify-content-between align-items-center">
        <div>
          <div class="dropdown mr-1">
            <button
              type="button"
              class="btn btn-dark text-light dropdown-toggle"
              id="dropdownMenuOffset"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-offset="0,0"
            >Toolbox</button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
              <span @click="SetToolManagePortfolio" class="action dropdown-item">Portfolio</span>
              <span @click="SetToolManageSale" class="action dropdown-item">Sale</span>
              <span @click="SetToolManageContent" class="action dropdown-item">Content</span>
            </div>
          </div>
          <img :src="$auth.userinfo.picture" alt />
        </div>

        <div class>
          <span class="action" @click="logout">logout</span>
        </div>
      </div>

      <div
        v-if="editPortfolio"
        class="col-12 col-lg-7 col-md-9 col-sm-11 py-5 m-auto p-0 text-center"
      >
        <p>{{$auth.user}}</p>
        <button class="btn btn-dark text-light my-3 p-3 px-5">
          <h3 class="m-0 p-0">
            <i class="fas fa-camera"></i>
          </h3>
        </button>
        <input class="d-none" ref="picture-file" type="file" />
        <br />
        <img
          class="preview-img"
          src="https://placehold.it/500x500?text=please%20select%20a%20file"
          alt
        />
        <br />
        <button class="btn btn-primary my-3">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
$(function () {
  var navMain = $(".navbar-collapse");
  navMain.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse("hide");
  });
});
export default {
  data() {
    return {
      editPortfolio: true,
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    user() {
      return this.$store.state.user;
    },
  },

  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      await this.$store.dispatch("getProfile");
      this.$store.dispatch("getUser");
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    },
  },
};
</script>

<style>
.action {
  cursor: pointer;
}
/* .h1-anim {
  animation-name: h1;
  animation-duration: 1s;
  font-size: x-large;
  padding: 0.5rem;
  margin: 0rem;
} */
@keyframes h1 {
  0% {
    padding: 3rem;
    font-size: 36pt;
  }
  100% {
    padding: 0.5rem;
    font-size: x-large;
  }
}
.preview-img {
  width: 100%;
}
.dashboardlogo {
  height: 5rem;
  width: 5rem;
  padding: 0.5rem;
  overflow: hidden;
  border-radius: 50%;
}
</style>














  





